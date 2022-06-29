import request from './axios';

/**
 * 登录请求JSON
 */
type UserLoginRequest = {
  username: string;
  password: string;
};

export const UserLogin = (data: UserLoginRequest) => {
  return request<UserBaseInfo>({
    url: '/user/login',
    method: 'POST',
    data,
  });
};

