/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Button
} from 'react-native';


declare const global: { HermesInternal: null | {} };

const App = () => {


  const buttonTapped = () => {
    console.log('link button tapped')
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title={'link test'} onPress={buttonTapped} />
      </SafeAreaView>
    </>
  );
};


export default App;
