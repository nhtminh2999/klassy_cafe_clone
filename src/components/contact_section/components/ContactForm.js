import React from 'react';
import { Row, Col, Form, Input } from 'antd';

import DatePicker from '../../../shared/components/DatePicker/DatePicker';
import TimePicker from '../../../shared/components/TimePicker/TimePicker';
import '../scss/contact_form.scss';

function ContactForm() {
  const [form] = Form.useForm();
  return (
    <Form form={form}
      requiredMark={false}
      colon={false} className='contact-form'
      name='contact-form'
    >
      <div className="contact-form__title">
        <h4>Table Reservation</h4>
      </div>
      <Row gutter={[30, 0]}>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            colon={false}
            name='Customer_Name'
            rules={[{ required: true, message: '' }]}
          >
            <Input className='contact-form__input' placeholder={'Your Name*'} maxLength={200} />
          </Form.Item>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            colon={false}
            name='Customer_Email'
            rules={[{ required: true, type: 'email', message: '' }]}
          >
            <Input className='contact-form__input' placeholder={'Your Email Address*'} maxLength={200} />
          </Form.Item>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            colon={false}
            name='Customer_Phone'
            rules={[{ required: true, message: '' }]}
          >
            <Input className='contact-form__input' placeholder={'Phone Number*'} maxLength={200} />
          </Form.Item>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <Form.Item
            colon={false}
            name='Customer_Guest_Number'
            rules={[{ required: false, message: '' }]}
          >
            <Input className='contact-form__input' placeholder={'Number Of Guests'} maxLength={200} />
          </Form.Item>
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <DatePicker name='BookedDate' className='contact-form__input' placeholder='dd/mm/yyyy' />
        </Col>
        <Col xl={12} lg={12} md={24} sm={24} xs={24}>
          <TimePicker name='BookedTime' className='contact-form__input' placeholder='Time' />
        </Col>
        <Col xl={24} lg={24} md={24} sm={24} xs={24}>
          <Form.Item
            colon={false}
            name='Customer_Message'
            rules={[{ required: false, message: '' }]}
          >
            <Input.TextArea className='contact-form__input' placeholder='Message' autoSize={{ minRows: 6, maxRows: 6 }} />
          </Form.Item>
        </Col>
      </Row>
      <button type='submit' className='btn contact-form__action'>Make A Reservation</button>
    </Form>
  );
}

export default ContactForm;
