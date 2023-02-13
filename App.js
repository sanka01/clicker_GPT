import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Factory from './model/factory';


const App = () => {
  return (
    <View style={styles.container}>
      <Factory />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
