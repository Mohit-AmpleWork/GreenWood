import React from 'react';
import {View, TextInput, Image, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../../components/header/index';
import colors from '../../../themes/colors';

const ChatBox = ({navigation}: {navigation: any}) => {
  return (
    <View style={ChatStyles.container}>
      <Header
        title="Gold’s Gym"
        onPress={() => {
          navigation.pop();
        }}
      />
      <KeyboardAwareScrollView></KeyboardAwareScrollView>
      <View style={ChatStyles.subContainer}>
        <TextInput
          placeholder="Type your message…"
          placeholderTextColor={colors.steel}
          style={ChatStyles.input}></TextInput>
        <View style={ChatStyles.send}>
          <Image
            source={require('../../../assets/images/sendSelected/sendSelected.png')}
            width={24}
            height={24}
            resizeMode="cover"
          />
        </View>
      </View>
    </View>
  );
};

const ChatStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    width: '100%',
    height: 75,
    borderRadius: 2,
    backgroundColor: colors.white,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 'auto',
  },
  input: {
    width: '90%',
    height: 70,
    padding: 25,
    color: 'black',
  },
  send: {
    position: 'absolute',
    alignSelf: 'flex-end',
    padding: 25,
  },
});

export default ChatBox;
