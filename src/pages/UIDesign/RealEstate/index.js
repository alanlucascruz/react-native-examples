import React, {Fragment} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Fontisto';
import {Colors} from './styles';

import HomeScreen from './pages/Home';

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

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
            style={styles.button}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            <Icon
              color={isFocused ? Colors.redLight : Colors.light}
              size={24}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const SearchScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkLight}}>Pesquisar</Text>
  </View>
);

const FavoritesScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkLight}}>Favoritos</Text>
  </View>
);

const MoreOptionsScreen = () => (
  <View style={styles.defaultScreen}>
    <Text style={{color: Colors.darkLight}}>Mais Opções</Text>
  </View>
);

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Fragment>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />

      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        screenOptions={{headerShown: false}}
        backBehavior="none">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{tabBarIcon: props => <Icon name="home" {...props} />}}
        />

        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{tabBarIcon: props => <Icon name="search" {...props} />}}
        />

        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{tabBarIcon: props => <Icon name="favorite" {...props} />}}
        />

        <Tab.Screen
          name="MoreOptions"
          component={MoreOptionsScreen}
          options={{tabBarIcon: props => <Icon name="more-v-a" {...props} />}}
        />
      </Tab.Navigator>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.dark,
    height: 64,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: 64,
  },
  defaultScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#a1a1a1',
  },
});
