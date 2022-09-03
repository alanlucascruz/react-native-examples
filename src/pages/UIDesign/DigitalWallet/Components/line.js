import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default () => {
  return (
    <LinearGradient
      style={styles.line}
      colors={['#00FF7F', '#00FF7F', '#FF7F00', '#00DF6F', '#FF2A00']} useAngle={true}
      angle={45}
    />
  );
}

const styles = StyleSheet.create({
  line: {
    height: 3
  }
});