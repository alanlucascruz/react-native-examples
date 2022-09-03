import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

export default ({data}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mais detalhes</Text>

      <View style={styles.item}>
        <MIcon style={styles.icon} name="attach-money" />
        <Text style={styles.text}>Imóvel para {data.tipoNegocio}</Text>
      </View>

      <View style={styles.item}>
        <MIcon style={styles.icon} name="location-on" />
        <Text style={styles.text}>{data.endereco}</Text>
      </View>

      <View style={styles.item}>
        <MIcon style={styles.icon} name="event" />
        <Text style={styles.text}>{data.dtAtualizacao}</Text>
      </View>

      <View style={[styles.item, {alignItems: 'flex-start'}]}>
        <MIcon style={[styles.icon, {marginTop: 2}]} name="notes" />
        <Text style={styles.text}>{data.sobre}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  title: {
    color: Colors.darkLight,
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    fontSize: 21,
    color: Colors.redLight,
    marginRight: 16,
  },
  text: {
    color: Colors.darkLight,
    marginRight: 24,
  },
});
