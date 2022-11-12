import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import sizes from '../../res/sizes';
import Icon from 'react-native-vector-icons/Ionicons';
import images from '../../res/images';
import OTPField from 'react-native-otp-field';

const OTP = ({navigation}: any) => {
  const [OTP, setOTP] = useState<any>('');

  return (
    <View style={styles.container}>
      <ImageBackground source={images.bg} style={{flex: 1}}>
        <View style={styles.tabBar}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-back"
            size={30}
            color={'white'}
            style={styles.iconback}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '12%',
          }}>
          <Image
            source={images.ForgotPassword}
            style={{height: 200, width: 200}}
          />
          <Text style={styles.textfp}>Verification</Text>
          <Text style={styles.text}>Enter you verification code</Text>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <OTPField
              containerStyle={{
                width: '80%',

                marginLeft: '10%',
                marginTop: sizes._25sdp,
              }}
              textFieldStyle={{color: 'white', fontSize: 18}}
              onChange={(val: any) => setOTP(val)}
              length={4}
              value={OTP}
            />
          </View>
          <TouchableOpacity
            style={styles.stybtn}
            onPress={() => {
              navigation.navigate('ChangePass');
            }}>
            <Text style={styles.textbtn}>Xác nhận OTP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default OTP;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBar: {
    height: sizes._50sdp,
    width: '100%',
    marginTop: sizes._40sdp,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconback: {
    marginLeft: sizes._10sdp,
  },
  inputphone: {
    borderColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: '85%',
    marginTop: sizes._15sdp,
    fontSize: 20,
    color: 'white',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  textbtn: {
    color: 'white',
    fontSize: 22,
  },
  stybtn: {
    height: 60,
    width: '40%',
    marginTop: sizes._30sdp,
    backgroundColor: '#686868',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
  },
  textfp: {
    color: 'white',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
  },
});
