import request from 'service/axios';

type stsInfo = {
  AccessKeyId: string;
  AccessKeySecret: string;
  SecurityToken: string;
};

export const getStsInfo = () => {
  return request<stsInfo>({
    url: '/sts/info',
    method: 'GET',
  });
};
