import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

const data = [
  {
    colors: ['#b066ff', '#8055fa', '#4d42d4', '#0030ae', '#00208b'],
    icon: 'show-chart',
    text: 'Dashboard',
  },
  {
    colors: ['#ade5ff', '#7dcefb', '#3cb5f2', '#009ce9', '#0085e0'],
    icon: 'account-balance-wallet',
    text: 'Carteira',
  },
  {
    colors: ['#f16731', '#f35436', '#f23c3c', '#f01843', '#e90057', '#e30064'],
    icon: 'import-export',
    text: 'Transferir',
  },
  {
    colors: ['#b5f23c', '#92ed3b', '#69e93f', '#28e548', '#00e154', '#00dd62'],
    icon: 'south',
    text: 'Depositar',
  },
];

export default () => (
  <View style={styles.container}>
    <View style={styles.wrap}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <LinearGradient
            key={index}
            style={styles.card}
            colors={item.colors}
            useAngle={true}
            angle={202}>
            <Icon
              style={styles.icon}
              name={item.icon}
              color={Colors.light}
              size={32}
            />
            <Text style={styles.text}>{item.text}</Text>
          </LinearGradient>
        ))}
      </ScrollView>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
  },
  wrap: {
    padding: 12,
  },
  card: {
    backgroundColor: Colors.darkSecondary,
    borderRadius: 8,
    padding: 16,
    marginRight: 8,
    width: 150,
  },
  icon: {
    marginBottom: 16,
  },
  text: {
    color: Colors.light,
    fontSize: 16,
  },
});
