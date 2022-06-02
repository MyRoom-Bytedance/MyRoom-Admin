/*
 * @Author: cos
 * @Date: 2022-05-31 00:45:03
 * @LastEditTime: 2022-06-02 21:05:15
 * @LastEditors: cos
 * @Description:
 * @FilePath: \MyRoom-Admin\src\redux\projectSlice.ts
 */
import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { project } from 'lib/lowcode-editor/mock/MockProject';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export type ProjectState = {
    project: Project;
};

// 使用Redux Toolkit简化逻辑，详见 https://redux-toolkit.js.org/tutorials/quick-start
export const projectSlice = createSlice<ProjectState, SliceCaseReducers<ProjectState>>({
    name: 'project',
    initialState: {
        project: project,
    },
    reducers: {
        addComponent: (state, action) => {
            console.log('redux addComponent', state, action);
            const nowProject = { ...state.project };
            if (!nowProject.components) nowProject.components = [];
            nowProject.components.push(action.payload);
            state.project = nowProject;
            console.log('添加完毕！', state.project);
        },
        updateComponentList: (state, action) => {
            const nowProject = { ...state.project };
            // TODO:一些检查
            nowProject.components = action.payload;
            state.project = nowProject;
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
