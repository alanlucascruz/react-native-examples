import React, {useCallback} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Linking} from 'react-native';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({data}) => {
  const openWhatsapp = useCallback(async () => {
    const link = `https://api.whatsapp.com/send?phone=5548999990251&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20detalhes%20sobre%20o%20im%C3%B3vel%20de%20c%C3%B3digo%20${data.id}%20(https%3A%2F%2Fmarfimimoveis.com.br%2Fimoveis-detalhes%2F%3Fid%3D${data.id})`;

    await Linking.openURL(link);
  });

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.description}>Preço</Text>
        <Text style={styles.value}>R$ {data.valor}</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.6}>
        <Icon style={styles.buttonIcon} name="whatsapp" />
        <Text style={styles.buttonText} onPress={openWhatsapp}>
          Contato
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderTopWidth: 0.5,
    borderColor: '#d3d3d3',
  },
  description: {
    color: Colors.lightGray,
    fontSize: 12,
  },
  value: {
    color: Colors.darkLight,
    fontSize: 21,
    fontWeight: 'bold',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: Colors.redLight,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  buttonIcon: {
    color: '#ffffff',
    fontSize: 18,
  },
  buttonText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 8,
  },
});
