import React, {useRef, useState} from 'react';
import {Text, SafeAreaView, TextInput, StyleSheet} from 'react-native';

const TextInputNextFocus = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const senhaRef = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Focar no Próximo Campo</Text>

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu e-mail..."
        placeholderTextColor="#777777"
        onChangeText={setEmail}
        value={email}
        onSubmitEditing={() => senhaRef.current.focus()}
        returnKeyType="next"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a senha..."
        placeholderTextColor="#777777"
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
        ref={senhaRef}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#252525',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 32,
    color: '#ffffff',
  },
  label: {
    color: '#ffffff',
  },
  input: {
    marginTop: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#777',
    borderRadius: 4,
    padding: 4,
    color: '#ffffff',
  },
});

export default TextInputNextFocus;
