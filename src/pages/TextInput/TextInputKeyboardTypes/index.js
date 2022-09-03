import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ScrollView,
} from 'react-native';

const TextInputKeyboardTypes = () => {
  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Keyboard Types</Text>

        <Text style={styles.label}>Default</Text>
        <TextInput
          style={styles.input}
          keyboardType="default"
          placeholder="Digite aqui..."
          onChangeText={onChangeText}
          value={text}
          placeholderTextColor="#a1a1a1"
        />

        <Text style={styles.label}>Number Pad</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Digite aqui..."
          placeholderTextColor="#777777"
        />

        <Text style={styles.label}>Decimal Pad</Text>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          placeholder="Digite aqui..."
          placeholderTextColor="#777777"
        />

        <Text style={styles.label}>Numeric</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Digite aqui..."
          placeholderTextColor="#777777"
        />

        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Digite aqui..."
          placeholderTextColor="#777777"
        />

        <Text style={styles.label}>Phone Pad</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          placeholder="Digite aqui..."
          placeholderTextColor="#777777"
        />
      </ScrollView>
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

export default TextInputKeyboardTypes;
