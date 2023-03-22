import { ApiWrapperConfig, useApiWrapper } from '@hooks/use-api-wrapper';
type Input = Record<string, never>;

type Output = {
  name: string;
  gender: string;
  email: string;
  status: string;
  id: string;
}[];

type Error = {
  info: unknown;
  status: number;
};

export const useGetUsers = (config: ApiWrapperConfig<Input, Output> = {}) => {
  return useApiWrapper<Input, Output, Error>({
    url: 'https://gorest.co.in/public/v2/users',
    ...config
  });
};
