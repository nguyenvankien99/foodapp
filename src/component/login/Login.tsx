import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  BackHandler,
  ImageBackground,
  ToastAndroid,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import sizes from '../../res/sizes';
import images from '../../res/images';
import {Button, Checkbox} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import dataState, {
  addData,
  login,
  selectData,
} from '../../redux/state/dataState';
const Login = ({navigation}: any) => {
  const data: any = useSelector(selectData);
  const [datas, setDatas] = useState<any>(data.login);
  const [userName, setUserName] = useState(datas.usernames);
  const [passWord, setPassWord] = useState(datas.pass);
  const [showPass, setShow] = useState(true);
  const [checked, setChecked] = useState(false);
  const user = {
    usernames: userName,
    pass: passWord,
  };
  const dataUsers = data.dataUser;

  const dispatch = useDispatch();
  const showpasss = () => {
    setShow(!showPass);
  };

  const backbuton = () => {
    BackHandler.exitApp();
    return true;
  };
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', backbuton);
  // }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={images.background}
        style={{flex: 1, height: '100%', width: '100%'}}>
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          <Text style={styles.text}>Đăng Nhập</Text>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TextInput
              style={styles.user}
              onChangeText={(user: any) => {
                setUserName(user);
              }}
              placeholder={'User Name'}
              selectionColor={'black'}
              autoComplete={'username'}
              value={userName}
            />
            <View style={styles.user}>
              <TextInput
                style={{width: '85%'}}
                onChangeText={(pass: any) => {
                  setPassWord(pass);
                }}
                placeholder={'Pass word'}
                selectionColor={'black'}
                secureTextEntry={showPass}
                value={passWord}></TextInput>
              <TouchableOpacity onPress={showpasss}>
                {showPass === false && (
                  <Icon name="eye" color={'black'} size={sizes._25sdp} />
                )}
                {showPass === true && (
                  <Icon name="eye-slash" color={'black'} size={sizes._25sdp} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.checkbox}>
              <Text style={{fontSize: 18, color: 'black'}}>Ghi nhớ</Text>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                color={'#ED1C24'}
                onPress={() => {
                  setChecked(!checked);
                }}
              />
            </View>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => {
                if (checked === true) {
                  dispatch(login(user));

                  dataUsers.map((item: any) => {
                    if (
                      item.emailorphone === userName &&
                      item.pass === passWord
                    ) {
                      navigation.navigate('Home1');
                    } else {
                      console.log('sai pass');
                    }
                  });
                } else {
                  dataUsers.map((item: any) => {
                    if (
                      item.emailorphone === userName &&
                      item.pass === passWord
                    ) {
                      navigation.navigate('Home1');
                    } else {
                      ToastAndroid.show(
                        'Thông tin tài khoản hoặc mật khẩu không chính xác',
                        ToastAndroid.SHORT,
                      );
                    }
                  });
                }
              }}>
              <Text style={styles.login}>Đăng nhập</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: sizes._20sdp,
                width: '75%',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ForgotPassword');
                }}>
                <Text style={{color: 'black', fontSize: 20}}>
                  Quên mật khẩu?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={{color: 'black', fontSize: 20}}>Đăng ký </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    fontSize: sizes._font_size_Slap,
    color: 'white',
    fontFamily: 'Poppins-Bold',
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
  showPass: {
    height: sizes._35sdp,
    width: sizes._35sdp,
    marginLeft: sizes._20sdp,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '50%',
  },
  submit: {
    marginTop: sizes._10sdp,
    width: '80%',
    height: sizes._50sdp,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: '#708090',
  },
  login: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
