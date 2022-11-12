import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface componentNameProps {}

const Fillters = (props: componentNameProps) => {
  const [toValue, setToValue] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <View style={styles.container}>
      <Text> value: {value}</Text>
      <Text>to value: {toValue}</Text>
      <View style={{flex: 1}}></View>
    </View>
  );
};

export default Fillters;

const styles = StyleSheet.create({
  container: {},
});
