import { Breadcrumb, ConfigProvider, Layout, Menu } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';
import { MenuItemType, MenuMode } from 'rc-menu/lib/interface';
import { Outlet, useLocation, useNavigate } from 'react-router';
import Sider from 'antd/lib/layout/Sider';
import { HomeOutlined } from '@ant-design/icons';
import React, { Suspense } from 'react';
import { FallbackLoading } from 'components/FallbackLoading';

/**
 * 经纪人子系统App
 */
export const App = React.memo(() => {
    const location = useLocation();
    const navigate = useNavigate();

    const menu = (mode?: MenuMode) => <Menu
        className="nav-menu"
        theme='dark'
        mode={mode}
        items={menuItems}
        selectedKeys={[location.pathname]}
        onSelect={({ key }) => navigate(key)}
    />;

    return <AppContainer>
        <ConfigProvider locale={zhCN}>
            <Layout className='app-layout'>
                <Sider className='side-menu' collapsible>{menu('inline')}</Sider>
                <Header className='header-menu'>{menu('horizontal')}</Header>
                <Layout style={{ flexDirection: 'column', padding: '16px 36px' }}>
                    <Breadcrumb style={{ margin: '8px 0' }}>
                        <Breadcrumb.Item href='/'>
                            <HomeOutlined />
                            MyRoom
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            {menuItems.find(item => item.key === location.pathname)?.label}
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className='content'>
                        <Suspense fallback={<FallbackLoading />}>
                            {/* 路由 */}
                            <Outlet />
                        </Suspense>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    </AppContainer>
});

const menuItems: MenuItemType[] = [
    {
        key: '/admin/project/list',
        label: '项目列表'
    }, {
        key: '/admin/user',
        label: '个人信息'
    }
]

const AppContainer = styled.section`
    height: 100%;
    overflow-x: hidden;

    .ant-layout {
        min-height: 100%;
    }

    .content {
        display: flex;
        flex-direction: column;
        padding: 12px;
        background: #fff;
    }

    .nav-menu {
        position: sticky;
        top: 0;
    }

    @media(max-width: 1048px) {
        .side-menu {
            display: none;
        }
    }

    @media(min-width: 1048px) {
        .app-layout {
            flex-direction: row;
        }

        .header-menu {
            display: none;
        }

        .nav-menu {
            padding: 24px 0; 
        }
    }
`