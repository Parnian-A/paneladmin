import React from 'react'
import { Layout } from 'antd';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { 
    SettingOutlined ,
    UserOutlined,
    CopyOutlined
  } from '@ant-design/icons';


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const { Sider } = Layout;

const items = [

  getItem(<Link to='/'>داشبورد</Link>,'داشبورد'
 ),
  
  getItem('لیست کاربران', 'sub1', < UserOutlined />, [
    getItem(<Link to= '/person'>لیست کاربران</Link>, '1'), getItem(<Link to='/person/new'>افزودن کاربر</Link>, '2'),
    
  ]),
  getItem('لیست مقالات', 'sub2', < CopyOutlined />, [
    getItem('لیست مقالات', '5'),
    getItem('افزودن مقاله', '6'),
  
  ]),
  getItem('تنظیمات', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];


export default function Sidebar() {


  return (
    <Sider>
  <Menu
     
      style={{
        width: 200,
      }}
      defaultSelectedKeys={['داشبورد']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  
    </Sider>
  )
}
