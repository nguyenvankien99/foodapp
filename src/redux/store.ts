import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import dataState from './state/dataState';

const reducers = combineReducers({
  data: dataState,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  //@ts-ignore
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;
