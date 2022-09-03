import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';

import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Title from './Components/Title';
import Details from './Components/Details';
import MoreInfo from './Components/MoreInfo';
import Price from './Components/Price';

const data = {
  id: 1,
  nome: 'Casa à venda em condomínio',
  sobre:
    'Casa à venda em condomínio fechado, entre Criciúma e Cocal do Sul. Casa em formato de "C" com arquitetura moderna em estado de novo. Amplo espaço de living (sala de estar e jantar e cozinha), acesso da piscina por qualquer cômodo da casa. São 3 suítes sendo uma master. Deseja saber maiores detalhes? Entre em contato.',
  tipoNegocio: 'Venda',
  tipoImovel: 'Apartamento',
  enderecoResumo: 'Centro, Criciúma, SC',
  endereco: 'Rua Pedro Benetton - Centro, Criciúma, SC - CEP 88820-060',
  dtAtualizacao: '03/12/2021',
  valor: '1.580.000,00',
  area: 261.5,
  qtDormitorios: 3,
  qtSuites: 1,
  qtBanheiros: 2,
  qtGaragens: 1,
  qtDepositos: 1,
  imagens: [
    require('../../assets/img/properties/1.jpeg'),
    require('../../assets/img/properties/2.jpeg'),
    require('../../assets/img/properties/3.jpeg'),
    require('../../assets/img/properties/4.jpeg'),
    require('../../assets/img/properties/5.jpeg'),
  ],
};

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Carousel data={data} />
        <Title data={data} />
        <Details data={data} />
        <MoreInfo data={data} />
      </ScrollView>
      <Price data={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
