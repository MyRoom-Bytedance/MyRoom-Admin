import { Modal } from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import { useState } from "react";
import { getBase64 } from "util/globalUtil";

const handlePreview = async (setImage: Function, setVisible: Function, setTitle: Function, file: UploadFile<unknown>) => {
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj as File);
    }
    setImage(file.url || file.preview);
    setVisible(true);
    setTitle(file.name || file.url?.substring(file.url.lastIndexOf('/') + 1));
}

export const usePreviewer = () => {
    let [previewImage, setPreviewImage] = useState<string>();
    let [previewVisible, setPreviewVisible] = useState<boolean>(false);
    let [previewTitle, setPreviewTitle] = useState<string>();

    const modal = <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={() => setPreviewVisible(false)}
    >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
    </Modal>

    return {
        previewer: modal,
        handlePreview: handlePreview.bind(null, setPreviewImage, setPreviewVisible, setPreviewTitle)
    };
}