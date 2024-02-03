import { Header } from 'components/Header/Header';
import React from 'react';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
