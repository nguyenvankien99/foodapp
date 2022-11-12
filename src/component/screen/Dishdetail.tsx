import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/AntDesign';
import Ico from 'react-native-vector-icons/FontAwesome5';
import {useSelector, useDispatch} from 'react-redux';
import dataState, {
  addFavorite,
  addShoping,
  deleteFavorite,
  selectData,
} from '../../redux/state/dataState';

import sizes from '../../res/sizes';
import {Card} from 'react-native-paper';
import images from '../../res/images';
interface Props {
  navigation: any;
  route: any;
}

const Dishdetail = (props: Props) => {
  const {img, name, start, price, time, mota, favorite} = props.route.params;
  const [count, setCount] = useState(1);
  const [heart, setheart] = useState<any>(false);

  const dispatch = useDispatch();
  const data: any = useSelector(selectData);

  const gia = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  const add = {
    img,
    name,
    start,
    price,
    time,
    mota,
    count,
    heart,
  };
  const set = () => {
    setheart(!heart);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 40,
        }}>
        <Icon
          onPress={() => props.navigation.goBack()}
          name="arrow-back"
          size={30}
          color={'black'}
          style={styles.iconback}
        />

        {heart === false ? (
          <TouchableOpacity
            onPress={set}
            onPressOut={() => {
              if (data.add.find((item: any) => item.name === add.name)) {
                ToastAndroid.show(
                  'Món ăn đã có trong mục yêu thích',
                  ToastAndroid.SHORT,
                );
              } else {
                dispatch(addFavorite(add));
                ToastAndroid.show(
                  'Thêm thành công món ăn vào mục yêu thích',
                  ToastAndroid.SHORT,
                );
              }
            }}>
            <Image source={images.heart} style={{height: 40, width: 40}} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={set}
            onPressOut={() => {
              dispatch(deleteFavorite(name));
              ToastAndroid.show(
                'Xóa thành công món ăn vào mục yêu thích',
                ToastAndroid.SHORT,
              );
            }}>
            <Image source={images.heart1} style={{height: 40, width: 40}} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{alignItems: 'center'}}>
        <Image source={img} style={{height: 300, width: 300}} />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icons
            name="minuscircle"
            size={30}
            color={'red'}
            onPress={() =>
              setCount(prevCount => (prevCount <= 0 ? 0 : prevCount - 1))
            }
          />
          <View style={styles.number}>
            <Text style={{color: 'red', fontSize: 25}}>{count}</Text>
          </View>
          <Icons
            onPress={() => setCount(prevCount => prevCount + 1)}
            name="pluscircle"
            size={30}
            color={'red'}
            style={{marginLeft: 10}}
          />
        </View>
      </View>
      <Card
        elevation={5}
        style={{
          margin: sizes._14sdp,
          borderRadius: sizes._15sdp,
        }}>
        <View style={{marginLeft: 15}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.name}>{name}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={images.start}
                style={{height: 20, width: 20, tintColor: '#FF9900'}}
              />
              <Text style={styles.start}>{start}</Text>
            </View>
          </View>

          <Text style={styles.mota}>{mota}</Text>

          <View
            style={{marginTop: 15, flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontSize: 20, color: 'black'}}>Delivery Time</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 50,
              }}>
              <Icons name="clockcircleo" color={'red'} size={25} />
              <Text style={styles.time}>{time} mins</Text>
            </View>
          </View>
          <Text style={{fontSize: 20, color: 'black', marginTop: 25}}>
            Total Price
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Text style={styles.price}>{gia} VNĐ</Text>
            <View style={styles.shopping}>
              <Ico
                name="shopping-cart"
                color={'white'}
                size={25}
                onPress={() => {
                  if (
                    data.addShoping.find((item: any) => item.name === add.name)
                  ) {
                    ToastAndroid.show(
                      'Món ăn đã có trong giỏ hàng',
                      ToastAndroid.SHORT,
                    );
                  } else {
                    if (count === 0) {
                      ToastAndroid.show(
                        'Bạn chưa chọn số lượng món',
                        ToastAndroid.SHORT,
                      );
                    } else {
                      dispatch(
                        addShoping({
                          img,
                          name,
                          start,
                          price,
                          time,
                          mota,
                          count,
                          favorite,
                        }),
                      );
                      props.navigation.navigate('Shopping');
                    }
                  }
                }}
              />
            </View>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default Dishdetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  iconback: {
    marginLeft: sizes._10sdp,

    width: '80%',
  },
  number: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 30,

    marginLeft: 10,
  },
  name: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    width: '85%',
  },
  start: {
    marginLeft: 5,
    fontSizeL: 20,
    color: 'black',
  },
  mota: {
    fontSize: 20,
    marginTop: 15,
  },
  time: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    marginLeft: 8,
  },
  price: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    width: '80%',
  },
  shopping: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
