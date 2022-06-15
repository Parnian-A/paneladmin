
import React from 'react'
import Full from "./Full";
import New from "./New";
import List from "./List";
import { Route , Routes } from 'react-router';



export default function Router() {
  return (
    <Routes>
        <Route path='/person' element={<List/>} />
          <Route path='/person/new' element={<New/>} />
          <Route path='/person/:id' element={<Full/>} />
    </Routes>
  )
}
