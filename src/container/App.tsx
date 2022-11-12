import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import SlapScren from '../component/SlapScren';
import Container from './Container';
import {Provider} from 'react-redux';
import store from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
let persistor = persistStore(store);
export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <View style={{flex: 1}}>
          <StatusBar backgroundColor={'transparent'} translucent={true} />
          <Container />
        </View>
      </PersistGate>
    </Provider>
  );
}
