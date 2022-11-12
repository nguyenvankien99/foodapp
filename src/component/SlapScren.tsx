import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {create} from 'react-test-renderer';
import images from '../res/images';
import sizes from '../res/sizes';

const SlapScren = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 5000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={images.logogalu} style={{height: 300, width: 330}} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161C22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: sizes._font_size_Slap,
    color: '#5ED5A8',
    fontFamily: 'Poppins-Bold',
  },
});
//aaa
export default SlapScren;
