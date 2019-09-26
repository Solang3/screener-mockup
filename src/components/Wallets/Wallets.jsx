import React from 'react'
import { List } from 'antd'


function Wallets() {

  const data = [
    {
      title: 'Wallet 1',
    },
    {
      title: 'Wallet 2',
    },
    {
      title: 'Wallet 3',
    },
    {
      title: 'Wallet 4',
    },
  ];
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={<a href={"/walltes/" + item.title}>{item.title}</a>}
            description="Wallet info"
          />
        </List.Item>
      )}
    />
  )
}


export default Wallets