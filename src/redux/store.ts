/*
 * @Author: cos
 * @Date: 2022-05-08 18:33:24
 * @LastEditTime: 2022-06-02 20:41:38
 * @LastEditors: cos
 * @Description:
 * @FilePath: \MyRoom-Admin\src\redux\store.ts
 */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { projectReducer } from './projectSlice';
import { userReducer } from './userSlice';

// 使用Redux Toolkit简化逻辑，详见 https://redux-toolkit.js.org/tutorials/quick-start
export const store = configureStore({
    reducer: {
        user: userReducer,
        projectCache: projectReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});

// 使用redux-persist自动持久化到localStorage
export const persistor = persistStore(store);

// 类型导出
export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
