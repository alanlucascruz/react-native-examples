import React, {Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  TouchableHighlight,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

        return route.name === 'QrCode' ? (
          <TouchableHighlight
            key={index}
            underlayColor="#00DF6F"
            onPress={onPress}
            style={
              isFocused
                ? [styles.buttonElevated, styles.buttonElevatedSelected]
                : styles.buttonElevated
            }
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <Fragment>
              <Icon color={isFocused ? '#252525' : '#a1a1a1'} size={28} />
              <Text
                style={[
                  styles.buttonText,
                  {color: isFocused ? '#252525' : '#a1a1a1'},
                ]}>
                {label}
              </Text>
            </Fragment>
          </TouchableHighlight>
        ) : (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.button}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <Icon color={isFocused ? '#00ff7f' : '#a1a1a1'} size={24} />
            <Text style={[styles.buttonText, {color: '#a1a1a1'}]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const DashboardScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: '#ffffff'}}>Dashboard</Text>
  </View>
);

const TransacoesScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: '#ffffff'}}>Transações</Text>
  </View>
);

const QrCodeScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: '#00ff7f'}}>QR Code</Text>
  </View>
);

const CarteiraScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: '#ffffff'}}>Carteira</Text>
  </View>
);

const MaisOpcoesScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: '#ffffff'}}>Mais Opções</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="rgb(42, 42, 42)" />

      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{headerShown: false}}
        initialRouteName="QrCode"
        backBehavior="none">
        <Tab.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{
            tabBarLabel: 'Dashboard',
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
          name="QrCode"
          component={QrCodeScreen}
          options={{
            tabBarLabel: 'QR Code',
            tabBarIcon: props => <Icon name="qr-code-scanner" {...props} />,
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
            tabBarLabel: 'Mais Opções',
            tabBarIcon: props => <Icon name="more-horiz" {...props} />,
          }}
        />
      </Tab.Navigator>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'rgb(40, 40, 40)',
    height: 56,
    elevation: 32,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 9,
    marginTop: 2,
  },
  buttonElevated: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: 64,
    borderRadius: 36,
    backgroundColor: 'rgb(57, 57, 57)',
    elevation: 32,
    top: -18,
  },
  buttonElevatedSelected: {
    backgroundColor: '#00ff7f',
  },
  defaultScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#a1a1a1',
    backgroundColor: 'rgb(25, 25, 25)',
  },
});
