import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ConfigProvider } from 'antd'
import fa from "antd/es/locale/fa_IR";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ConfigProvider direction='rtl' locale= {fa}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ConfigProvider>
);

