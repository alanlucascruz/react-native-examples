import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

export default () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonMenu} activeOpacity={0.5}>
        <MIcon name="menu" size={24} color={Colors.light} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonNotifications} activeOpacity={0.5}>
        <MIcon name="notifications" size={24} color={Colors.light} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  buttonMenu: {
    backgroundColor: Colors.darkGray,
    marginLeft: 16,
    padding: 16,
    borderRadius: 32,
    elevation: 8,
  },
  buttonNotifications: {
    backgroundColor: Colors.darkGray,
    paddingVertical: 16,
    paddingLeft: 21,
    paddingRight: 32,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    elevation: 8,
  },
  badge: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    height: 18,
    width: 18,
    borderRadius: 11,
    top: 48,
    left: 24,
  },
  badgeText: {
    color: Colors.light,
    fontWeight: '700',
    fontSize: 12,
  },
});
