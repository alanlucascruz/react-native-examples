import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {GlobalStyles} from '../../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.button}>
          <Icon name="qr-code-scanner" size={28} color="#ffffff" />
        </TouchableOpacity>
        <Text style={[styles.textButton, GlobalStyles.textLightGray]}>
          Pagar
        </Text>
      </View>

      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.button}>
          <Icon name="import-export" size={28} color="#ffffff" />
        </TouchableOpacity>
        <Text style={[styles.textButton, GlobalStyles.textLightGray]}>
          Transferir
        </Text>
      </View>

      <View style={styles.buttonWrap}>
        <TouchableOpacity style={styles.button}>
          <Icon name="south" size={28} color="#ffffff" />
        </TouchableOpacity>
        <Text style={[styles.textButton, GlobalStyles.textLightGray]}>
          Depositar
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 28,
  },
  button: {
    width: 64,
    height: 64,
    backgroundColor: 'rgb(44, 44, 44)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 36,
    elevation: 16,
  },
  buttonWrap: {
    alignItems: 'center',
  },
  textButton: {
    color: '#ffffff',
    marginTop: 12,
  },
});
