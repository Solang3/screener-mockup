import React from 'react';

import { List } from 'antd'

export default function Alarms() {

  const data = [
    {
      title: 'Alarm 1',
    },
    {
      title: 'Alarm 2',
    },
    {
      title: 'Alarm 3',
    },
    {
      title: 'Alarm 4',
    },
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href={"/alarms/" + item.title}>{item.title}</a>}
            description="Alarm info"
          />
        </List.Item>
      )}
    />
  )
}

