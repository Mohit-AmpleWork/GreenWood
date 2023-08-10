import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  StatusBar,
  Text,
  KeyboardAvoidingView,
  View,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {GoBack, SignedBtn} from '../../../components/button/index';
import {GreenWoodImage} from '../../../components/image/index';
import {EmailInput} from '../../../components/textInput/index';

const SignInPage = ({navigation}: {navigation: any}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView
        stickyHeaderHiddenOnScroll={true}
        style={{backgroundColor: 'white', paddingBottom: 50}}
        contentContainerStyle={{padding: 20}}
        >
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <KeyboardAwareScrollView>
            <GreenWoodImage />
            <View style={styles.subContainer}>
            <EmailInput text="E-MAIL ADDRESS" keyboardType="email-address" />
            <EmailInput text="PASSWORD" keyboardType="default" />
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <SignedBtn
                text="Sign In"
                onPress={() => {
                  navigation.push('BottomTab');
                }}
              />
              <Text style={{color: 'red', marginTop: 26}}>
                Forgot Password?
              </Text>
            </View>
            </View>
            <View>
              <GoBack
                onPress={() => {
                  navigation.popToTop('LandingPage');
                }}
              />
            </View>
          </KeyboardAwareScrollView>
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
    marginTop: 30,
    position: 'relative',
  },
  subContainer: {padding: 15},
});

export default SignInPage;
