import React, { useState } from "react";
import { Upload, message, Spin, Row } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import axios from "axios";

const { Dragger } = Upload;

const UploadCSV = () => {
  const [uploading, setUploading] = useState(false);

  const handleUpload = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    setUploading(true);
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/upload`, formData);
      message.success("CSV file uploaded successfully");
    } catch (error) {
      message.error("Failed to upload CSV file");
    }
    setUploading(false);
  };

  const uploadProps = {
    name: "file",
    multiple: false,
    accept: ".csv",
    beforeUpload: handleUpload,
  };

  return (
    <div style={{ margin: "16px" }}>
      <Row justify="center" style={{ width: "100%" }}>
        <h1>Image Upload and Resize</h1>
      </Row>

      <Spin spinning={uploading} tip="Uploading...">
        <Dragger {...uploadProps} disabled={uploading}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag CSV file to this area to upload
          </p>
          <p className="ant-upload-hint">
            Support for a single CSV file upload.
          </p>
        </Dragger>
      </Spin>
    </div>
  );
};

export default UploadCSV;
