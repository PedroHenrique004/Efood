import React from 'react';
import HeaderRest from '../RestauranteComponents/Header';
import GlobalConfigs from '../styles';
import Footer from '../GeraisComponents/Footer';
import Cardapio from '../RestauranteComponents/Cardapio';

const RestauranteAba = () => {
  return (
    <>
        <GlobalConfigs />
        <HeaderRest />
        <Cardapio />
        <Footer />
    </>
  );
};

export default RestauranteAba;
