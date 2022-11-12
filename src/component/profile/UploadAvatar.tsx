import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {Dimensions} from 'react-native';

import React, {useState} from 'react';

import ImagePicker from 'react-native-image-crop-picker';
import images from '../../res/images';
import {useSelector, useDispatch} from 'react-redux';
import {selectData} from '../../redux/state/dataState';
export default function UploadAvatar({name, email, numberphone}: any) {
  const [avatar, setAvatar] = useState(
    'https://mern-nest-ecommerce.herokuapp.com/profile.png',
  );
  const uploadImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.8,
      includeBase64: true,
    }).then((image: any) => {
      setAvatar('data:image/jpeg;base64,' + image.data);
    });
  };

  return (
    <View>
      <ImageBackground
        source={images.bgavatar}
        style={{
          height: 200,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginTop: 10,

            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={uploadImage}>
            <Image
              source={{
                uri:
                  avatar === ''
                    ? 'https://mern-ecommerce-stores.herokuapp.com/profile.png'
                    : avatar,
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 20,
                resizeMode: 'contain',
                borderWidth: 3,
                borderColor: '#FFFFFF',
              }}
            />
            <></>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 20}}>{name}</Text>
          <Text style={{color: 'white', fontSize: 20}}>{email}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
