import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {GlobalStyles} from '../../../../styles';

const dataCards = [
  {
    description: 'Restaurante',
    date: '16 de Setembro',
    value: '-14,90',
  },
  {
    description: 'PetShop',
    date: '15 de Setembro',
    value: '-27,59',
  },
  {
    description: 'Mercado',
    date: '13 de Setembro',
    value: '-157,81',
  },
  {
    description: 'Shopping',
    date: '10 de Setembro',
    value: '-43,77',
  },
];

export default () => {
  return (
    <View style={styles.container}>
      {dataCards.map(({description, date, value}) => (
        <TouchableOpacity key={description} activeOpacity={0.7}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={GlobalStyles.textLightGray}>Transações</Text>
              <MCIcon name="chevron-right" size={21} color="#a1a1a1" />
            </View>

            <View style={styles.cardBody}>
              <View style={styles.wrapDescription}>
                <View>
                  <MIcon
                    name="account-balance-wallet"
                    size={28}
                    color="#a1a1a1"
                  />
                </View>
                <View style={{marginLeft: 16}}>
                  <Text
                    style={[styles.description, GlobalStyles.textLightGray]}>
                    {description}
                  </Text>
                  <Text style={styles.date}>{date}</Text>
                </View>
              </View>
              <View>
                <Text style={[styles.value, GlobalStyles.textWarning]}>
                  R$ {value}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 28,
    paddingHorizontal: 4,
  },
  card: {
    backgroundColor: 'rgb(44, 44, 44)',
    borderRadius: 8,
    elevation: 16,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(20, 20, 20)',
  },
  cardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  wrapDescription: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
    color: '#777777',
  },
  value: {
    fontWeight: '600',
  },
});
