import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {GlobalStyles} from '../../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.buttonSelected]}>
        <MIcon name="data-usage" size={28} color="#00ff7f" />
        <Text style={[styles.description, GlobalStyles.textLightGray]}>
          Dash
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MIcon name="import-export" size={28} color="#a1a1a1" />
        <Text style={[styles.description, GlobalStyles.textLightGray]}>
          Transações
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MIcon name="account-balance-wallet" size={28} color="#a1a1a1" />
        <Text style={[styles.description, GlobalStyles.textLightGray]}>
          Carteira
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <MIcon name="more-horiz" size={28} color="#a1a1a1" />
        <Text style={[styles.description, GlobalStyles.textLightGray]}>
          Mais
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 72,
    backgroundColor: 'rgb(40, 40, 40)',
    elevation: 32,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: 64,
    borderRadius: 36,
  },
  buttonSelected: {
    backgroundColor: 'rgb(52, 52, 52)',
    elevation: 32,
  },
  description: {
    fontSize: 9,
    marginTop: 2,
  },
});
