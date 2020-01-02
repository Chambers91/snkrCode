import './App.css';
import React from 'react';
import TabRoutes from './Components/TabRoutes';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

function App() {
  return (
    <div style={{ height: '175px', position: 'relative' }}>
      <div className='demo-big-content'>
        <Layout>
          <Header title='Title' scroll>
            <Navigation>
              <Link to='/task'>Task</Link>
              <Link to='/proxies'>Prox</Link>
              <Link to='/billing'>Billing</Link>
              <Link to='/profile'>Profile</Link>
              <Link to='/settings'>Settings</Link>
            </Navigation>
          </Header>
          <Drawer title='Title'>
            <Navigation>
              <Link to='/task'>Task</Link>
              <Link to='/proxies'>Prox</Link>
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
    </div>
  );
}

export default App;
