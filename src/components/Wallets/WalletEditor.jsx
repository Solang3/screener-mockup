import React from 'react';
import { Form, Col, Row, Input, Select } from 'antd';

const { Option } = Select;

class WalletForm extends React.Component {
  render() {

    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please enter wallet name' }],
              })(<Input placeholder="Please enter wallet name" />)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Exchange">
              {getFieldDecorator('exchange', {
                rules: [{ required: true, message: 'Please select an exchange' }],
              })(
                <Select placeholder="Please select an exchange">
                  <Option value="binance">Binance</Option>
                  <Option value="bitfinex">Bitfinex</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="API Key">
              {getFieldDecorator('apikey', {
                rules: [
                  {
                    required: true,
                    message: 'please enter your API Key',
                  },
                ],
              })(<Input.TextArea rows={4} placeholder="please enter your API Key" />)}
            </Form.Item>
          </Col>
        </Row>
      </Form>

    )
  }
}
const WalletEditor = Form.create()(WalletForm);
export default WalletEditor;