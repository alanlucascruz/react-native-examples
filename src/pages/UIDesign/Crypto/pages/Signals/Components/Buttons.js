import React, {Fragment} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

export default () => {
  return (
    <Fragment>
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} activeOpacity={0.6}>
            <MIcon name="call-made" size={28} color={Colors.light} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Enviar</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.buttonColor]}
            activeOpacity={0.6}>
            <MIcon name="add" size={32} color={Colors.light} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Comprar</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} activeOpacity={0.6}>
            <MIcon name="call-received" size={28} color={Colors.light} />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Receber</Text>
        </View>
      </View>

      <View style={styles.line}></View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 36,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkGray,
    height: 56,
    width: 56,
    borderRadius: 32,
    elevation: 16,
  },
  buttonColor: {
    backgroundColor: Colors.primary,
  },
  buttonText: {
    color: Colors.light,
    fontWeight: '500',
    marginTop: 8,
  },
  line: {
    height: 1,
    backgroundColor: Colors.darkGray2,
    marginTop: 32,
    marginHorizontal: 16,
  },
});
