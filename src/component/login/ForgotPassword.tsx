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

const ForgotPassword = ({navigation}: any) => {
  const [phone, setPhone] = useState<any>(Number);
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
          <Image source={images.FG} style={{height: 200, width: 200}} />
          <Text style={styles.textfp}>Forgot Password</Text>
          <Text style={styles.text}>Số điện thoại hoặc email đăng ký</Text>
          <TextInput
            style={styles.inputphone}
            value={phone}
            placeholder={'Email or phone'}
            onChangeText={value => {
              setPhone(value);
            }}
            selectionColor={'white'}></TextInput>
          <TouchableOpacity
            style={styles.stybtn}
            onPress={() => navigation.navigate('OTP')}>
            <Text style={styles.textbtn}>Gửi yêu cầu</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ForgotPassword;
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
