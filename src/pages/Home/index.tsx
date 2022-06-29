import React, { useState, useEffect, createRef } from 'react';
import { getHomeList, createHome, updateHome, deleteHome } from 'service/home';
import { Row, Col, Button, Table, Modal, Form, Input, message } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import type { FormInstance } from 'antd/es/form';
const FormItem = Form.Item;

// TODO: 上传图片

export function Home() {
  const [homeList, setHomeList] = useState<Array<Home>>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [home, setHome] = useState<Home | null>(null);
  const formRef = createRef<FormInstance>();

  const getHome = async () => {
    const res = await getHomeList({
      offset: 0,
      size: 0,
    });
    setHomeList(res.data);
  }

  const deleteHomeById = async (id: number) => {
    await deleteHome(id);
    message.success('操作成功');
    getHome();
  }

  const submitHome = async () => {
    const newHome = await formRef.current!.validateFields();
    if (home) {
      await updateHome({
        id: home.id,
        ...newHome,
        pricing: Number(newHome.pricing),
        floor_plan_room: Number(newHome.floor_plan_room),
        floor_plan_hall: Number(newHome.floor_plan_hall),
        squaremeter: Number(newHome.squaremeter),
        total_floor: Number(newHome.total_floor),
      });
    } else {
      await createHome({
        ...newHome,
        pricing: Number(newHome.pricing),
        floor_plan_room: Number(newHome.floor_plan_room),
        floor_plan_hall: Number(newHome.floor_plan_hall),
        squaremeter: Number(newHome.squaremeter),
        total_floor: Number(newHome.total_floor),
      });
    }
    message.success('操作成功');
    setModalVisible(false);
    getHome();
  }

  useEffect(() => {
    getHome();
  }, []);

  const tableColumns: ColumnsType<Home> = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: '房源名称',
      dataIndex: 'listing_name',
    },
    {
      title: '房源图片',
      dataIndex: 'listing_image',
      render: (url: string) => {
        return <img src={url} style={{ width: '100px' }} alt="暂无图片" />
      }
    },
    {
      title: '房源价格',
      dataIndex: 'pricing',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
      render: (time: string) => {
        return new Date(time).toLocaleString();
      }
    },
    {
      title: '操作',
      render: (record: Home) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setHome(record);
                setModalVisible(true);
              }}
            >
              编辑
            </Button>
            <Button
              type="link"
              danger
              onClick={() => deleteHomeById(record.id)}
            >
              删除
            </Button>
          </>
        )
      }
    },
  ];

  return (
    <>
      <Row justify='end'>
          <Button type='primary' size='large' onClick={() => { setHome(null); setModalVisible(true); }}>新增</Button>
      </Row>
      <Row style={{ marginTop: 10, }}>
        <Col span={24}>
          <Table
            rowKey={'id'}
            columns={tableColumns}
            dataSource={homeList}
          />
        </Col>
      </Row>
      <Modal
        title={home === null ? '新增房源' : '编辑房源'}
        visible={modalVisible}
        onOk={() => submitHome()}
        onCancel={() => setModalVisible(false)}
      >
        <Form
          ref={formRef}
          key={home === null ? 'create' : home.id}
        >
          <FormItem
            label="项目名称"
            name="listing_name"
            rules={[{ required: true, message: '请输入项目名称' }]}
            initialValue={home?.listing_name}
          >
            <Input />
          </FormItem>
          <FormItem
            label="价格"
            name="pricing"
            rules={[{ required: true, message: '请输入价格' }, { pattern: /^\d+$/, message: '请输入数字' }]}
            initialValue={home?.pricing}
          >
            <Input />
          </FormItem>
          <FormItem
            label="室"
            name="floor_plan_room"
            rules={[{ required: true, message: '请输入房间数' }, { pattern: /^\d+$/, message: '请输入数字' }]}
            initialValue={home?.floor_plan_room}
          >
            <Input />
          </FormItem>
          <FormItem
            label="厅"
            name="floor_plan_hall"
            rules={[{ required: true, message: '请输入房间数' }, { pattern: /^\d+$/, message: '请输入数字' }]}
            initialValue={home?.floor_plan_hall}
          >
            <Input />
          </FormItem>
          <FormItem
            label="面积（平方米）"
            name="squaremeter"
            rules={[{ required: true, message: '请输入面积' }, { pattern: /^\d+$/, message: '请输入数字' }]}
            initialValue={home?.squaremeter}
          >
            <Input />
          </FormItem>
          <FormItem
            label="楼层"
            name="total_floor"
            rules={[{ required: true, message: '请输入楼层' }, { pattern: /^\d+$/, message: '请输入数字' }]}
            initialValue={home?.total_floor}
          >
            <Input />
          </FormItem>
          <FormItem
            label="简介"
            name="description"
            initialValue={home?.description}
          >
            <Input />
          </FormItem>
        </Form>
      </Modal>
    </>
  );
}
