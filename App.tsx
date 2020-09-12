/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  Button,
  SafeAreaView,
  StatusBar
} from 'react-native';

import { FeedTemplate } from './src/types/Types';
import RNKakaoLink from 'react-native-kakao-links'
import React from 'react';

declare const global: { HermesInternal: null | {} };

const App = () => {


  const buttonTapped = () => {
    console.log('link button tapped')

  }

  const linkFeed = async () => {
    try {
      const options: FeedTemplate = {
        objectType: "feed", //required
        content: {
          title: 'title',
          link: {
            webURL: 'https://google.com'
          },
          imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQwMBW9MrS4Jt9VPEZaUPeZKZCxRBBT97Fgbg&usqp=CAU'
        }, //required
      };
      // @ts-ignore
      const response = await RNKakaoLink.link(options);
      console.log(response);
    } catch (e) {
      console.warn(e);
    }
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title={'link test'} onPress={linkFeed} />
      </SafeAreaView>
    </>
  );
};


export default App;
