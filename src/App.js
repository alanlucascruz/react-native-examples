/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';

import React, {Fragment} from 'react';
import {LogBox, StatusBar} from 'react-native';

import {Colors} from './styles';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/Home';

// Text inputs
import TextInputKeyboardTypes from './pages/TextInput/TextInputKeyboardTypes';
import TextInputNextFocus from './pages/TextInput/TextInputNextFocus';

// Scrolls
import ScrollHorizontal from './pages/ScrollView/ScrollHorizontal';

// Carousels
import CarouselImages from './pages/Carousel/CarouselImages';

// Shimmer Placeholder
import ShimmerScreen from './pages/ShimmerPlaceholder/ShimmerScreen';

// Navigations
import TabNavDefault from './pages/Navigation/TabNavDefault';
import TabNavCustom from './pages/Navigation/TabNavCustom';
import TabNavCenteredButton from './pages/Navigation/TabNavCenteredButton';
import DrawerNavDefault from './pages/Navigation/DrawerNavDefault';
import DrawerNavSlide from './pages/Navigation/DrawerNavSlide';
import DrawerNavIcons from './pages/Navigation/DrawerNavIcons';

// UI Design

// Digital Wallet
import DigitalWallet from './pages/UIDesign/DigitalWallet';

// Real State
import RealEstate from './pages/UIDesign/RealEstate';
import Details from './pages/UIDesign/RealEstate/pages/Details';

// Job Finder
import JobFinder from './pages/UIDesign/JobFinder';
import JobFinderDetails from './pages/UIDesign/JobFinder/pages/Details';
import JobFinderLogin from './pages/UIDesign/JobFinder/pages/Auth/Login';
import JobFinderSignUp from './pages/UIDesign/JobFinder/pages/Auth/SignUp';

// Crypto
import Crypto from './pages/UIDesign/Crypto';

// Ignore Logs
LogBox.ignoreLogs(['Reanimated 2']);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Fragment>
      <StatusBar backgroundColor={Colors.darkSecondary} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          // initialRouteName="Crypto"
        >
          <Stack.Screen name="Home" component={Home} />

          {/* TextInput */}
          <Stack.Screen
            name="TextInputKeyboardTypes"
            component={TextInputKeyboardTypes}
          />
          <Stack.Screen
            name="TextInputNextFocus"
            component={TextInputNextFocus}
          />

          {/* Scroll */}
          <Stack.Screen name="ScrollHorizontal" component={ScrollHorizontal} />

          {/* Carousel */}
          <Stack.Screen name="CarouselImages" component={CarouselImages} />

          {/* Shimmer Placeholder */}
          <Stack.Screen name="ShimmerScreen" component={ShimmerScreen} />

          {/* Tab Navigation */}
          <Stack.Screen name="TabNavDefault" component={TabNavDefault} />
          <Stack.Screen name="TabNavCustom" component={TabNavCustom} />
          <Stack.Screen
            name="TabNavCenteredButton"
            component={TabNavCenteredButton}
          />

          {/* Drawer Navigation */}
          <Stack.Screen name="DrawerNavDefault" component={DrawerNavDefault} />
          <Stack.Screen name="DrawerNavSlide" component={DrawerNavSlide} />
          <Stack.Screen name="DrawerNavIcons" component={DrawerNavIcons} />

          {/* UI Design */}
          <Stack.Screen name="DigitalWallet" component={DigitalWallet} />

          <Stack.Screen name="RealEstate" component={RealEstate} />
          <Stack.Screen name="Details" component={Details} />

          <Stack.Screen name="JobFinder" component={JobFinder} />
          <Stack.Screen name="JobFinderDetails" component={JobFinderDetails} />
          <Stack.Screen name="JobFinderLogin" component={JobFinderLogin} />
          <Stack.Screen name="JobFinderSignUp" component={JobFinderSignUp} />

          <Stack.Screen name="Crypto" component={Crypto} />
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  );
};

export default App;
