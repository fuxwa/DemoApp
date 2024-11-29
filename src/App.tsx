import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Layout } from 'screens';

function App(): React.JSX.Element {

  return (
    <SafeAreaProvider >
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
