import React, { useState } from 'react'
import {  Form, message } from 'antd'
import axios from 'axios';
import { useNavigate } from 'react-router';
import {Text , Checkbox , Submit} from "../utils/Fields";

export default function New() {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
        setLoading(true)
        axios.post('https://jsonplaceholder.typicode.com/users', values)
        .then(response => {
            message.success(`کاربر${response.data.name} با موفقیت ایجاد شد`)
            navigate('/person')
        })
        .catch(error =>console.log(error))
        .finally(()=> setLoading(false))
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

  return (
    <div>
        <h2>ایجاد کاربر جدید</h2>
        <Form
      initialValues={{
        admin: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      
    >
      {/* <Form.Item
        label="نام کاربری"
        name="username"
        rules={[
          {
            required: true,
            message: 'نام کاربری اجباری است!',
          },
        ]}
      >
        <Input />
      </Form.Item> */}
      <Text name ='username' label ='نام کاربری'  required/>
      <Text name ='name' label ='نام '  required/>

      {/* <Form.Item
        label="نام"
        name="name"
        rules={[
          {
            required: true,
            message: 'نام اجباری است!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item> */}

      {/* <Form.Item
        name="admin"
        valuePropName="checked"
      >
        <Checkbox> ادمین</Checkbox>
      </Form.Item> */}
      <Checkbox  name='admin' label='ادمین' />
      <Submit label='ذخیره' loading={loading} disabled={loading}/>
      {/* <Form.Item >
        <Button type="primary" htmlType="submit" loading={loading} disabled={loading}>
          ذخیره
        </Button>
      </Form.Item> */}
    </Form>
    </div>
  )
}
