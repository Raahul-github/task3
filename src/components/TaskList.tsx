import React, { useEffect, useState } from "react";
import { Table, Button, Input, message, Space, Typography, Row, Col } from "antd";
import { getTasks, searchTasks, deleteTask, runTask } from "../api/taskApi";
import TaskExecutionModal from "./TaskExecutionModal";

const { Title, Text } = Typography;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [executions, setExecutions] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await getTasks();
      setTasks(res.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = async (id: string) => {
    await deleteTask(id);
    message.success("Task deleted");
    fetchTasks();
  };

  const handleRun = async (id: string) => {
    const res = await runTask(id);
    message.success("Task executed");
    fetchTasks();
  };

  const handleSearch = async (value: string) => {
    if (!value) return fetchTasks();
    try {
      const res = await searchTasks(value);
      setTasks(res.data);
    } catch {
      message.error("No tasks found");
    }
  };

  return (
    <div>
      <Title level={3} style={{ marginBottom: '16px' }}>
        Task List
      </Title>
      
      <Row justify="space-between" align="middle" style={{ marginBottom: '16px' }}>
        <Col xs={24} sm={12}>
          <Input.Search
            placeholder="Search by name"
            enterButton
            onSearch={handleSearch}
            style={{ width: '100%' }}
          />
        </Col>
        <Col>
          <Text type="secondary">Total: {tasks.length}</Text>
        </Col>
      </Row>

      <Table
        rowKey="id"
        dataSource={tasks}
        loading={loading}
        pagination={{ pageSize: 5 }}
        scroll={{ x: 800 }}
        columns={[
          {
            title: "ID",
            dataIndex: "id",
            width: 100,
          },
          {
            title: "Name",
            dataIndex: "name",
            width: 150,
          },
          {
            title: "Owner",
            dataIndex: "owner",
            width: 120,
          },
          {
            title: "Command",
            dataIndex: "command",
            ellipsis: true,
          },
          {
            title: "Actions",
            width: 200,
            render: (_, record) => (
              <Space>
                <Button
                  danger
                  size="small"
                  onClick={() => handleDelete(record.id)}
                >
                  Delete
                </Button>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => handleRun(record.id)}
                >
                  Run
                </Button>
                <Button
                  size="small"
                  onClick={() => {
                    setExecutions(record.taskExecutions);
                    setModalVisible(true);
                  }}
                >
                  View
                </Button>
              </Space>
            ),
          },
        ]}
      />

      <TaskExecutionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        executions={executions}
      />
    </div>
  );
};

export default TaskList;
