/*
 * @Author: cos
 * @Date: 2022-05-31 00:45:03
 * @LastEditTime: 2022-05-31 01:35:17
 * @LastEditors: cos
 * @Description:
 * @FilePath: \MyRoom-Admin\src\redux\projectSlice.ts
 */
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { project } from 'lib/lowcode-editor/mock/MockProject';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type ProjectState = {
    project: Project | null;
};

// 使用Redux Toolkit简化逻辑，详见 https://redux-toolkit.js.org/tutorials/quick-start
export const projectSlice = createSlice<ProjectState, SliceCaseReducers<ProjectState>>({
    name: 'project',
    initialState: {
        project: project,
    },
    reducers: {
        addComponent: (state, action) => {
            if (!state.project) state.project = project;
            const nowProject = { ...state.project };
            if (!nowProject.components) nowProject.components = [];
            nowProject.components.push(action.payload);
            console.log('添加完毕！', nowProject.components);
        },
        updateComponentList: (state, action) => {
            if (!state.project) state.project = project;
            const nowProject = { ...state.project };
            // TODO:一些检查
            nowProject.components = action.payload;
        },
    },
});
export const { addComponent, updateComponentList } = projectSlice.actions;
export const projectReducer = persistReducer(
    {
        key: 'project',
        storage: storage,
    },
    projectSlice.reducer
);
