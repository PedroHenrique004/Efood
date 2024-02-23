import React from 'react';
import Header from '../GeraisComponents/Header';
import GlobalConfigs from '../styles';
import Footer from '../GeraisComponents/Footer';
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
