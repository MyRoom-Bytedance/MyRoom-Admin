/*
 * @Author: cos
 * @Date: 2022-05-08 18:33:24
 * @LastEditTime: 2022-05-11 19:12:34
 * @LastEditors: cos
 * @Description: 项目列表
 * @FilePath: \MyRoom-Admin\src\pages\ProjectList\index.tsx
 */
import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router';

export const ProjectList = React.memo(() => {
  const navigate = useNavigate();
  return (
    <>
      <Button type="primary" size="large" onClick={() => navigate('/admin/project/editor/1')}>
        项目编辑器测试
      </Button>
    </>
  );
});
