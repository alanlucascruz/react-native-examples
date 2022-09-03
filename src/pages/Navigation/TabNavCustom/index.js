import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../styles';

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label = options.tabBarLabel;
        const Icon = options.tabBarIcon;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({name: route.name, merge: true});
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={
              isFocused ? [styles.button, styles.buttonSelected] : styles.button
            }
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <Icon color={isFocused ? '#00ff7f' : '#a1a1a1'} size={28} />
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const DashboardScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkSecondary}}>Dashboard</Text>
  </View>
);

const TransacoesScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkSecondary}}>Transações</Text>
  </View>
);

const CarteiraScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkSecondary}}>Carteira</Text>
  </View>
);

const MaisOpcoesScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkSecondary}}>Mais Opções</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}
      backBehavior="none">
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          tabBarLabel: 'Dash',
          tabBarIcon: props => <Icon name="data-usage" {...props} />,
        }}
      />

      <Tab.Screen
        name="Transacoes"
        component={TransacoesScreen}
        options={{
          tabBarLabel: 'Transações',
          tabBarIcon: props => <Icon name="import-export" {...props} />,
        }}
      />

      <Tab.Screen
        name="Carteira"
        component={CarteiraScreen}
        options={{
          tabBarLabel: 'Carteira',
          tabBarIcon: props => (
            <Icon name="account-balance-wallet" {...props} />
          ),
        }}
      />

      <Tab.Screen
        name="MaisOpcoes"
        component={MaisOpcoesScreen}
        options={{
          tabBarLabel: 'Mais',
          tabBarIcon: props => <Icon name="more-horiz" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgb(40, 40, 40)',
    height: 72,
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
  buttonText: {
    fontSize: 9,
    marginTop: 2,
    color: '#a1a1a1',
  },
  defaultScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#a1a1a1',
  },
});
