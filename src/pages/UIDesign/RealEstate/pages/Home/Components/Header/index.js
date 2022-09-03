import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Localização</Text>
        <Text style={styles.title}>São Luis, Criciúma, SC</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require('../../../../assets/img/logo-sm.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  subtitle: {
    color: Colors.lightGray,
    fontSize: 12,
  },
  title: {
    color: Colors.darkLight,
    fontSize: 16,
  },
  image: {
    height: 48,
    width: 48,
  },
});
