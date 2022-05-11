import { UploadFile } from "antd/lib/upload/interface";
import { getBase64 } from "util/globalUtil";
import { ImageUploader } from "./ImageUploader"

type Props = {
    value?: string,
    onChange?: Function
}

export const ImageChanger = ({ value, onChange }: Props) => {
    return <ImageUploader
        limit={1}
        onChange={(fileList: UploadFile<unknown>[]) => {
            getBase64(fileList[0]?.originFileObj)?.then(v => onChange?.(v))
        }}
        value={value ? [{
            name: '',
            uid: '',
            url: value
        }] : []} />;
}