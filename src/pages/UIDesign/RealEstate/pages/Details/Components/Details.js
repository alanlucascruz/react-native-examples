import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Colors} from '../../../styles';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({data}) => {
  return (
    <View>
      <ScrollView
        style={styles.scrollHoriz}
        horizontal
        showsHorizontalScrollIndicator={false}>
        <View style={styles.item}>
          <MCIcon style={styles.icon} name="key" />
          <Text style={styles.text}>{data.id}</Text>
        </View>

        <View style={styles.item}>
          <MCIcon style={styles.icon} name="aspect-ratio" />
          <Text style={styles.text}>{data.area.toFixed(2)} m²</Text>
        </View>

        <View style={styles.item}>
          <MCIcon style={styles.icon} name="bed" />
          <Text style={styles.text}>{data.qtDormitorios} quartos</Text>
        </View>

        <View style={styles.item}>
          <MIcon style={styles.icon} name="bathtub" />
          <Text style={styles.text}>{data.qtSuites} suítes</Text>
        </View>

        <View style={styles.item}>
          <MIcon style={styles.icon} name="wc" />
          <Text style={styles.text}>{data.qtBanheiros} banheiros</Text>
        </View>

        <View style={styles.item}>
          <MCIcon style={styles.icon} name="car" />
          <Text style={styles.text}>{data.qtGaragens} vagas</Text>
        </View>

        <View style={[styles.item, {marginRight: 48}]}>
          <MCIcon style={styles.icon} name="widgets" />
          <Text style={styles.text}>{data.qtDepositos} depósitos</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollHoriz: {
    paddingLeft: 24,
    paddingVertical: 24,
  },
  item: {
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Colors.redLight,
    color: '#ffffff',
    fontSize: 24,
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  text: {
    color: Colors.lightGray,
    marginTop: 8,
    fontSize: 12,
  },
});
