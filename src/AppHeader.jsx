import React from 'react'
import { Icon, Layout } from 'antd';
const { Header } = Layout;

export default class AppHeader extends React.Component {
  render() {
    const {collapsed, toggle, theme} = this.props
    console.log('appheader ' + theme)
    return (
      <Header className={theme} style={{ zIndex: 1, width: '100%', paddingLeft: 20 }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggle}
        />
      </Header>
    )
  }
}