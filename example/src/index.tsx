console.disableYellowBox = true;

import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';

import NavigationContainer from './Home';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 44,
    paddingBottom: Platform.OS === 'ios' ? 44 : 0,
    backgroundColor: '#fff',
  },
});
