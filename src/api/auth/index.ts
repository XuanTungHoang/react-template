import ApiClient, { ApiResponse } from '@api/ApiClient';

export type EMAuth = 'login';

export interface LoginResponse {
  permissions: string[]
  token: string;
}

export const login = async ({ email, password }): Promise<ApiResponse<LoginResponse>> => {
  const url: EMAuth = `login`;
  const res = await ApiClient.post(url, undefined, { email, password });

  return res.data;
};
