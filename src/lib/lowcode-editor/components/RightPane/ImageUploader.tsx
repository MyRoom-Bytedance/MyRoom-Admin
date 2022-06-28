import { PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import { UploadFile } from 'antd/lib/upload/interface';
import React, { useState } from 'react';
import { usePreviewer } from './Previewer';

const uploadButton = (
  <div>
    <PlusOutlined />
    <div style={{ marginTop: '8px' }}>Upload</div>
  </div>
);

type Props = {
  limit: number;
  onChange?: Function;
  value?: UploadFile<unknown>[];
};

export const ImageUploader = React.memo(({ limit, onChange, value }: Props) => {
  let { previewer, handlePreview } = usePreviewer();
  let [fileList, setFileList] = useState<UploadFile<unknown>[]>(value || []);

  return (
    <>
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={({ fileList }) => {
          setFileList(fileList);
          onChange?.(fileList);
        }}
        beforeUpload={(file) => {
          setFileList((pre) => [...pre, file]);
          return false;
        }}
      >
        {fileList.length >= limit ? null : uploadButton}
      </Upload>
      {previewer}
    </>
  );
});
