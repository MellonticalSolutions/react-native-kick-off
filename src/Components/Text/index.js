import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TYPO} from '../../Styles';

const CustomText = ({children, textStyle}) => {
  return <Text style={[styles.text, textStyle]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: TYPO.FONT_FAMILY_REGULAR,
    fontSize: TYPO.FONT_SIZE_30,
  },
});
