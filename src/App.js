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

  state = { collapsed: false };

  constructor(props) {
    super(props)

  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {

    return (
      <div className="App">
        <BrowserRouter>
          <Layout className="full-height">
            <AppSider collapsed={this.state.collapsed} onCollapsed={this.toggle} />
            <Layout>
              <AppHeader collapsed={this.state.collapsed} toggle={this.toggle} />
              <Content style={{ padding: 10 }}>
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
