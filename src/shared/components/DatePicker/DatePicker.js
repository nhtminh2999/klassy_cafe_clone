import React from 'react';
import { Form, DatePicker as AntdDatePicker } from 'antd';

import { momentDateTime } from '../../format';
import locale from 'antd/es/date-picker/locale/vi_VN';
import 'moment/locale/vi';

function DatePicker({ label, name, value, required, message, className, placeholder }) {
  return (
    <Form.Item
      colon={false}
      label={label || ''}
      labelAlign='left'
      name={name}
      initialValue={value ? momentDateTime(value) : null}
      rules={[{ required: required || false, message: message || '' }]}
    >
      <AntdDatePicker
        placeholder={placeholder || ''}
        showTime={true}
        locale={locale}
        className={className || ''}
        format='DD-MM-YYYY HH:mm:ss' style={{ width: '100%' }}
      />
    </Form.Item>
  );
}

export default DatePicker;
