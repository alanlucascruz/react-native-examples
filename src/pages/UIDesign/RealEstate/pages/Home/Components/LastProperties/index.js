import React, {Fragment, useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../../styles';

import Header from '../Header';
import Filters from '../Filters';

const headerComponent = () => (
  <Fragment>
    <Header />
    <Filters />
    <Text style={styles.title}>Últimos imóveis cadastrados</Text>
  </Fragment>
);

const DATA = [
  {
    id: '1',
    tipoImovel: 'Apartamento',
    qtDormitorios: 3,
    qtSuites: 1,
    qtBanheiros: 2,
    qtGaragens: 1,
    endereco: 'São Simão, Criciúma, SC',
    imagem: require('../../../../assets/img/properties/1.jpeg'),
  },
  {
    id: '2',
    tipoImovel: 'Condomínio',
    qtDormitorios: 2,
    qtSuites: 0,
    qtBanheiros: 1,
    qtGaragens: 1,
    endereco: 'Rodovia José Spillere, Nº 1020 - Nova Veneza, SC',
    imagem: require('../../../../assets/img/properties/2.jpeg'),
  },
  {
    id: '3',
    tipoImovel: 'Apartamento',
    qtDormitorios: 2,
    qtSuites: 1,
    qtBanheiros: 2,
    qtGaragens: 1,
    endereco: 'Rua Pedro Benetton - Centro, Criciúma, SC',
    imagem: require('../../../../assets/img/properties/3.jpeg'),
  },
  {
    id: '4',
    tipoImovel: 'Casa',
    qtDormitorios: 3,
    qtSuites: 0,
    qtBanheiros: 2,
    qtGaragens: 2,
    endereco: 'Rua Quinze de Novembro - Centro, Criciúma, SC',
    imagem: require('../../../../assets/img/properties/4.jpeg'),
  },
  {
    id: '5',
    tipoImovel: 'Terreno',
    qtDormitorios: 4,
    qtSuites: 1,
    qtBanheiros: 2,
    qtGaragens: 2,
    endereco: 'Linha Batista, Criciúma, SC',
    imagem: require('../../../../assets/img/properties/5.jpeg'),
  },
];

export default () => {
  const navigation = useNavigation();

  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        style={styles.item}
        activeOpacity={1.0}>
        <Image resizeMode="cover" style={styles.image} source={item.imagem} />
        <View style={styles.details}>
          <Text style={styles.detailsTitle}>{item.tipoImovel}</Text>
          <Text style={styles.detailsSubtitle}>{item.endereco}</Text>
          <View style={styles.moreDetails}>
            <MCIcon
              style={styles.moreDetailsIcon}
              name="bed"
              size={16}
              color="#ffffff"
            />
            <Text style={styles.moreDetailsText}>4 Dormitórios</Text>

            <MCIcon
              style={styles.moreDetailsIcon}
              name="hot-tub"
              size={16}
              color="#ffffff"
            />
            <Text style={styles.moreDetailsText}>2 Banheiros</Text>

            <MCIcon
              style={styles.moreDetailsIcon}
              name="car"
              size={16}
              color="#ffffff"
            />
            <Text style={styles.moreDetailsText}>1 Garagem</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: Colors.darkLight,
    marginHorizontal: 24,
    fontWeight: 'bold',
    marginTop: 4,
  },
  item: {
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  image: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: '100%',
    height: 256,
  },
  details: {
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: Colors.redLight,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  detailsTitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 4,
  },
  detailsSubtitle: {
    color: '#ffffff',
    marginBottom: 4,
  },
  moreDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moreDetailsIcon: {
    marginRight: 4,
  },
  moreDetailsText: {
    color: '#ffffff',
    fontSize: 12,
    marginRight: 8,
  },
});
