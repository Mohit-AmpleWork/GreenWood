import React from 'react';
import {Text, View, TextInput, KeyboardTypeOptions} from 'react-native';
import { s , ms} from 'react-native-size-matters';
import colors from '../../themes/colors';

const EmailInput = ({
  keyboardType,
  text,
}: {
  keyboardType: KeyboardTypeOptions;
  text: string;
}) => {
  return (
    <View>
      <Text style={{color: colors.labelColor, marginTop: 26}}>{text}</Text>
      <TextInput
        style={{
          borderBottomColor: colors.inputBorder,
          borderWidth: 1,
          width: 300,
          borderTopColor: colors.white,
          borderLeftColor: colors.white,
          borderRightColor: colors.white,
          color: colors.black,
          marginTop: 10,
          padding: 4
        }}
        accessible={false} keyboardType={keyboardType}></TextInput>
    </View>
  );
};

const CheckoutInput = ({
  keyboardType,
  text,
  width
}: {
  keyboardType: KeyboardTypeOptions;
  text: string;
  width: number;
}) => {
  return (
    <View>
      <Text style={{color: colors.labelColor, marginTop: 26}}>{text}</Text>
      <TextInput
        style={{
          width: width,
          height: 50,
          backgroundColor: colors.white,
          color: colors.black,
          marginTop: 10,
          padding: 4
        }}
        accessible={false} keyboardType={keyboardType}></TextInput>
    </View>
  );
};


export {EmailInput, CheckoutInput};
