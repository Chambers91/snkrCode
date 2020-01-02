import './App.css';
import React from 'react';
import TabRoutes from './Components/TabRoutes';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Table from './Components/Table';

function App() {
  return (
    <div style={{ height: '175px', position: 'relative' }}>
      <div className='demo-big-content'>
        <Layout>
          <Header className='header-color' title='SnkrCode' scroll>
            <Navigation>
              <Link to='/task'>Task</Link>
              <Link to='/proxies'>Proxies</Link>
              <Link to='/billing'>Billing</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/settings'>Settings</Link>
            </Navigation>
          </Header>
          <Drawer title='SnkrCode'>
            <Navigation>
              <Link to='/task'>Task</Link>
              <Link to='/proxies'>Proxies</Link>
              <Link to='/billing'>Billing</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/settings'>Settings</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <TabRoutes />
            <Table />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
