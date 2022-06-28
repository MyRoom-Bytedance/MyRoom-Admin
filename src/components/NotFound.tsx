import { Button, Result } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router';
import 'antd/dist/antd.min.css';

/**
 * 路由不匹配时的失败占位
 */
export const NotFound = React.memo(() => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle="你来到了无人区"
      extra={
        <Button type="primary" onClick={() => navigate(-1)}>
          返回
        </Button>
      }
    />
  );
});
