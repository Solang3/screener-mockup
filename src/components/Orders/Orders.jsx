import React, { Fragment } from 'react'
import { Tag, Card, Col, Row } from 'antd'


export default function Orders() {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="BTCUSDT" extra={<Tag color="green">BUY</Tag>}>
            <p>Limit: 200</p>
            <p>Price: 10239.09</p>
            <p>Date: 20/9/2019</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="BTCBNB" extra={<Tag color="red">SELL</Tag>}>
            <p>Limit: 200</p>
            <p>Price: 10239.09</p>
            <p>Date: 20/9/2019</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="BTCTRX" extra={<Tag  color="green">BUY</Tag>}>
            <p>Limit: 200</p>
            <p>Price: 10239.09</p>
            <p>Date: 20/9/2019</p>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}