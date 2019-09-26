import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import AppHeader from './AppHeader'
import Home from './components/Home/Home'
import AppSider from './AppSider'
import AlarmCards from './components/Alarms/AlarmCards'
import Orders from './components/Orders/Orders'
import WalletCards from './components/Wallets/WalletCards'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const { Content } = Layout;

class App extends React.Component {

  state = { collapsed: false, theme: 'light' };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onThemeChange = () => {
    this.setState({theme: this.state.theme === 'light' ?  'dark' : 'light'})
    console.log(this.state.theme)
  }
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Layout className="full-height">
            <AppSider collapsed={this.state.collapsed} onCollapsed={this.toggle} theme={this.state.theme} onThemeChange={this.onThemeChange}/>
            <Layout>
              <AppHeader collapsed={this.state.collapsed} toggle={this.toggle} theme={this.state.theme} />
              <Content style={{ padding: 10 }} className={this.state.theme}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/wallets" component={WalletCards} />
                  <Route path="/alarms" component={AlarmCards} />
                  <Route path="/orders" component={Orders} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
