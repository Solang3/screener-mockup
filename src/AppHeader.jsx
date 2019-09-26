import React from 'react'
import { Icon, Menu, Layout } from 'antd';
const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header style={{ zIndex: 1, width: '100%', background: '#fefefe' }}>
      <Menu mode="horizontal">
        <Menu.Item key="list"><Icon type="profile" theme="twoTone"/></Menu.Item>
        <Menu.Item key="cards"><Icon type="appstore" theme="twoTone" /></Menu.Item>
      </Menu>
    </Header>
  )
}