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

const Shopping = ({navigation}: any) => {
  const data: any = useSelector(selectData);
  const datashoping = data.addShoping;
  const dispatch = useDispatch();

  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  const [tongtien, setTongtien] = useState<any>();
  const [name, setName] = useState<any>();
  const datas: any = [];
  const RenderItem = ({item, index}: any) => {
    setName(item.name);
    const gia = item.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    const starts = item.start;
    let arr: any = [];
    let sum: any = 0;
    {
      datashoping.map((item: any) => {
        let tongtienmon = item.price * item.count;
        arr.push(tongtienmon);
      });
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        const tien = sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        setTongtien(tien);
      }
    }
    return (
      <View>
        <Card elevation={5} style={styles.card}>
          <View style={styles.item}>
            <Image source={item.img} style={styles.image} />
            <View style={{marginLeft: 15}}>
              <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.count}>x{item.count}</Text>
              </View>
              <Text>{item.mota}</Text>
              <View style={styles.item}>
                <Text style={styles.gia}>{gia} VNĐ</Text>
                <View
                  style={{
                    marginLeft: 15,

                    flexDirection: 'row',
                  }}>
                  {maxRating.map(item => {
                    return (
                      <Image
                        style={{height: 15, width: 15}}
                        source={item <= starts ? images.star : images.start}
                      />
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </Card>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      {datashoping.length !== 0 ? (
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <FlatList
            key={'shoping'}
            style={{marginTop: 20}}
            data={datashoping || []}
            renderItem={RenderItem}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) =>
              item && item.id ? `${item?.id?.toString()}` : index?.toString()
            }
          />

          <View style={{marginBottom: 10, justifyContent: 'center'}}>
            <Card style={styles.card}>
              <View style={{marginLeft: 15, padding: 10}}>
                <Text style={{color: 'black', fontSize: 20}}>
                  Delivery Time
                </Text>
                <Text style={{color: 'black', fontSize: 15}}>Total Price</Text>
                <View style={styles.item}>
                  <Text style={{color: 'black', fontSize: 25, width: '65%'}}>
                    {tongtien} VNĐ
                  </Text>
                  <TouchableOpacity
                    style={styles.btntt}
                    onPress={() => {
                      dispatch(deleteitemShoping(name));
                      ToastAndroid.show(
                        'Thanh toán thành công',
                        ToastAndroid.SHORT,
                      );
                    }}>
                    <Text style={styles.texttt}>Thanh toán</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Card>
          </View>
        </View>
      ) : (
        <View
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
        </View>
      )}
    </View>
  );
};
export default Shopping;
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
