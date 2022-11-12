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
import Icon from 'react-native-vector-icons/FontAwesome5';
import BackIcon from 'react-native-vector-icons/Ionicons';
import images from '../../res/images';

const ChangePass = ({navigation}: any) => {
  const [password, setPassWord] = useState<any>('');
  const [confirmpassword, setConfirmpassword] = useState<any>('');
  const [showPass, setShow] = useState(true);
  const [showPasscf, setShowcf] = useState(true);

  const showpasss = () => {
    setShow(!showPass);
  };
  const showpasscf = () => {
    setShowcf(!showPasscf);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={images.bg} style={{flex: 1}}>
        <View style={styles.tabBar}>
          <BackIcon
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
          <Text style={styles.textfp}>New Pass Word</Text>
          <Text style={styles.text}>Create your new password</Text>
          <View style={styles.user}>
            <TextInput
              style={{width: '85%', fontSize: 20, color: 'white'}}
              onChangeText={(pass: any) => {
                setPassWord(pass);
              }}
              placeholder={'Password'}
              selectionColor={'white'}
              secureTextEntry={showPass}
              value={password}></TextInput>
            <TouchableOpacity onPress={showpasss}>
              {showPass === false && (
                <Icon name="eye" color={'black'} size={sizes._25sdp} />
              )}
              {showPass === true && (
                <Icon name="eye-slash" color={'black'} size={sizes._25sdp} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.user}>
            <TextInput
              style={{width: '85%', fontSize: 20, color: 'white'}}
              onChangeText={(passconfrm: any) => {
                setConfirmpassword(passconfrm);
              }}
              placeholder={'ConfirmPassword'}
              selectionColor={'white'}
              secureTextEntry={showPasscf}
              value={confirmpassword}></TextInput>
            <TouchableOpacity onPress={showpasscf}>
              {showPasscf === false && (
                <Icon name="eye" color={'black'} size={sizes._25sdp} />
              )}
              {showPasscf === true && (
                <Icon name="eye-slash" color={'black'} size={sizes._25sdp} />
              )}
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.stybtn}
            onPress={() => navigation.navigate('ButtonTabbar')}>
            <Text style={styles.textbtn}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ChangePass;
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
  user: {
    height: sizes._50sdp,
    width: '80%',
    borderRadius: sizes._35sdp,
    borderWidth: sizes._1sdp,
    borderColor: '#708090',
    marginTop: sizes._30sdp,
    paddingLeft: sizes._15sdp,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
