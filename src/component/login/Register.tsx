import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import sizes from '../../res/sizes';
import {create} from 'react-test-renderer';
import {Checkbox} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {addData, selectData} from '../../redux/state/dataState';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Register({navigation}: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cfpass, setCfpass] = useState('');
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const user = {
    fullname: name,
    emailorphone: email,
    pass: pass,
  };

  const datas: any = useSelector(selectData);
  const [users, setUser] = useState<any>(datas.addData);
  console.log('====================================');
  console.log(datas);
  console.log('====================================');
  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.tabBar}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color={'black'}
          style={styles.iconback}
        />
      </View>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <Text style={styles.text}>Register</Text>
        <Text
          style={{fontSize: sizes._font_size_max_max, marginTop: sizes._10sdp}}>
          Create your new account
        </Text>
        <TextInput
          style={styles.user}
          onChangeText={(name: any) => {
            setName(name);
          }}
          placeholder={'Full Name'}
          selectionColor={'black'}
          value={name}
        />
        <TextInput
          style={styles.user}
          onChangeText={(email: any) => {
            setEmail(email);
          }}
          placeholder={'Email or Phone'}
          selectionColor={'black'}
          value={email}
        />
        <TextInput
          style={styles.user}
          onChangeText={(pass: any) => {
            setPass(pass);
          }}
          placeholder={'Password'}
          selectionColor={'black'}
          value={pass}
        />
        <TextInput
          style={styles.user}
          onChangeText={(cfpass: any) => {
            setCfpass(cfpass);
          }}
          placeholder={'Confirm Password'}
          selectionColor={'black'}
          value={cfpass}
        />
        <View style={styles.checkbox}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            color={'#ED1C24'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text style={{fontSize: 18, color: 'black', marginTop: sizes._6sdp}}>
            i agree to your{' '}
            <Text style={{color: '#ED1C24'}}>privacy policy</Text>
            {''} and <Text style={{color: '#ED1C24'}}>terms & conditions</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={styles.submit}
          onPress={() => {
            if (checked === true) {
              dispatch(addData(user));
              navigation.navigate('Login');
            }
          }}>
          <Text style={styles.login}>Sign up </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: sizes._15sdp,
          }}>
          <Text style={{color: '#898989', fontSize: 18}}>
            Already an account,
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#ED1C24', fontSize: 18}}>{''}login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {color: '#ED1C24', fontSize: sizes._font_size_Slap, fontWeight: '700'},
  user: {
    height: sizes._50sdp,
    borderRadius: sizes._10sdp,
    marginTop: sizes._30sdp,
    paddingLeft: sizes._15sdp,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D8D8D8',
    width: '80%',
  },
  checkbox: {
    flexDirection: 'row',
    marginRight: sizes._10sdp,
    marginTop: sizes._15sdp,
    width: '80%',
  },
  submit: {
    marginTop: sizes._10sdp,
    width: '80%',
    height: sizes._50sdp,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: sizes._10sdp,
    backgroundColor: '#ED1C24',
  },
  login: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
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
});
