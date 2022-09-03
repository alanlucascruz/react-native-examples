import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Header from './Components/Header';
import CurrentBalance from './Components/CurrentBalance';
import Buttons from './Components/Buttons';
import Cards from './Components/Cards';

export default () => {
  return (
    <ImageBackground
      source={require('../../assets/img/background.png')}
      resizeMode="cover"
      style={styles.container}>
      <Header />
      <ScrollView>
        <CurrentBalance />
        <Buttons />
        <Cards />
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
