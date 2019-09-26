import React from 'react';
import 'antd/dist/antd.css';
import { Table, Typography } from 'antd';
import './Home.css';
import { dataSource } from '../../initial-state'

function Home() {
  

  const columns = [
    {
      title: 'Period',
      dataIndex: 'period',
      key: 'period',
      render: (text, record) => (
        <span className={record.open < record.last ? 'green-line' : 'red-line'}>
          {text}
        </span>
      )
    },
    {
      title: 'Open',
      dataIndex: 'open',
      key: 'open',
      render: (text, record) => (
        <span className={record.open < record.last ? 'green-line' : 'red-line'}>
          {text}
        </span>
      )
    },
    {
      title: 'High',
      dataIndex: 'high',
      key: 'high',
      render: (text, record) => (
        <span className={record.open < record.last ? 'green-line' : 'red-line'}>
          {text}
        </span>
      )
    },
    {
      title: 'Low',
      dataIndex: 'low',
      key: 'low',
      render: (text, record) => (
        <span className={record.open < record.last ? 'green-line' : 'red-line'}>
          {text}
        </span>
      )
    },
  ];

  const { Title } = Typography;

  return (
  
    <div>
      <Title level={3} align="center" style={{ marginTop: 20 }}>BTC/USD</Title>
      <Title level={2} align="center" style={{ marginTop: 0 }}>10.250</Title>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
}

export default Home;
