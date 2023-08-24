import React, { FC } from 'react';
import {Text, View, TextInput, KeyboardTypeOptions, InputModeOptions} from 'react-native';
import colors from '../../themes/colors';

interface Props {
  keyboardType: KeyboardTypeOptions;
  text: string;
  value: string;
  onChangeText: (value: string) => void;
  inputMode: InputModeOptions;
} 

const FormInput: FC<Props> = ({
  keyboardType,
  text,
  value,
  onChangeText,
  inputMode,
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
        keyboardType={keyboardType}
        value={value}
        onChangeText={onChangeText} 
        inputMode={inputMode}
        />
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


export {FormInput, CheckoutInput};
