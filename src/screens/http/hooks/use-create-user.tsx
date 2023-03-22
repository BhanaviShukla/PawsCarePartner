import { ApiWrapperConfig, useApiWrapper } from '@hooks/use-api-wrapper';
type Input = {
  name: string;
  gender: string;
  email: string;
  status: string;
};

type Output = {
  name: string;
  gender: string;
  email: string;
  status: string;
  id: string;
};

type Error = {
  info: unknown;
  status: number;
};

export const useCreateUser = (config: ApiWrapperConfig<Input, Output>) => {
  return useApiWrapper<Input, Output, Error>({
    url: 'https://gorest.co.in/public/v2/users',
    method: 'POST',
    httpConfig: {
      headers: {
        Authorization: ' Bearer d97da1925dc4a443fa6706c32dd038d888b2342780bbde794f4a68b11fc0e5b8'
      }
    },
    ...config
  });
};
