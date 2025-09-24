import React from "react";
import { Modal, Table, Typography } from "antd";

const { Text } = Typography;

interface Props {
  visible: boolean;
  onClose: () => void;
  executions: any[];
}

const TaskExecutionModal: React.FC<Props> = ({
  visible,
  onClose,
  executions,
}) => {
  return (
    <Modal
      open={visible}
      onCancel={onClose}
      footer={null}
      title="Task Executions"
      width={800}
    >
      <Table
        dataSource={executions || []}
        rowKey={(_, i) => (i ? i.toString() : "")}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 600 }}
        columns={[
          {
            title: "Start Time",
            dataIndex: "startTime",
            width: 180,
            render: (text) => new Date(text).toLocaleString(),
          },
          {
            title: "End Time",
            dataIndex: "endTime",
            width: 180,
            render: (text) => new Date(text).toLocaleString(),
          },
          {
            title: "Output",
            dataIndex: "output",
            render: (text) => (
              <div className="execution-output">
                <Text code>{text || 'No output'}</Text>
              </div>
            ),
          },
        ]}
      />
    </Modal>
  );
};

export default TaskExecutionModal;
