import { Upload, message, UploadProps } from 'antd';
import { useState } from 'react';
import OSS from 'ali-oss';
import { getStsInfo } from 'service/sts';
import { UploadFile } from 'antd/es/upload/interface';
import { RcFile } from 'antd/lib/upload';
import ImgCrop from 'antd-img-crop';

interface IProps {
  uploadHeadImg: (imgUrl: string) => void;
}

const UploadImg = (props: IProps) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
    props.uploadHeadImg(newFileList[0]?.response);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  const beforeUpload = (file: any) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt10M = file.size / 1024 / 1024 < 10;
    if (!isLt10M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt10M;
  };

  // ali-oss
  const handleUpload = async (options: any) => {
    const file = options.file as File;

    try {
      const { data } = await getStsInfo();

      const client = new OSS({
        // yourRegion填写Bucket所在地域。以华东1（杭州）为例，Region填写为oss-cn-hangzhou。
        region: 'oss-cn-hangzhou',
        // 从STS服务获取的临时访问密钥（AccessKey ID和AccessKey Secret）。
        accessKeyId: data.AccessKeyId,
        accessKeySecret: data.AccessKeySecret,
        // 从STS服务获取的安全令牌（SecurityToken）。
        stsToken: data.SecurityToken,
        refreshSTSToken: async () => {
          // 向您搭建的STS服务获取临时访问凭证。
          const { data } = await getStsInfo();
          return {
            accessKeyId: data.AccessKeyId,
            accessKeySecret: data.AccessKeySecret,
            stsToken: data.SecurityToken,
          };
        },
        // 刷新临时访问凭证的时间间隔，单位为毫秒。
        refreshSTSTokenInterval: 300000,
        // 填写Bucket名称。
        bucket: 'eru-myroom',
      });
      console.log('client', client);
      const result = await client.put('/home/' + file.name, file);
      // setImageUrl(result.url);
      options.onSuccess(result.url);
    } catch (error) {
      options.onError(error);
    }
  };

  return (
    <ImgCrop zoom rotate>
      <Upload
        customRequest={handleUpload}
        listType="picture-card"
        maxCount={1}
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
        beforeUpload={beforeUpload}
      >
        {fileList.length < 1 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default UploadImg;
