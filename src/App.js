import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import TabRoutes from './Components/TabRoutes';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div style={{ height: '300px', position: 'relative' }}>
      <Layout
        style={{
          background:
            'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'
        }}
      >
        <Header transparent title='SnkrCode' style={{ color: 'white' }}>
          <Navigation>
            <Link to='/task'>Task</Link>
            <Link to='/proxies'>Proxies</Link>
            <Link to='/billing'>Billing</Link>
            <Link to='/profile'>Profile</Link>
            <Link to='/settings'>Settings</Link>
          </Navigation>
        </Header>
        <Drawer title='Settings'>
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
        </Content>
      </Layout>
    </div>
  );
}

export default App;
