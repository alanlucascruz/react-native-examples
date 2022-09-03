import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../../styles';

const items = [
  {
    icon: 'filter-list',
    text: 'Todos',
  },
  {
    icon: 'home',
    text: 'Casa',
  },
  {
    icon: 'apartment',
    text: 'Apartamento',
  },
  {
    icon: 'grass',
    text: 'Terreno',
  },
  {
    icon: 'corporate-fare',
    text: 'Sala Comercial',
  },
  {
    icon: 'location-city',
    text: 'Prédio',
  },
  {
    icon: 'waves',
    text: 'Cobertura',
  },
  {
    icon: 'fireplace',
    text: 'Sítio',
  },
  {
    icon: 'directions-car',
    text: 'Garagem',
  },
];

export default () => {
  return (
    <View>
      <Text style={styles.title}>Descubra a melhor propriedade para você</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.container}>
        {items.map((item, index) => (
          <TouchableOpacity
            style={[
              styles.item,
              {marginRight: items.length - 1 === index ? 48 : 16},
            ]}
            key={index}
            activeOpacity={0.6}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <Icon
              style={styles.itemIcon}
              name={item.icon}
              size={28}
              color={Colors.light}
            />
            <Text style={styles.itemText}>{item.text}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginTop: 16,
    marginBottom: 4,
    marginHorizontal: 24,
    color: Colors.darkLight,
  },
  container: {
    paddingLeft: 24,
    paddingVertical: 16,
  },
  item: {
    alignItems: 'center',
  },
  itemIcon: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: Colors.redLight,
    height: 48,
    width: 48,
    borderRadius: 24,
  },
  itemText: {
    color: Colors.lightGray,
    marginTop: 8,
    fontSize: 12,
  },
});
