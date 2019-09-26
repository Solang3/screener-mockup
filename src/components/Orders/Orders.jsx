import React, { Fragment } from 'react'
import { Card, Row, Col } from 'antd'


export default function Orders() {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Buy BTCUSDT" extra={<a href="#">More</a>}>
            <p>Limit: 200</p>
            <p>Price: 10239.09</p>
            <p>Date: 20/9/2019</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Sell BTCBNB" extra={<a href="#">More</a>}>
            <p>Limit: 200</p>
            <p>Price: 10239.09</p>
            <p>Date: 20/9/2019</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="BUY BTCTRX" extra={<a href="#">More</a>}>
            <p>Limit: 200</p>
            <p>Price: 10239.09</p>
            <p>Date: 20/9/2019</p>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}