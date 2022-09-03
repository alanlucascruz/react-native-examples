import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlobalStyles} from '../../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrap}>
        <Image
          style={styles.avatarImage}
          source={require('../../../../assets/img/avatar.png')}
        />
        <Text style={[GlobalStyles.textLightGray, styles.avatarText]}>
          Olá, Alan
        </Text>
      </View>

      <View style={styles.buttonsWrap}>
        <TouchableOpacity
          style={styles.button}
          hitSlop={{top: 8, left: 8, right: 8, bottom: 8}}>
          <Icon name="whatsapp" size={24} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.button, marginLeft: 8}}>
          <Icon name="email-outline" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(42, 42, 42)',
    paddingLeft: 18,
    paddingRight: 18,
    height: 68,
  },
  avatarWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  avatarText: {
    marginLeft: 16,
    fontSize: 16,
    fontWeight: '500',
  },
  buttonsWrap: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'rgb(32, 32, 32)',
    borderRadius: 8,
    elevation: 16,
  },
});
