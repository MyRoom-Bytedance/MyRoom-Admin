import { Navigate } from 'react-router';

/**
 * 检查登录状态
 */
export const LoginRedirect = () => {
  // TODO: 这里检查逻辑比较简单，日后修改
  const access_token = localStorage.getItem('access_token');

  return <Navigate to={access_token ? '/admin' : '/login'} />;
};
