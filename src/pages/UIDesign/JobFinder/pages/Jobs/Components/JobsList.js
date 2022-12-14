import React, {useState} from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';
import Search from './Search';

const headerComponent = () => <Search />;

export default () => {
  const [selectedId, setSelectedId] = useState(null);

  const [items, setItems] = useState([
    {
      id: 1,
      imagem: require('../../../assets/img/logo-2.png'),
      empresa: 'Level Up Self',
      local: 'Criciúma, SC',
      vaga: 'Programador Senior Web',
      salario: 'R$ 3.500,00 - R$ 4.000',
      descricao:
        'Procuramos um Programador Senior Web que se destaque e que seja apaixonado por...',
      favorito: false,
    },
    {
      id: 2,
      imagem: require('../../../assets/img/logo-2.png'),
      empresa: 'Become An Expert',
      local: 'Criciúma, SC',
      vaga: 'React Native Developer',
      salario: 'R$ 4.250,00 - R$ 7.000',
      descricao:
        'Procuramos um Programador Senior Web que se destaque e que seja apaixonado por...',
      favorito: true,
    },
    {
      id: 3,
      imagem: require('../../../assets/img/logo-2.png'),
      empresa: 'One Step Forward',
      local: 'Criciúma, SC',
      vaga: 'Back-end Dev Júnior',
      salario: 'R$ 2.100,00 - R$ 3.000',
      descricao:
        'Procuramos um Programador Senior Web que se destaque e que seja apaixonado por...',
      favorito: false,
    },
    {
      id: 4,
      imagem: require('../../../assets/img/logo-2.png'),
      empresa: 'One Step Forward',
      local: 'Criciúma, SC',
      vaga: 'Back-end Dev Júnior',
      salario: 'R$ 2.100,00 - R$ 3.000',
      descricao:
        'Procuramos um Programador Senior Web que se destaque e que seja apaixonado por...',
      favorito: true,
    },
  ]);

  const setFavoriteItem = id => {
    setItems(
      items.map(item =>
        item.id === id ? {...item, favorito: !item.favorito} : item,
      ),
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableWithoutFeedback>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image style={styles.cardImage} source={item.imagem} />
            <View style={styles.cardTitleContainer}>
              <Text style={styles.cardTitle}>{item.vaga}</Text>
              <Text style={styles.cardSubtitle}>{item.empresa}</Text>
            </View>
            <TouchableOpacity
              onPress={() => setFavoriteItem(item.id)}
              activeOpacity={0.6}
              hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
              <Icon
                name={item.favorito ? 'favorite' : 'favorite-outline'}
                size={21}
                color={Colors.dark}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.cardBody}>
            <Text style={styles.jobDescription}>{item.descricao}</Text>
            <Text style={styles.jobPayment}>{item.salario}</Text>
          </View>
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
  card: {
    backgroundColor: Colors.light,
    padding: 16,
    marginHorizontal: 24,
    marginBottom: 12,
    borderRadius: 16,
    shadowColor: Colors.gray,
    elevation: 8,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  cardImage: {
    height: 42,
    width: 42,
    borderRadius: 12,
  },
  cardTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  cardTitle: {
    color: Colors.dark,
    fontWeight: '700',
  },
  cardSubtitle: {
    color: Colors.gray,
    fontWeight: '300',
  },
  cardBody: {
    marginTop: 12,
  },
  jobDescription: {
    color: Colors.gray,
    marginBottom: 12,
  },
  jobPayment: {
    color: Colors.dark,
  },
});
