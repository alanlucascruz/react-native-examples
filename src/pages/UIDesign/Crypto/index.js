import React, {Fragment} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Text,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from './styles';

import SignalsScreen from './pages/Signals';
// import JobsScreen from './pages/Jobs';
// import FavoritesScreen from './pages/Favorites';
// import ProfileScreen from './pages/Profile';

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('./assets/img/background.png')}
      resizeMode="cover"
      style={styles.screenContainer}>
      <Text style={styles.screenText}>Hello!</Text>
    </ImageBackground>
  );
};

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.navigationContainer}>
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

        return route.name === 'Signals' ? (
          <View style={styles.buttonElevatedContainer} key={index}>
            <TouchableHighlight
              underlayColor={Colors.secondary}
              onPress={onPress}
              style={
                isFocused
                  ? [styles.buttonElevated, styles.buttonElevatedSelected]
                  : styles.buttonElevated
              }
              hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
              <Icon color={Colors.light} size={32} />
            </TouchableHighlight>
            <Text
              style={[
                styles.buttonText,
                {color: isFocused ? Colors.light : Colors.gray},
              ]}>
              {label}
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.button}
            activeOpacity={0.7}
            hitSlop={{top: 10, right: 10, bottom: 10, left: 10}}>
            {isFocused && <View style={styles.buttonSelectedIndicator}></View>}
            <Icon
              style={styles.buttonIcon}
              color={isFocused ? Colors.light : Colors.gray}
              size={28}
            />
            <Text
              style={[
                styles.buttonText,
                {color: isFocused ? Colors.light : Colors.gray},
              ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.dark} barStyle="light-content" />

      <Tab.Navigator
        tabBar={props => <TabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
        backBehavior="none"
        initialRouteName="Signals">
        <Tab.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: props => <MCIcon name="home-outline" {...props} />,
          }}
        />

        <Tab.Screen
          name="Favorites"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: props => <MIcon name="star-outline" {...props} />,
          }}
        />

        <Tab.Screen
          name="Signals"
          component={SignalsScreen}
          options={{
            tabBarLabel: 'Sinais',
            tabBarIcon: props => <MIcon name="waterfall-chart" {...props} />,
          }}
        />

        <Tab.Screen
          name="Charts"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Gráficos',
            tabBarIcon: props => <MIcon name="insights" {...props} />,
          }}
        />

        <Tab.Screen
          name="Conversions"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Conversões',
            tabBarIcon: props => <MIcon name="swap-horiz" {...props} />,
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#262c3b',
    height: 88,
    marginHorizontal: -1,
    paddingHorizontal: 8,
    borderTopStartRadius: 24,
    borderTopEndRadius: 24,
    borderTopWidth: 0.5,
    borderTopColor: Colors.darkGray2,
    borderLeftWidth: 0.5,
    borderLeftColor: Colors.darkGray2,
    borderRightWidth: 0.5,
    borderRightColor: Colors.darkGray2,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 64,
    width: 64,
  },
  buttonIcon: {
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 11,
    fontWeight: '300',
    marginTop: 2,
  },
  buttonSelectedIndicator: {
    position: 'absolute',
    height: 1,
    width: 21,
    top: -12,
    backgroundColor: Colors.light,
    borderRadius: 4,
  },
  buttonElevatedContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    top: -21,
  },
  buttonElevated: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 72,
    width: 64,
    marginBottom: 8,
    borderRadius: 21,
    backgroundColor: Colors.tertiary,
    elevation: 16,
  },
  buttonElevatedSelected: {
    backgroundColor: Colors.primary,
  },
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenText: {
    color: Colors.light,
    fontSize: 18,
  },
});
