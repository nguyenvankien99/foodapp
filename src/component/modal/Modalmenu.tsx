import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import images from '../../res/images';
import sizes from '../../res/sizes';

import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Entypo';
import IconsF from 'react-native-vector-icons/FontAwesome';
import Ico from 'react-native-vector-icons/Fontisto';

import Ic from 'react-native-vector-icons/MaterialIcons';

const Modalmenu = ({visible, close, navigation}: any) => {
  const utilities = [
    {
      id: 1,
      name: 'Home',
      icon: 'home',
      navigation: 'Home',
    },
    {
      id: 2,
      name: 'My Profile',
      icon: 'user',
      navigation: 'Profile',
    },
    {
      id: 3,
      name: 'My Favourities',
      icon: 'heart',
      navigation: 'Favorite',
    },
    {
      id: 4,
      name: 'Cart',
      icon: 'shopping-cart',
      navigation: 'Shopping',
    },
    {
      id: 5,
      name: 'Notification',
      icon: 'notifications',
      navigation: 'Notification',
    },
    {
      id: 6,
      name: 'Add Cards',
      icon: 'credit-card',
    },
  ];
  const setting = [
    {
      id: 7,
      name: 'Settings',
      icon: 'settings',
    },
    {
      id: 8,
      name: 'About us',
      icon: 'information-circle',
    },
    {
      id: 9,
      name: 'Privacy Policy',
      icon: 'security',
    },
    {
      id: 10,
      name: 'Logout',
      icon: 'logout',
    },
  ];
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}: {item: any; index: any}) => {
    const backgroundColor = item.id === selectedId ? '#ECEFF1' : 'transparent';
    const fontWeight = item.id === selectedId ? '600' : '400';
    const fontSize = item.id === selectedId ? 20 : 18;
    const color = item.id === selectedId ? 'red' : 'black';
    const borderRadius = item.id === selectedId ? 50 : 0;

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setSelectedId(item.id);
            navigation.navigate(item.navigation);
          }}
          onPressOut={close}
          style={[
            styles.item,
            {backgroundColor: backgroundColor, borderRadius: borderRadius},
          ]}>
          {item.icon === 'home' && (
            <Icon
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}
          {item.icon === 'user' && (
            <IconsF
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}
          {item.icon === 'heart' && (
            <Icon
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}
          {item.icon === 'shopping-cart' && (
            <IconsF
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}
          {item.icon === 'notifications' && (
            <Icons
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}
          {item.icon === 'credit-card' && (
            <Ico
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}

          <Text
            style={{
              marginLeft: sizes._15sdp,
              color: color,
              fontSize: fontSize,
              fontWeight: fontWeight,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderItem1 = ({item}: {item: any; index: any}) => {
    const backgroundColor = item.id === selectedId ? '#ECEFF1' : 'transparent';
    const coloricons = item.id === selectedId ? '#D20B2E' : '#676565';
    const fontWeight = item.id === selectedId ? '600' : '400';
    const fontSize = item.id === selectedId ? 20 : 18;
    const color = item.id === selectedId ? 'red' : 'black';
    const borderRadius = item.id === selectedId ? 50 : 0;

    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            setSelectedId(item.id);
          }}
          onPressOut={close}
          style={[
            styles.item,
            {backgroundColor: backgroundColor, borderRadius: borderRadius},
          ]}>
          {item.icon === 'logout' && (
            <Ic
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}
          {item.icon === 'security' && (
            <Ic
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}

          {item.icon === 'information-circle' && (
            <Icons
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}
          {item.icon === 'settings' && (
            <Icons
              name={item.icon}
              color={color}
              size={fontSize}
              style={styles.icon}
            />
          )}
          <Text
            style={{
              marginLeft: sizes._15sdp,
              color: color,
              fontSize: fontSize,
              fontWeight: fontWeight,
            }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderContent = () => (
    <>
      <View style={styles.profile}>
        <Image source={images.bbi} style={styles.img} />
        <View style={{justifyContent: 'center', marginLeft: '10%'}}>
          <Text style={styles.name}>Nguyễn Văn Kiên</Text>
          <Text style={styles.email}>Kienvipaz99@gmail.com</Text>
        </View>
      </View>
      <View style={styles.strikethrough}></View>

      <FlatList
        data={null}
        renderItem={null}
        ListFooterComponent={scollview}></FlatList>
    </>
  );
  const scollview = () => {
    return (
      <View style={{marginTop: sizes._20sdp}}>
        <FlatList
          listKey={'ássd'}
          data={utilities || []}
          renderItem={renderItem}
          extraData={selectedId}
          keyExtractor={(item, index) =>
            item && item.id ? `${item?.id?.toString()}` : index?.toString()
          }
        />
        <View style={styles.strikethrough}></View>
        <FlatList
          listKey={'ád'}
          style={{marginBottom: sizes._20sdp}}
          data={setting || []}
          renderItem={renderItem1}
          extraData={selectedId}
          keyExtractor={(item, index) =>
            item && item.id ? `${item?.id?.toString()}` : index?.toString()
          }
        />
      </View>
    );
  };

  return (
    <View>
      <Modal
        visible={visible}
        animationType="none"
        transparent={true}
        statusBarTranslucent={true}>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={close}>
            <View style={{zIndex: 0, flex: 1, height: '100%', width: '100%'}} />
          </TouchableWithoutFeedback>

          <View style={styles.content}>{renderContent()}</View>
        </View>
      </Modal>
    </View>
  );
};
export default Modalmenu;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.68)',
  },
  content: {
    width: '75%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    height: '100%',
  },
  indicator: {
    height: sizes._5sdp,
    width: sizes._50sdp,
    backgroundColor: '#000000',
    opacity: 0.15,

    alignSelf: 'center',
  },
  profile: {
    marginTop: sizes._50sdp,
    marginLeft: sizes._20sdp,
    flexDirection: 'row',
  },
  img: {
    height: sizes._60sdp,
    width: sizes._60sdp,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'blue',
  },
  name: {
    fontSize: sizes._font_size_max_max,
    fontWeight: '600',
  },
  email: {
    fontSize: sizes._font_size_big_big,
  },
  strikethrough: {
    height: 1,
    width: '90%',
    backgroundColor: 'black',
    marginHorizontal: 15,
    marginTop: sizes._30sdp,
  },
  item: {
    height: sizes._50sdp,
    width: '90%',

    marginLeft: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: sizes._15sdp,
  },
});
