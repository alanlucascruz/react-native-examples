import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../styles';

export default ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.nome}</Text>
      <Text style={styles.address}>{data.enderecoResumo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 24,
  },
  name: {
    color: Colors.redLight,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  address: {
    color: Colors.lightGray,
    marginBottom: 4,
  },
});
