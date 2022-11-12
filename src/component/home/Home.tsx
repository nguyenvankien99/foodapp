import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Button,
} from 'react-native';
import React, {useState, useRef} from 'react';

import {useSelector} from 'react-redux';
import {selectData} from '../../redux/state/dataState';
import Icons from 'react-native-vector-icons/AntDesign';
import Icont from 'react-native-vector-icons/MaterialIcons';
import Iconsnack from 'react-native-vector-icons/MaterialCommunityIcons';
import Carousel from 'react-native-snap-carousel';
import {Card} from 'react-native-paper';
import images from '../../res/images';
import sizes from '../../res/sizes';
import RBSheet from 'react-native-raw-bottom-sheet';
import Fillters from '../modal/Fillters';
export default function Home({navigation}: any) {
  const refRBSheet = useRef();
  const datas: any = useSelector(selectData);
  const snap = null;

  const [search, setSearch] = useState();
  const data = [
    {
      id: 1,
      icon: 'fastfood',
      name: 'Fast food',
    },
    {
      id: 2,
      icon: 'emoji-food-beverage',
      name: 'Drink',
    },
    {
      id: 3,
      icon: 'food-drumstick-outline',
      name: 'Snack',
    },
  ];
  const [dataFastfood, setDataFastfood] = useState([
    {
      id: 1,
      img: images.fastfood1,
      price: 30000,
      name: 'Bò',
      start: 3,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 2,
      img: images.fast2,
      price: 15000,
      name: 'Hamburger',
      start: 4,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 3,
      img: images.fast3,
      price: 20000,
      name: 'Thịt chó xào tỏi',
      start: 5,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 4,
      img: images.fast4,
      price: 100000,
      name: 'Piza',
      start: 1,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 5,
      img: images.fastfood5,
      price: 25000,
      name: 'Cá sốt cà chua',
      start: 2,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
  ]);
  const [dataDrink, setDataDrink] = useState([
    {
      id: 1,
      img: images.drink1,
      price: 30000,
      name: 'Nước cam',
      start: 3,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 2,
      img: images.drink2,
      price: 15000,
      name: 'Pepsi đớ',
      start: 4,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 3,
      img: images.drink3,
      price: 20000,
      name: 'Tranhs tuyết',
      start: 5,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 4,
      img: images.drink4,
      price: 300000,
      name: 'Nước này có độc',
      start: 4,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 5,
      img: images.drink5,
      price: 30000,
      name: 'Sinh tố xoài',
      start: 3,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
  ]);
  const [dataSnack, setDataSnack] = useState([
    {
      id: 1,
      img: images.snack1,
      price: 10000,
      name: 'Snack Lays',
      start: 5,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 2,
      img: images.snack2,
      price: 15000,
      name: 'Snack Tosto',
      start: 4,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
    {
      id: 3,
      img: images.snack3,
      price: 15000,
      name: 'Snack Kettle',
      start: 5,
      time: 25,
      mota: 'Cái này ăn như cứt',
    },
  ]);
  const renderItemff = ({item, index}: any) => {
    return (
      <Card
        elevation={5}
        style={{
          margin: sizes._14sdp,
          borderRadius: sizes._15sdp,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Dishdetail', {
              img: item.img,
              name: item.name,
              start: item.start,
              price: item.price,
              time: item.time,
              mota: item.mota,
            })
          }
          style={{
            height: 300,
            width: 200,
            marginBottom: 20,

            alignItems: 'center',
          }}>
          <Image
            source={item.img}
            style={{height: '50%', width: '75%', marginTop: 20}}
            resizeMode={'cover'}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
            }}>
            <Image
              source={images.start}
              style={{
                height: 20,
                width: 20,
                tintColor: '#FF9900',
              }}
            />
            <Text
              style={{
                marginLeft: 10,
                fontSize: 20,
                color: 'black',
                fontWeight: '600',
              }}>
              {item.start}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 25,
              fontWeight: '600',
              color: 'black',
              marginTop: 15,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              marginTop: 15,
              color: 'red',
              fontSize: 20,
              fontWeight: '700',
            }}>
            {item.price} VNĐ
          </Text>
        </TouchableOpacity>
      </Card>
    );
  };
  const [selectedId, setSelectedId] = useState(1);

  const RenderItem = ({item}: {item: any; index: any}) => {
    const color = item.id === selectedId ? 'white' : 'black';
    const backgroundColor = item.id === selectedId ? 'red' : '#F0F0F0';
    return (
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            marginRight: 30,
            backgroundColor: backgroundColor,
            height: 50,
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => setSelectedId(item.id)}>
          {item.icon === 'fastfood' && (
            <Icont name={item.icon} color={color} size={30} />
          )}
          {item.icon === 'emoji-food-beverage' && (
            <Icont name={item.icon} color={color} size={30} />
          )}
          {item.icon === 'food-drumstick-outline' && (
            <Iconsnack name={item.icon} color={color} size={30} />
          )}
          <Text style={{fontSize: 20, marginLeft: 10, color: color}}>
            {item.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{marginLeft: 15}}>
        <Text style={styles.textfind}>Find your</Text>
        <Text style={styles.textfind}>
          <Text style={{fontWeight: '700'}}>Best Food </Text>here
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          alignItems: 'center',

          flexDirection: 'row',
        }}>
        <TextInput
          style={styles.input}
          onChangeText={(data: any) => {
            setSearch(data);
          }}
          placeholder={'Search food'}
          selectionColor={'black'}
          value={search}
        />
        <Icons
          onPress={() =>
            //@ts-ignore
            refRBSheet.current.open()
          }
          name="menuunfold"
          color={'black'}
          size={30}
          style={{marginLeft: 20}}
        />
      </View>
      <View style={{marginTop: 30}}>
        <FlatList
          data={data || []}
          horizontal={true}
          renderItem={RenderItem}
          extraData={selectedId}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) =>
            item && item.id ? `${item?.id?.toString()}` : index?.toString()
          }
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text
            style={{
              color: 'red',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 10,
              paddingLeft: '80%',
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        {selectedId === 1 && (
          <FlatList
            data={dataFastfood || []}
            horizontal={true}
            renderItem={renderItemff}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) =>
              item && item.id ? `${item?.id?.toString()}` : index?.toString()
            }
          />
        )}
        {selectedId === 2 && (
          <FlatList
            data={dataDrink || []}
            horizontal={true}
            renderItem={renderItemff}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) =>
              item && item.id ? `${item?.id?.toString()}` : index?.toString()
            }
          />
        )}
        {selectedId === 3 && (
          <>
            <FlatList
              data={dataSnack || []}
              horizontal={true}
              renderItem={renderItemff}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) =>
                item && item.id ? `${item?.id?.toString()}` : index?.toString()
              }
            />
          </>
        )}
      </View>

      <RBSheet
        //@ts-ignore
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <Fillters />
      </RBSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textfind: {
    fontSize: 30,
    color: '#000',
  },
  input: {
    height: 45,
    width: '75%',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 15,
    paddingLeft: 10,
    backgroundColor: '#F0F0F0',
  },
});
