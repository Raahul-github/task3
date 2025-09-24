import React, { useState } from "react";
import { Form, Input, Button, Typography, Space, message } from "antd";
import { createTask } from "../api/taskApi";

const { Title } = Typography;

const TaskForm: React.FC<{ onTaskCreated: () => void }> = ({
  onTaskCreated,
}) => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setSubmitting(true);
      await createTask(values);
      message.success("Task created successfully");
      form.resetFields();
      onTaskCreated();
    } catch (err: any) {
      const msg = err?.response?.data || err?.message || "Failed to create task";
      message.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Title level={3} style={{ marginBottom: '16px' }}>
        Create Task
      </Title>
      <Form layout="vertical" form={form} onFinish={onFinish}>
        <Form.Item
          name="id"
          label="Task ID"
          rules={[{ required: true, message: 'Please enter a task ID' }]}
        >
          <Input placeholder="Enter unique ID" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Task Name"
          rules={[{ required: true, message: 'Please enter a task name' }]}
        >
          <Input placeholder="Enter task name" />
        </Form.Item>
        <Form.Item
          name="owner"
          label="Owner"
          rules={[{ required: true, message: 'Please enter an owner' }]}
        >
          <Input placeholder="Enter owner name" />
        </Form.Item>
        <Form.Item
          name="command"
          label="Command"
          rules={[{ required: true, message: 'Please enter a command' }]}
        >
          <Input placeholder="Enter shell command" />
        </Form.Item>

        <Space>
          <Button type="primary" htmlType="submit" loading={submitting}>
            Create Task
          </Button>
          <Button onClick={() => form.resetFields()}>
            Reset
          </Button>
        </Space>
      </Form>
    </div>
  );
};

export default TaskForm;
