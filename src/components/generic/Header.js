import React from 'react'
import { Layout } from 'antd';
import {  } from "../../assets/scss/header.scss";

const { Header : AntHeader } = Layout;


export default function Header() {
  return (
    <AntHeader className='header'>داشبورد مدیریت</AntHeader>
  )
}
