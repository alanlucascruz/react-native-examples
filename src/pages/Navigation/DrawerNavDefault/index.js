import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Colors} from '../../../styles';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    navigation.openDrawer();
  });

  return (
    <View style={styles.defaultScreen}>
      <Text style={{color: Colors.darkSecondary}}>Início</Text>
    </View>
  );
};

const NotificationsScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkSecondary}}>Notificações</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkSecondary}}>Configurações</Text>
  </View>
);

const Drawer = createDrawerNavigator();

export default () => (
  <Drawer.Navigator initialRouteName="Home" backBehavior="none">
    <Drawer.Screen
      name="Home"
      component={HomeScreen}
      options={{drawerLabel: 'Início', title: 'Início'}}
    />
    <Drawer.Screen
      name="Notifications"
      component={NotificationsScreen}
      options={{drawerLabel: 'Notificações', title: 'Notificações'}}
    />
    <Drawer.Screen
      name="Settings"
      component={SettingsScreen}
      options={{drawerLabel: 'Configurações', title: 'Configurações'}}
    />
  </Drawer.Navigator>
);

const styles = StyleSheet.create({
  defaultScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
