import React from "react";
import { Navigate, Outlet, RouteObject } from "react-router";
import { LoginRedirect } from "components/LoginRedirect";
import { NotFound } from "components/NotFound";

// 由于React.lazy只支持默认导出，所以需要增加一层导出转换
const Login = React.lazy(() => import('./PageLogin'));
const App = React.lazy(() => import('./PageApp'));
const UserHome = React.lazy(() => import('./PageUser'));
const ProjectList = React.lazy(() => import('./PageProjectList'));
const ProjectEditor = React.lazy(() => import('./PageProjectEditor'));

export const routeConfig: RouteObject[] = [
    {
        path: '/',
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'admin/',
                element: <App />,
                children: [
                    {
                        path: 'project/',
                        element: <Outlet />,
                        children: [
                            {
                                path: 'list',
                                element: <ProjectList />
                            },
                            {
                                path: 'editor/:id',
                                element: <ProjectEditor />
                            },
                            {
                                path: '',
                                element: <Navigate to="./list" />
                            }
                        ]
                    },
                    {
                        path: 'user',
                        element: <UserHome />
                    },
                    {
                        path: '',
                        element: <Navigate to="./project" />
                    },
                    {
                        path: '*',
                        element: <NotFound />
                    }
                ]
            },
            {
                path: '',
                element: <LoginRedirect />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]