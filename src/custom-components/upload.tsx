import { InboxOutlined } from "@ant-design/icons";
import type { UploadProps } from "antd";
import { message, Upload } from "antd";
import React from "react";

const { Dragger } = Upload;

// @ts-ignore
const AntdUpload: React.FC<{setFile:any}> = ({ setFile }) => {
  const props: UploadProps = {
    name: "file",
    multiple: false,
    onChange(info) {
      const { status, name } = info.file;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        setFile(name)
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Click or drag file to this area to upload
      </p>
      <p
        className="ant-upload-hint"
        style={{
          marginLeft: "20px",
          marginRight: "20px",
          marginBottom: "10px",
        }}
      >
        Support for a single or bulk upload. Strictly prohibit from uploading
        company data or other band files.
      </p>
    </Dragger>
  );
};

export default AntdUpload;
