import { LoginFormPage, ProFormText, ProFormCaptcha, ProFormCheckbox } from '@ant-design/pro-form';
import {
    UserOutlined,
    MobileOutlined,
    LockOutlined,
    AlipayOutlined,
    WeiboOutlined,
    TaobaoOutlined,
} from '@ant-design/icons';
import { message, Divider, Tabs, Space, Button } from 'antd';
import type { CSSProperties } from 'react';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import '@ant-design/pro-form/dist/form.css'
import styled from 'styled-components';
import { setUserCache } from 'redux/userSlice';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
type LoginType = 'account' | 'register';

export const Login = React.memo((props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loginType, setLoginType] = useState<LoginType>('account');

    function regisiter() {
        setLoginType('register')
    }
    function backLogin() {
        setLoginType('account')
    }
    const handleLogin = async (loginType: string, form: Record<string, any>) => {
        console.log(loginType);
        console.log(form);
        await new Promise(r => setTimeout(r, 1000));
        dispatch(setUserCache(form));
        message.success('登陆成功');
        navigate('/');
    }

    return (
        <LoginContainer>
            <LoginFormPage
                backgroundImageUrl="https://gw.alipayobjects.com/zos/rmsportal/FfdJeJRQWjEeGTpqgBKj.png"
                title="MyRoom"
                subTitle={(loginType === "account"? '经纪人登录' : '经纪人注册')}
                submitter={{
                    searchConfig:{
                        submitText: loginType === "account"? '登录' : '注册'
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
                            onClick={regisiter}
                        >
                            即刻注册
                        </Button>
                    ),
                }}

                onFinish={handleLogin.bind(null, loginType)}
            >
                {loginType === 'account' && (
                    <>
                        <ProFormText
                            name="username"
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
                            name="password"
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
                            <Button style={{padding: '0 0px'}} size="small" type="link" onClick={regisiter}>免费注册</Button>
                            <Button style={{padding: '0 0px'}} size="small" type="text" >忘记密码</Button>
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
                            name="account"
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
                            name="account"
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
                            <Button style={{padding: '0 0px'}} type="link" onClick={backLogin}>现在登录</Button>
                        </div>


                    </>
                )}

            </LoginFormPage>
        </LoginContainer>
    );
});

const LoginContainer = styled.div`
    height: 100%;
`