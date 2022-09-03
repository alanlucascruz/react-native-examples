import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../styles';

export default () => {
  const navigation = useNavigation();

  const [activeSections, setActiveSections] = useState([]);

  const SectionItem = ({text, navigateTo}) => (
    <TouchableOpacity
      hitSlop={{top: 5, right: 5, bottom: 5, left: 5}}
      style={styles.itemButton}
      onPress={() => navigation.navigate(navigateTo)}>
      <Text style={styles.itemText}>{text}</Text>
    </TouchableOpacity>
  );

  const SECTIONS = [
    {
      title: 'Bottom Navigation',
      icon: 'call-to-action',
      content: (
        <View>
          <SectionItem text="Simples" navigateTo="TabNavDefault" />
          <SectionItem text="Personalizado" navigateTo="TabNavCustom" />
          <SectionItem
            text="Botão Centralizado"
            navigateTo="TabNavCenteredButton"
          />
        </View>
      ),
    },
    {
      title: 'Drawer Navigation',
      icon: 'menu',
      content: (
        <View>
          <SectionItem text="Normal" navigateTo="DrawerNavDefault" />
          <SectionItem text="Slide" navigateTo="DrawerNavSlide" />
          <SectionItem text="Ícones" navigateTo="DrawerNavIcons" />
        </View>
      ),
    },
    {
      title: 'Scroll',
      icon: 'view-carousel',
      content: (
        <View>
          <SectionItem text="Horizontal" navigateTo="ScrollHorizontal" />
        </View>
      ),
    },
    {
      title: 'Carousel',
      icon: 'touch-app',
      content: (
        <View>
          <SectionItem text="Carousel de Imagens" navigateTo="CarouselImages" />
        </View>
      ),
    },
    {
      title: 'Shimmer Placeholder',
      icon: 'horizontal-split',
      content: (
        <View>
          <SectionItem text="Shimmer Placeholder" navigateTo="ShimmerScreen" />
        </View>
      ),
    },
    {
      title: 'Text Input',
      icon: 'keyboard',
      content: (
        <View>
          <SectionItem
            text="Keyboard Types"
            navigateTo="TextInputKeyboardTypes"
          />
          <SectionItem
            text="Focar no Próximo Input"
            navigateTo="TextInputNextFocus"
          />
        </View>
      ),
    },
    {
      title: 'UI Design',
      icon: 'widgets',
      content: (
        <View>
          <SectionItem text="Carteira Digital" navigateTo="DigitalWallet" />
          <SectionItem text="Imobiliária" navigateTo="RealEstate" />
          <SectionItem text="Busca de Empregos" navigateTo="JobFinder" />
          <SectionItem text="Crypto Moeda" navigateTo="Crypto" />
        </View>
      ),
    },
  ];

  const renderHeader = (section, index) => {
    const isActive = activeSections[0] === index;

    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerItem}>
          <Icon
            style={styles.headerIcon}
            name={section.icon}
            size={21}
            color={Colors.primary}
          />
          <Text
            style={[
              styles.headerText,
              {color: isActive ? Colors.primary : Colors.light},
            ]}>
            {section.title}
          </Text>
        </View>
        <Icon
          name={isActive ? 'expand-less' : 'expand-more'}
          size={16}
          color={isActive ? Colors.primary : Colors.light}
        />
      </View>
    );
  };

  const renderContent = section => {
    return (
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.darkPrimary} />
      <Accordion
        sections={SECTIONS}
        activeSections={activeSections}
        touchableComponent={TouchableOpacity}
        renderHeader={renderHeader}
        renderContent={renderContent}
        onChange={activeSections => setActiveSections(activeSections)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.darkPrimary,
    padding: 16,
    paddingTop: 8,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 18,
  },
  headerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    width: 28,
    textAlign: 'center',
  },
  headerText: {
    marginLeft: 16,
  },
  contentContainer: {
    marginLeft: 44,
    marginTop: 12,
  },
  contentText: {
    color: Colors.light,
  },
  itemButton: {
    marginBottom: 12,
  },
  itemText: {
    color: Colors.light,
  },
});
