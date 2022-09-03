import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Pie from 'react-native-pie';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Pie
          radius={120}
          innerRadius={108}
          sections={[
            {percentage: 80, color: '#00DF6F'},
            {percentage: 20, color: '#FF7F00'},
          ]}
          strokeCap={'butt'}
        />
        <View style={styles.legend}>
          <Text style={styles.textLegend}>Capital Disponível</Text>
          <Text style={styles.textPrice}>
            <Text style={styles.textCurrency}>R$</Text> 84.000,00
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 28,
  },
  wrap: {
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 21,
    borderRadius: 200,
    borderColor: 'rgb(44, 44, 44)',
    padding: 8,
    backgroundColor: 'rgb(37, 37, 37)',
    elevation: 32,
  },
  legend: {
    position: 'absolute',
  },
  textLegend: {
    color: '#a1a1a1',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  textCurrency: {
    fontSize: 18,
    fontWeight: '500',
  },
  textPrice: {
    fontSize: 32,
    fontWeight: '700',
    color: '#00ff7f',
    textAlign: 'center',
  },
});
