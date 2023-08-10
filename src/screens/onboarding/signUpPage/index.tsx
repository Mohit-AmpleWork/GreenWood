import React from 'react';
import {Text, View,StyleSheet, StatusBar,KeyboardAvoidingView,Platform, TouchableWithoutFeedback, Keyboard, ScrollView} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { GoBack, SignedBtn } from '../../../components/button/index';
import { GreenWoodImage } from '../../../components/image/index';
import { EmailInput} from '../../../components/textInput/index';

const SignUp = ({navigation}: {navigation: any}) => {
  return (
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss() } }>
      <ScrollView stickyHeaderHiddenOnScroll={true} style={{backgroundColor: 'white', paddingBottom: 50}}  contentContainerStyle={{padding: 20}} >
    <View
      style={styles.container}>
        <StatusBar hidden={true}  />
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <GreenWoodImage />
        
          <View style={styles.subContainer} >
          <EmailInput text='E-MAIL ADDRESS' keyboardType='email-address'  />
          <EmailInput text='PASSWORD' keyboardType='default' />
          <EmailInput text='CONFIRM-PASSWORD' keyboardType='default' />
          <SignedBtn text='SignUp' onPress={() => {navigation.push('SignInPage')}} />
          </View>
        </KeyboardAwareScrollView>
        <GoBack onPress={() => { navigation.popToTop('landingPage') }} />
      </View>
      </ScrollView>
      </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
    backgroundColor: 'white',
    marginTop: 30
  },
  subContainer: {padding: 15},
});

export default SignUp;
