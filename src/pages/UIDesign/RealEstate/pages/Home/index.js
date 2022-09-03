import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LastProperties from './Components/LastProperties';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <LastProperties />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
