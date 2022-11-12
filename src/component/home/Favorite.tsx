import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import dataState, {
  addShoping,
  selectData,
  deleteitemShoping,
} from '../../redux/state/dataState';
import {Card} from 'react-native-paper';
import sizes from '../../res/sizes';
import images from '../../res/images';

const Favorite = ({navigation}: any) => {
  const data: any = useSelector(selectData);

  const dispatch = useDispatch();
  const favorite = data.add;

  const RenderItem = ({item, index}: any) => {
    const gia = item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    return (
      <View>
        <Card elevation={5} style={styles.card}>
          <View style={styles.item}>
            <Image source={item.img} style={styles.image} />
            <View style={{marginLeft: 15}}>
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <Text>{item.mota}</Text>
              <View style={styles.item}>
                <Text style={styles.gia}>{gia} VNĐ</Text>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          style={{marginTop: 20}}
          data={favorite || []}
          renderItem={RenderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) =>
            item && item.id ? `${item?.id?.toString()}` : index?.toString()
          }
        />
      </View>

      {/* <View
          style={{
            flex: 1,
            backgroundColor: '#FFFFFF',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 100,
          }}>
          <Image source={images.chibi} />
          <Text style={{color: 'black', fontSize: 20, fontWeight: '700'}}>
            Bạn chưa có đơn hàng nào !!!
          </Text>
          <TouchableOpacity
            style={[styles.btntt, {width: 150, marginTop: 15}]}
            onPress={() => navigation.navigate('Home')}>
            <Text style={{fontSize: 20, fontWeight: '600', color: '#FFFFFF'}}>
              Đặt ngay
            </Text>
          </TouchableOpacity>
        </View> */}
    </View>
  );
};
export default Favorite;
const styles = StyleSheet.create({
  name: {
    width: '68%',
    fontSize: 25,
    fontWeight: '700',
  },
  item: {flexDirection: 'row', alignItems: 'center'},
  image: {height: 130, width: 130},
  card: {
    margin: sizes._14sdp,
    borderRadius: sizes._15sdp,
    width: '90%',
  },
  count: {color: 'red', marginLeft: 5, fontSize: 20},
  gia: {
    fontSize: 18,
    color: 'black',
  },
  texttt: {color: 'white', fontSize: 15, fontWeight: '700'},
  btntt: {
    height: 50,
    width: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
