import {View, Text} from 'react-native';

import React, {useState} from 'react';
import UploadAvatar from '../profile/UploadAvatar';

import {useSelector, useDispatch} from 'react-redux';
import {selectData} from '../../redux/state/dataState';
import CardProfile from '../card/CardProfile';

const Profile = () => {
  const data: any = useSelector(selectData);

  const user = data.login;

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <UploadAvatar name={user.usernames} email={'Kienvipaz99@gmail.com'} />
      <CardProfile />
    </View>
  );
};
export default Profile;
