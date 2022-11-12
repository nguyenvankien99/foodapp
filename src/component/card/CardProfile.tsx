import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Card} from 'react-native-paper';

const CardProfile = () => {
  return (
    <View>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Card elevation={12} style={styles.card}>
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>My Oders</Text>
          </TouchableOpacity>
        </Card>
        <Card elevation={12} style={styles.card}>
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>My Addresses</Text>
          </TouchableOpacity>
        </Card>
        <Card elevation={12} style={styles.card}>
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>My Favorite</Text>
          </TouchableOpacity>
        </Card>
        <Card elevation={12} style={styles.card}>
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: 'center',
            }}>
            <Text style={styles.text}>Coupons</Text>
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
};

export default CardProfile;
const styles = StyleSheet.create({
  text: {color: 'black', fontSize: 20, marginLeft: 20, fontWeight: '600'},
  card: {borderRadius: 16, width: '95%', marginTop: 20},
});
