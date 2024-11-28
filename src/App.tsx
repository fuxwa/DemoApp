import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View
} from 'react-native';
import { Layout } from 'screens';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} translucent />
      <NavigationContainer>
        <Layout />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});

export default App;
