import React from 'react';

import { Container } from '@mui/material';

import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const MainLayout: React.FC = () => {
  return (
    <>
      <Header/>
      <main className="content">
        <Container>
          <Outlet/>
        </Container>
      </main>
    </>
  )
}

export default MainLayout