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

/**
 * 验证码登录请求JSON
 */
type UserVerifyRequest = {
  mobile: string;
  captcha: string;
};

export const UserVerifyLogin = (data: UserVerifyRequest) => {
  return request<UserBaseInfo>({
    url: '/user/verify',
    method: 'POST',
    data,
  });
};
