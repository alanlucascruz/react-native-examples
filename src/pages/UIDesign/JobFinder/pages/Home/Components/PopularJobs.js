import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

const items = [
  {
    imagem: require('../../../assets/img/logo-1.png'),
    empresa: 'Level Up Self',
    local: 'Criciúma, SC',
    vaga: 'Programador Senior Web',
    salario: 'R$ 3.500,00 - R$ 4.000',
    favorito: false,
  },
  {
    imagem: require('../../../assets/img/logo-1.png'),
    empresa: 'Become An Expert',
    local: 'Criciúma, SC',
    vaga: 'React Native Developer',
    salario: 'R$ 4.250,00 - R$ 7.000',
    favorito: true,
  },
  {
    imagem: require('../../../assets/img/logo-1.png'),
    empresa: 'One Step Forward',
    local: 'Criciúma, SC',
    vaga: 'Back-end Dev Júnior',
    salario: 'R$ 2.100,00 - R$ 3.000',
    favorito: false,
  },
];

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Vagas mais populares</Text>
        <TouchableOpacity
          onPress={() => navigation.jumpTo('Jobs')}
          activeOpacity={0.6}
          hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
          <Text style={styles.showAll}>Ver todos</Text>
        </TouchableOpacity>
      </View>

      <View>
        <ScrollView
          style={styles.horizontalScrollView}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {items.map((item, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('JobFinderDetails')}>
              <View
                style={[
                  styles.card,
                  {marginRight: items.length - 1 === index ? 48 : 8},
                ]}>
                <View style={styles.cardHeader}>
                  <Image style={styles.cardImage} source={item.imagem} />
                  <View style={styles.cardTitleContainer}>
                    <Text style={styles.cardTitle}>{item.empresa}</Text>
                    <Text style={styles.cardSubtitle}>{item.local}</Text>
                  </View>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
                    <Icon
                      name={item.favorito ? 'favorite' : 'favorite-outline'}
                      size={21}
                      color={Colors.gray}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.cardBody}>
                  <Text style={styles.jobDescription}>{item.vaga}</Text>
                  <Text style={styles.jobPayment}>{item.salario}</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    color: Colors.dark,
    fontWeight: '600',
  },
  showAll: {
    color: Colors.gray,
    textTransform: 'capitalize',
    fontSize: 13,
  },
  horizontalScrollView: {
    paddingLeft: 24,
    paddingVertical: 16,
  },
  card: {
    backgroundColor: Colors.dark,
    padding: 16,
    borderRadius: 16,
    width: 270,
    marginRight: 16,
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
    color: Colors.light,
    textTransform: 'uppercase',
  },
  cardSubtitle: {
    color: Colors.gray,
    fontSize: 12,
  },
  cardBody: {
    marginTop: 8,
  },
  jobDescription: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: '500',
    textTransform: 'capitalize',
    marginBottom: 8,
  },
  jobPayment: {
    color: Colors.gray,
    fontWeight: '300',
  },
});
