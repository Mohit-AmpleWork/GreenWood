import React from 'react';
import {Text, View, TextInput, KeyboardTypeOptions} from 'react-native';
import { s , ms} from 'react-native-size-matters';

const EmailInput = ({
  keyboardType,
  text,
}: {
  keyboardType: KeyboardTypeOptions;
  text: string;
}) => {
  return (
    <View>
      <Text style={{color: '#626262', marginTop: 26}}>{text}</Text>
      <TextInput
        style={{
          borderBottomColor: '#d8d8d8',
          borderWidth: 1,
          width: 300,
          borderTopColor: 'white',
          borderLeftColor: 'white',
          borderRightColor: 'white',
          color: 'black',
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
      <Text style={{color: '#626262', marginTop: 26}}>{text}</Text>
      <TextInput
        style={{
          width: width,
          height: 50,
          backgroundColor: 'white',
          color: 'black',
          marginTop: 10,
          padding: 4
        }}
        accessible={false} keyboardType={keyboardType}></TextInput>
    </View>
  );
};


export {EmailInput, CheckoutInput};
