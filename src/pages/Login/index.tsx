import { LoginFormPage, ProFormText, ProFormCheckbox } from '@ant-design/pro-form';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { message } from 'antd';
import React from 'react';
import 'antd/dist/antd.min.css';
import '@ant-design/pro-form/dist/form.css';
import styled from 'styled-components';
import { setUserCache } from 'redux/userSlice';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { UserLogin } from 'service/user';

/**
 * copy的官方的Login页，加了一些redux逻辑
 */
export const Login = React.memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isRegister, setRegister] = React.useState(false);

  const handleLogin = async (form: Record<string, any>) => {
    try {
      // 账号密码登入
      const res = await UserLogin({
        username: form.username,
        password: form.password,
      });
      console.log(res);
      // 使用redux记录 userInfo （token在userInfo中）
      dispatch(setUserCache({
        token: res.token,
        nickname: form.username,
      }));
      message.success('登陆成功');
      localStorage.setItem('access_token', res.token);
      navigate('/admin');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LoginContainer>
      <LoginFormPage
        backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
        title="MyRoom"
        subTitle="经纪人登陆"
        onFinish={handleLogin.bind(null)}
      >
        {
          <>
            <ProFormText
              name="username"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={'prefixIcon'} />,
              }}
              placeholder={'用户名'}
              rules={[
                {
                  required: true,
                  message: '请输入用户名',
                },
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={'prefixIcon'} />,
              }}
              placeholder={'密码'}
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            />
          </>
        }
        <div
          style={{
            marginBottom: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <span
            style={{
              float: 'right',
              cursor: 'pointer',
            }}
            onClick={() => setRegister(!isRegister)}
          >
            {isRegister ? '返回登录' : '注册账号'}
          </span>
        </div>
      </LoginFormPage>
    </LoginContainer>
  );
});

const LoginContainer = styled.div`
  height: 100%;
  padding: 24px;
`;
