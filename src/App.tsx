import React from "react";
import { Layout, Typography, Row, Col } from "antd";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

const App: React.FC = () => {
  return (
    <Layout>
      <Header style={{ background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Title level={2} style={{ margin: 0, color: '#1f2937' }}>
            Kaiburr Task Manager
          </Title>
        </div>
      </Header>

      <Content style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <Row gutter={24}>
          <Col xs={24} md={8}>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <TaskForm onTaskCreated={() => window.location.reload()} />
            </div>
          </Col>
          <Col xs={24} md={16}>
            <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <TaskList />
            </div>
          </Col>
        </Row>
      </Content>

      <Footer style={{ textAlign: 'center', fontSize: '12px', color: '#6b7280' }}>
        © {new Date().getFullYear()} Kaiburr Assessment
      </Footer>
    </Layout>
  );
};

export default App;
