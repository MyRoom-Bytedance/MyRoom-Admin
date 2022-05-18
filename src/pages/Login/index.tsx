import { LoginFormPage, ProFormText, ProFormCaptcha, ProFormCheckbox } from '@ant-design/pro-form';
import {
    UserOutlined,
    MobileOutlined,
    LockOutlined,
} from '@ant-design/icons';
import { message, Tabs, Button } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import '@ant-design/pro-form/dist/form.css';
import styled from 'styled-components';
import { setUserCache } from 'redux/userSlice';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import request from './../../service/axios';
type LoginType = 'account' | 'register' | 'phone';

export const Login = React.memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginType, setLoginType] = useState<LoginType>('account');

    function register() {
        setLoginType('register')
    }
    function backLogin() {
        setLoginType('account')
    }
    const handleLogin = async (loginType: string, form: Record<string, any>) => {
        let data = {
            password: '',
            username: ''
        }
        // 账号密码登入
        if (loginType === 'account') {
            data.password = form?.password
            data.username = form?.username
            let res = await request({
                url: '/user/login',
                method: 'POST',
                data
            })
            // 设置token值
            localStorage.setItem('access_token', res.token)
        } else if (loginType === 'phone') {
            // 验证码登入 
            let res = await request({
                url: '/user/verifiy',
                method: 'POST',
                data: form
            })
            // 设置token值
            console.log(res);
            localStorage.setItem('access_token', res.token)
        } else {
            let res = await request({
                url: '/user/register',
                method: 'POST',
                data: JSON.stringify(form)
            })
        };
        dispatch(setUserCache(form));
        message.success(`${loginType !== 'register' ? '登录' : '注册'}成功`);
        setLoginType('account');
        navigate('/');
    };

    return (
        <LoginContainer>
            <LoginFormPage
                backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
                title="MyRoom"
                subTitle={(loginType === 'register' ? '经纪人注册' : '经纪人登录')}
                submitter={{
                    searchConfig: {
                        submitText: loginType === 'register' ? '注册' : '登录'
                    }
                }}
                activityConfig={{
                    style: {
                        boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                        color: '#fff',
                        borderRadius: 8,
                        backgroundColor: '#1677FF',
                    },
                    title: '还没有注册？',
                    subTitle: '加入我们，和优秀的人，做有挑战的事！',
                    action: (
                        <Button
                            size="large"
                            style={{
                                borderRadius: 20,
                                background: '#fff',
                                color: '#1677FF',
                                width: 120,
                            }}
                            onClick={register}
                        >
                            即刻注册
                        </Button>
                    ),
                }}
                onFinish={handleLogin.bind(null, loginType)}
            >
                {loginType !== 'register' &&
                    <Tabs activeKey={loginType} onChange={(activeKey) => setLoginType(activeKey as LoginType)}>
                        <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
                        <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
                    </Tabs>
                }

                {loginType === 'account' && (
                    <>
                        <ProFormText
                            name="loginUsername"
                            fieldProps={{
                                size: 'large',
                                prefix: <UserOutlined className={'prefixIcon'} />,
                            }}
                            placeholder={'请输入用户名'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        />
                        <ProFormText.Password
                            name="loginPassword"
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'} />,
                            }}
                            placeholder={'请输入密码'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码！',
                                },
                            ]}
                        />
                        <div
                            style={{
                                marginBottom: 24,
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Button style={{ padding: '0 0px' }} size="small" type="link" onClick={register}>免费注册</Button>
                            <Button style={{ padding: '0 0px' }} size="small" type="text" >忘记密码</Button>
                        </div>
                    </>
                )}
                {loginType === 'register' && (
                    <>
                        <ProFormText
                            fieldProps={{
                                size: 'large',
                                prefix: <UserOutlined className={'prefixIcon'} />
                            }}
                            name="username"
                            placeholder={'请设置用户名'}
                            rules={[
                                {
                                    required: true,
                                    message: '您用户名还未设置',
                                }
                            ]}
                        />
                        <ProFormText.Password
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'} />,
                            }}
                            name="password"
                            placeholder={'请设置密码'}
                            rules={[
                                {
                                    required: true,
                                    message: '您密码还未设置',
                                },
                            ]}
                        />
                        <div
                            style={{
                                marginBottom: 24,
                            }}
                        >
                            <span>已有帐号？</span>
                            <Button style={{ padding: '0 0px' }} type="link" onClick={backLogin}>现在登录</Button>
                        </div>


                    </>
                )}
                {loginType === 'phone' && (
                    <>
                        <ProFormText
                            fieldProps={{
                                size: 'large',
                                prefix: <MobileOutlined className={'prefixIcon'} />,
                            }}
                            name="mobile"
                            placeholder={'手机号'}
                            rules={[
                                {
                                    required: true,
                                    message: '请输入手机号！',
                                },
                                {
                                    pattern: /^1\d{10}$/,
                                    message: '手机号格式错误！',
                                },
                            ]}
                        />
                        <ProFormCaptcha
                            fieldProps={{
                                size: 'large',
                                prefix: <LockOutlined className={'prefixIcon'} />,
                            }}
                            captchaProps={{
                                size: 'large',
                            }}
                            placeholder={'请输入验证码'}
                            captchaTextRender={(timing, count) => {
                                if (timing) {
                                    return `${count} ${'获取验证码'}`;
                                }
                                return '获取验证码';
                            }}
                            name="captcha"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入验证码！',
                                },
                            ]}
                            onGetCaptcha={async () => {
                                message.success('获取验证码成功！验证码为：1234');
                            }}
                        />
                    </>
                )}

            </LoginFormPage>
        </LoginContainer>
    );
});

const LoginContainer = styled.div`
    height: 100%;
`
