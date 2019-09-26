import React, { Fragment } from 'react'
import { Card, Row, Col } from 'antd'


export default function WalletCards() {
  return (
    <Fragment>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Binance" extra={<a href="#">More</a>}>
            <p>USDT: 2000.00</p>
            <p>BTC: 0.30789832</p>
            <p>BNB: 5.09</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Bitfinex" extra={<a href="#">More</a>}>
            <p>USDT: 2000.00</p>
            <p>BTC: 0.30789832</p>
            <p>BNB: 5.09</p>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Bitfinex" extra={<a href="#">More</a>}>
            <p>USDT: 2000.00</p>
            <p>BTC: 0.30789832</p>
            <p>BNB: 5.09</p>
          </Card>
        </Col>
      </Row>
    </Fragment>
  )
}