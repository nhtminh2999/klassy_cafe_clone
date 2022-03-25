import React from 'react';
import { Form, TimePicker as AntdTimePicker } from 'antd';

import { momentDateTime } from '../../format';
import locale from 'antd/es/date-picker/locale/vi_VN';
import 'moment/locale/vi';

function TimePicker({ label, name, value, required, message, className, placeholder }) {
  return (
    <Form.Item
      colon={false}
      label={label || ''}
      labelAlign='left'
      name={name}
      initialValue={value ? momentDateTime(value) : null}
      rules={[{ required: required || false, message: message || '' }]}
    >
      <AntdTimePicker
        locale={locale}
        placeholder={placeholder || ''}
        showTime={true}
        className={className || ''}
        style={{ width: '100%' }}
      />
    </Form.Item>
  );
}

export default TimePicker;
