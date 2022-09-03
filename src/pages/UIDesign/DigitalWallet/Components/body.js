import React from 'react';
import { StyleSheet, View } from 'react-native';
import Chart from './bodyChart';
import Buttons from './bodyButtons';
import Card from './bodyCard';

export default () => {
  return (
    <View style={styles.container}>
      <Chart />
      <Buttons />
      <Card />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingLeft: 12,
    paddingRight: 12,
  },
});