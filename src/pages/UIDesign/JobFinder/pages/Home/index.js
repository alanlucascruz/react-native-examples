import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from '../../styles';
import MoreJobs from './Components/MoreJobs';

export default () => (
  <View style={styles.container}>
    <MoreJobs />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light,
  },
});
