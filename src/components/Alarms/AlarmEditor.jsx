import React from 'react';
import { Form, Button, Col, Row, Input, Select, DatePicker, Icon } from 'antd';

const { Option } = Select;

class AlarmForm extends React.Component {
  render() {

    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Condition">
              {getFieldDecorator('termA', {
                rules: [{ required: true, message: 'Please select a term' }],
              })(
                <Select placeholder="Please select a term">
                  <Option value="binance">Crossing</Option>
                  <Option value="bitfinex">Greater than</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              {getFieldDecorator('type', {
                rules: [{ required: true, message: 'Please select an operator' }],
              })(
                <Select placeholder="Please select an operator">
                  <Option value="binance">Crossing</Option>
                  <Option value="bitfinex">Greater than</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item>
              {getFieldDecorator('termB', {
                rules: [{ required: true, message: 'Please select an term' }],
              })(
                <Select placeholder="Please select an term">
                  <Option value="value">Binance</Option>
                  <Option value="vol (20)">Bitfinex</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
        </Row>
      </Form>

    )
  }
}
const AlarmEditor = Form.create()(AlarmForm);
export default AlarmEditor;