import React from 'react';
import Header from '../HomeComponents/Header';
import GlobalConfigs from '../styles';
import Footer from '../HomeComponents/Footer';
import Restaurantes from '../HomeComponents/Restaurantes';

const Home = () => {
  return (
    <>
        <GlobalConfigs />
        <Header />
        <Restaurantes />
        <Footer />
    </>
  );
};

export default Home;
