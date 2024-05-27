import React, { useEffect, useState } from "react";
import { Row, Col, Card, Input, Spin, Empty } from "antd";
import axios from "axios";

const FrameList = () => {
  const [frames, setFrames] = useState([]);
  const [depthMin, setDepthMin] = useState(9000.1);
  const [depthMax, setDepthMax] = useState(9000.4);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFrames = async () => {
      setLoading(true);
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/frames?depth_min=${depthMin}&depth_max=${depthMax}`
        );
        setFrames(result.data.frames);
      } catch (error) {
        console.error("Failed to fetch frames:", error);
      }
      setLoading(false);
    };

    fetchFrames();
  }, [depthMin, depthMax]);

  return (
    <div style={{ margin: "16px" }}>
      {/* Added margin to the main container for spacing */}
      <Row gutter={[16, 16]} align="middle">
        <Col>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: 8 }}>Depth Min:</span>{" "}
            {/* Label for Min Depth */}
            <Input
              placeholder="9000.1"
              value={depthMin}
              onChange={(e) => setDepthMin(parseFloat(e.target.value))}
              style={{ width: 120, marginRight: 16 }} // Added right margin
            />
          </div>
        </Col>
        <Col>
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ marginRight: 8 }}>Depth Max:</span>{" "}
            {/* Label for Max Depth */}
            <Input
              placeholder="9000.4"
              value={depthMax}
              onChange={(e) => setDepthMax(parseFloat(e.target.value))}
              style={{ width: 120 }}
            />
          </div>
        </Col>
      </Row>
      <Spin spinning={loading} tip="Loading frames...">
        {frames.length > 0 ? (
          <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
            {frames.map((frame, index) => (
              <Col key={index} xs={24} sm={12} md={8} lg={6}>
                <Card
                  hoverable
                  cover={
                    <img
                      alt={`Frame ${index}`}
                      src={`data:image/png;base64,${frame}`}
                      style={{ height: 200, objectFit: "cover" }}
                    />
                  }
                >
                  <Card.Meta title={`Frame ${index}`} />
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Empty description="No frames found" style={{ marginTop: 16 }} />
        )}
      </Spin>
    </div>
  );
};

export default FrameList;
