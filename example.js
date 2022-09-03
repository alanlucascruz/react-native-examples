import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CountButton from './components/CountButton';

const store = new Set();

export default function App() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment1 = useCallback(
    () => setCount1(count1 => count1 + 1),
    [count1],
  );

  const increment2 = useCallback(
    () => setCount2(count2 => count2 + 1),
    [count2],
  );

  store.add(increment1);
  store.add(increment2);

  return (
    <View>
      <Text>{count1}</Text>
      <CountButton title={'Contador 1'} onPress={increment1} />

      <Text>{count2}</Text>
      <CountButton title={'Contador 2'} onPress={increment2} />

      <Text>Total de funções criadas: {store.size}</Text>
    </View>
  );
}
