import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useState} from 'react';
import ButtonTabbar from './ButtonTabbar';
import Icon from 'react-native-vector-icons/Ionicons';
import sizes from '../res/sizes';
import Modalmenu from '../component/modal/Modalmenu';
import images from '../res/images';
interface Props {
  navigation: any;
}
const Home1 = (props: Props) => {
  const [showmenu, setShowmenu] = useState(false);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View
        style={{
          marginTop: 40,
        }}>
        <Icon
          style={{marginLeft: sizes._10sdp}}
          name="menu"
          color={'black'}
          size={40}
          onPress={() => {
            setShowmenu(true);
          }}
        />
      </View>

      <ButtonTabbar />

      <Modalmenu
        visible={showmenu}
        close={() => setShowmenu(false)}
        navigation={props.navigation}
      />
    </View>
  );
};

export default Home1;
const styles = StyleSheet.create({
  avatar: {
    height: sizes._60sdp,
    width: sizes._60sdp,
    marginLeft: '69%',
  },
  img: {
    height: sizes._60sdp,
    width: sizes._60sdp,

    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'blue',
  },
});
