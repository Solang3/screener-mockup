import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout, PageHeader } from 'antd';
import Home from './components/Home/Home'
import Drawer from './components/Drawer/Drawer'
import Wallets from './components/Wallets/Wallets'
import Alarms from './components/Alarms/Alarms'
import Orders from './components/Orders/Orders'
import WalletCards from './components/Wallets/WalletCards'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
const { Header, Content } = Layout;

class App extends React.Component {
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
            <Drawer />
            <Layout>
              <Header style={{ background: '#fff' }}>
                <h1>version 1</h1>
                
              </Header>
              <Content style={{padding:10}}>
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/wallets" component={WalletCards} />
                  <Route path="/alarms" component={Alarms} />
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
