import { type } from 'os';
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

export const UserRegister = (data: UserLoginRequest) => {
  return request<UserBaseInfo>({
    url: '/user/register',
    method: 'POST',
    data,
  });
}

type UserUpdateRequest = {
  pre_password?: string;
  new_password?: string;
  username?: string;
};

export const UserUpdate = (data: UserUpdateRequest) => {
  return request<UserBaseInfo>({
    url: '/user/update',
    method: 'POST',
    data,
  });
}
