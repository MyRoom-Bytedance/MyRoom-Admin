/*
 * @Author: cos
 * @Date: 2022-05-08 18:33:24
 * @LastEditTime: 2022-05-11 19:12:34
 * @LastEditors: cos
 * @Description: 项目列表
 * @FilePath: \MyRoom-Admin\src\pages\ProjectList\index.tsx
 */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import {getProjectList, deleteProject, setActiveProject, getActiveProject} from 'service/project';
import { Row, Col, Button, Table, message } from 'antd';
import { ColumnsType } from 'antd/lib/table';

export const ProjectList = React.memo(() => {
  const [projectList, setProjectList] = useState<Array<any>>([]);
  const [active, setActive] = useState<any>();
  const navigate = useNavigate();

  const getProject = async () => {
    const res = await getProjectList();
    setProjectList(res.data);
    const active = await getActiveProject();
    setActive(active.data);
  };

  const deleteProjectById = async (id: number) => {
    await deleteProject(id);
    message.success('删除成功');
    getProject();
  };

  useEffect(() => {
    getProject();
  }, []);

  const tableColumns: ColumnsType<Home> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '作品名称',
      dataIndex: 'name',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      render: (time: string) => {
        return new Date(time).toLocaleString();
      },
    },
    {
      title: '操作',
      render: (record: Home) => {
        return (
          <>
            <Button type="link" onClick={() => navigate(`/admin/project/editor/${record.id}`)}>
              编辑
            </Button>
            <Button type="link" danger onClick={() => deleteProjectById(record.id)}>
              删除
            </Button>
            <Button type="link" onClick={() => setActiveProject(record.id).then((res) => setActive(res.data))} disabled={record.id === active?.id}>
              { record.id === active?.id ? "当前活动" : "设为活动" }
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Row justify="end">
        <Button type="primary" size="large" onClick={() => navigate('/admin/project/editor/0')}>
          新建项目
        </Button>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col span={24}>
          <Table rowKey={'id'} columns={tableColumns} dataSource={projectList} />
        </Col>
      </Row>
    </>
  );
});
