import React from 'react';
import {useNavigation} from '@react-navigation/core';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

export default () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
        <Icon style={styles.icon} name="arrow-back" />
      </TouchableOpacity>
      <Text style={styles.text}>Detalhes do imóvel</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  icon: {
    color: Colors.darkLight,
    fontSize: 24,
    marginRight: 24,
  },
  text: {
    color: Colors.darkLight,
    fontSize: 18,
    fontWeight: '500',
  },
});
