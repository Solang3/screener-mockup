import React, { Fragment } from 'react'
import { Button, Card, Drawer, Row, Col } from 'antd'
import AlarmEditor from './AlarmEditor'

export default class AlarmCards extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render () {
    return (
      <Fragment>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Card title="BTC" extra={<a href="#">More</a>}>
              <p>Condition: Crossing</p>
              <p>Price: 10200</p>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8}>
            <Card title="BTC" extra={<a href="#">More</a>}>
              <p>Condition: Crossing</p>
              <p>Price: 10200</p>
            </Card>
          </Col>
        </Row>
        <Button type="primary" shape="circle" size="large" icon="plus" onClick={this.showDrawer} style={{ position: 'absolute', bottom: 20, right: 20 }} />
        <Drawer
          title="Create new Alarm"
          width={'90%'}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <AlarmEditor />
          

          <div
            style={{
              position: 'absolute',
              left: 0,
              bottom: 0,
              width: '100%',
              borderTop: '1px solid #e9e9e9',
              padding: '10px 16px',
              background: '#fff',
              textAlign: 'right',
            }}
          >
            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={this.onClose} type="primary">
              Submit
            </Button>
          </div>


        </Drawer>
      </Fragment>
    )
  }
}