import { ApiWrapperConfig, useApiWrapper } from '@hooks/use-api-wrapper';
export type UserResponse = {
  name: string;
  gender: string;
  email: string;
  status: string;
  id: string;
};
type Input = Record<string, never>;

type Output = UserResponse[];

type Error = {
  info: unknown;
  status: number;
};

export const useGetUsersSsr = (config: ApiWrapperConfig<Input, Output> = {}) => {
  return useApiWrapper<Input, Output, Error>({
    url: '/api/users',
    ...config
  });
};
