import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from '../../Components';

const Splash = () => {
  return (
    <View style={styles.main}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
