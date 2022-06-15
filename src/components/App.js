import { Layout } from 'antd';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import 'antd/dist/antd.min.css'
import Header from "./generic/Header";
import Footer from "./generic/Footer";
import Dashboard from './generic/Dashboard';
import Sidebar from "./generic/Sidebar";
import PersonRouter from "./person/Router";

import "../assets/css/general.css";

const { Content } = Layout;


function App() {
  return (
    <Router>
    <div className="App">
      
      <Layout style={{minHeight : '100vh'}}>
      <Header />
      <Layout>
        <Sidebar/>
        <Content className='content'>
          <Routes>
          <Route  path ='/' element={<Dashboard/>} />
          <Route path='/person/*' element={<PersonRouter/>} />
         
          </Routes>
        </Content>
      </Layout>
    <Footer />
    </Layout>
    </div>
    </Router>
  );
}

export default App;
