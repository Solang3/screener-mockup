import React from 'react'
import { Icon, Menu, Layout } from 'antd';
const { Header } = Layout;

export default class AppHeader extends React.Component {
  render() {
    const {collapsed, toggle} = this.props
    return (
      <Header style={{ zIndex: 1, width: '100%', background: '#fefefe', paddingLeft: 20 }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      </Header>
    )
  }
}