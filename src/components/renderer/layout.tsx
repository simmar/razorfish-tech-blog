import React from 'react';
import { Header } from './header'
import { Footer } from './footer'

type LayoutProps = {
    childrens: React.ReactNode;
};

export function Layout({childrens}: LayoutProps) {
  return (
      <>
        <Header />
        {childrens}
        <Footer />
      </>
  );
}
