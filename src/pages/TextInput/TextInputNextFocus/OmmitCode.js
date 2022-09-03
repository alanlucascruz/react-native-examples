const Component = () => {
  // ommited code (imports and declarations)

  const senhaRef = useRef();

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Digite o seu e-mail..."
        onChangeText={setEmail}
        value={email}
        onSubmitEditing={() => senhaRef.current.focus()}
        returnKeyType="next"
      />

      <TextInput
        placeholder="Digite a senha..."
        onChangeText={setSenha}
        value={senha}
        secureTextEntry
        ref={senhaRef}
      />
    </SafeAreaView>
  );
};
