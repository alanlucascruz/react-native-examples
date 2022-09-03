import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textCurrentBalance}>Balanço Atual</Text>

      <View style={styles.valueContainer}>
        <Text style={styles.textCoin}>R$</Text>
        <Text style={styles.textValue}>3.293,46</Text>
      </View>

      <TouchableOpacity style={styles.select} activeOpacity={0.8}>
        <MIcon
          style={styles.selectIconCircle}
          name="radio-button-checked"
          size={21}
          color={Colors.yellow}
        />
        <Text style={styles.selectText}>Smart Chain BEP-20</Text>
        <MIcon
          style={styles.selectIconExpand}
          name="expand-more"
          size={16}
          color={Colors.lightGray}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 24,
  },
  textCurrentBalance: {
    color: Colors.light,
    marginBottom: 4,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  textCoin: {
    color: Colors.light,
    fontSize: 16,
    fontWeight: '500',
    paddingBottom: 8,
    marginRight: 8,
  },
  textValue: {
    color: Colors.light,
    fontSize: 42,
    fontWeight: '500',
  },
  select: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.darkGray,
    padding: 4,
    marginTop: 12,
    borderRadius: 24,
  },
  selectIconCircle: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Colors.dark,
    borderRadius: 16,
    borderColor: Colors.dark,
    borderWidth: 4,
  },
  selectText: {
    color: Colors.lightGray,
    fontWeight: '500',
    marginLeft: 8,
    marginRight: 4,
  },
  selectIconExpand: {
    marginRight: 8,
  },
});
