import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {Body, Header, Line, Nav} from './Components';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="rgb(42, 42, 42)" />
      <Header />
      <Line />
      <ScrollView>
        <Body />
      </ScrollView>
      <Nav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(25, 25, 25)',
  },
});
