import React, {Fragment, useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';
import Search from './Search';
import PopularJobs from './PopularJobs';

const items = [
  {
    id: 1,
    imagem: require('../../../assets/img/logo-2.png'),
    empresa: 'Level Up Self',
    vaga: 'Programador Senior Web',
    favorito: false,
  },
  {
    id: 2,
    imagem: require('../../../assets/img/logo-2.png'),
    empresa: 'Level Up Self',
    vaga: 'Programador Senior Web',
    favorito: true,
  },
  {
    id: 3,
    imagem: require('../../../assets/img/logo-2.png'),
    empresa: 'Level Up Self',
    vaga: 'Programador Senior Web',
    favorito: false,
  },
  {
    id: 4,
    imagem: require('../../../assets/img/logo-2.png'),
    empresa: 'Level Up Self',
    vaga: 'Programador Senior Web',
    favorito: false,
  },
  {
    id: 5,
    imagem: require('../../../assets/img/logo-2.png'),
    empresa: 'Level Up Self',
    vaga: 'Programador Senior Web',
    favorito: true,
  },
  {
    id: 6,
    imagem: require('../../../assets/img/logo-2.png'),
    empresa: 'Level Up Self',
    vaga: 'Programador Senior Web',
    favorito: false,
  },
  {
    id: 7,
    imagem: require('../../../assets/img/logo-2.png'),
    empresa: 'Level Up Self',
    vaga: 'Programador Senior Web',
    favorito: false,
  },
];

const headerComponent = () => (
  <Fragment>
    <Search />
    <PopularJobs />
    <Text style={styles.title}>Mais vagas</Text>
  </Fragment>
);

export default () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.card}>
          <Image style={styles.cardImage} source={item.imagem} />
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle}>{item.vaga}</Text>
            <Text style={styles.cardSubtitle}>{item.empresa}</Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <Icon
              name={item.favorito ? 'favorite' : 'favorite-outline'}
              size={21}
              color={Colors.dark}
            />
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={headerComponent}
        data={items}
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
    fontSize: 16,
    color: Colors.dark,
    fontWeight: '600',
    marginHorizontal: 24,
    marginTop: 8,
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: Colors.light,
    padding: 12,
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: Colors.gray,
    elevation: 8,
  },
  cardTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  cardImage: {
    height: 42,
    width: 42,
    borderRadius: 12,
    marginRight: 8,
  },
  cardTitle: {
    color: Colors.dark,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: Colors.gray,
    fontWeight: '300',
  },
});
