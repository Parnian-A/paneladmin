import { Table as AntTable} from "antd";
import React, { useState } from 'react'

function convertColumns(columns) {
  return columns.map(column =>({...column, dataIndex :column.key}))
}

export default function Table({columns , data , rowKey = 'id', ...props}) {

  const [tableColumns] = useState(()=>convertColumns(columns))

  return (
    <AntTable 
    columns={tableColumns}
    rowKey ={rowKey}
    dataSource={data}
    {...props}
    />
  )
}
