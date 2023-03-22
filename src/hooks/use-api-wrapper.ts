import useSWR, { KeyedMutator } from 'swr';
import { SWRConfiguration } from 'swr/dist/types';
import { apiConfig } from '@util/api-config';
import { useCallback, useState } from 'react';
import isEmpty from 'lodash/isEmpty';

type ApiMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiWrapperConfig<Body = unknown, Response = unknown> {
  url?: RequestInfo;
  method?: ApiMethods;
  httpConfig?: Omit<RequestInit, 'method' | 'body'> & { body?: Body };
  swrConfig?: SWRConfiguration<Response>;
  initialData?: Body;
}

export function swrGlobalFetcher<Response = unknown>(config: Omit<ApiWrapperConfig, 'swrConfig' | 'initialData'>) {
  const { method = 'GET', url, httpConfig } = config;

  return apiConfig[method](url, httpConfig) as Promise<Response>;
}

type FetchDataType<Body> = Body & { urlParams?: string; rerender?: number | string | boolean };

type ApiWrapperResponse<ReqBody, ResponseData, ResponseError> = [
  {
    isLoading: boolean;
    data: ResponseData | undefined;
    error: ResponseError;
  },
  (data: FetchDataType<ReqBody>) => unknown,
  KeyedMutator<ResponseData>
];

export function useApiWrapper<ReqBody, ResponseData, Error = unknown>(
  config: ApiWrapperConfig<ReqBody, ResponseData>
): ApiWrapperResponse<ReqBody, ResponseData, Error> {
  const { swrConfig = {}, initialData, url, method = 'GET', httpConfig } = config;

  const [fetchData, setFetchData] = useState(initialData as FetchDataType<ReqBody>);

  // eslint-disable-next-line no-unused-vars
  const { urlParams, rerender, ...rest } = fetchData ?? {};

  const { data, error, isValidating, mutate } = useSWR<ResponseData>(
    fetchData
      ? {
          url: urlParams ? `${url}/${urlParams}` : url,
          method,
          httpConfig: { ...httpConfig, body: isEmpty(rest) ? undefined : rest }
        }
      : null,
    swrGlobalFetcher,
    swrConfig
  );

  const triggerApi = useCallback((data: FetchDataType<ReqBody>) => {
    setFetchData(data);
  }, []);
  // mutate: For Optimistic UI updates https://swr.vercel.app/docs/mutation
  return [{ isLoading: isValidating, data, error }, triggerApi, mutate];
}
