import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Menu, Layout, Switch } from 'antd';

const { Sider } = Layout;

class AppSider extends React.Component {

  render() {
    const { collapsed, onCollapse, theme, onThemeChange } = this.props
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        width="200"
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        theme={theme}
      >
        <Menu mode="inline" defaultSelectedKeys="1" theme={theme}>
          <Menu.Item key="1">
            <Link className="nav-text" href="#" to="/" title="Home">
              <Icon type="home" />Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link className="nav-text" href="/wallets" to="/wallets" title="Wallets">
              <Icon type="wallet" />
              Wallets</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link className="nav-text" href="/alarms" to="/alarms" title="Alarms">
              <Icon type="clock-circle" />
              Alarms</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link className="nav-text" href="/orders" to="/orders" title="Orders">
              <Icon type="play-circle" />
              Orders</Link>
          </Menu.Item>
          <Menu.Item key="5" className="switch-theme">
            <Switch checkedChildren="Dark" unCheckedChildren="Light" onChange={onThemeChange} />
          </Menu.Item>
        </Menu>
      </Sider>
    )
  }
}

export default AppSider