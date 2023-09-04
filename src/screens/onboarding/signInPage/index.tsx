import React from 'react';
import {
  StatusBar,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Snackbar from 'react-native-snackbar';
import { setUser } from 'redux/slice/userAuth/action';
import {GoBack, SignedBtn} from '../../../components/button/index';
import {GreenWoodImage} from '../../../components/image/index';
import {FormInput} from '../../../components/textInput/index';
import colors from '../../../themes/colors';
import { mmkv } from '../../../navigation/stackNav'
import { useDispatch } from 'react-redux';

const SignInPage = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch()

  const handleSignIn = () => {
    const jsonUser: any = mmkv.getString('data') 

    const userData = JSON.parse(jsonUser)
    
    if (
      !userData ||
      userData.email !== email ||
      userData.password !== password
    ) {
      console.log(email);
      Snackbar.show({
        text: 'Error, Invalid email or password',
        duration: Snackbar.LENGTH_LONG,
        numberOfLines: 2,
        rtl: true,
      });
      return;
    } else {
      if(userData) {
        dispatch(setUser(userData))
        console.log(userData);
        Snackbar.show({
          text: 'Success, Sign in successful!',
          duration: Snackbar.LENGTH_SHORT,
          numberOfLines: 2,
          rtl: true,
        });
      }
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView
        stickyHeaderHiddenOnScroll={true}
        style={{backgroundColor: 'white', paddingBottom: 50}}
        contentContainerStyle={{padding: 20}}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <KeyboardAwareScrollView>
            <GreenWoodImage />
            <View style={styles.subContainer}>
            <FormInput
                text="E-MAIL ADDRESS"
                value={email}
                keyboardType="email-address"
                inputMode="email"
                onChangeText={(value: string) => {
                  setEmail(value)
                }}
              />
              <FormInput
                text="PASSWORD"
                value={password}
                keyboardType="default"
                inputMode="text"
                onChangeText={(value: string) => {
                  setPassword(value)
                }}/>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <SignedBtn
                  text="Sign In"
                  onPress={handleSignIn}
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
    backgroundColor: colors.white,
    marginTop: 30,
    position: 'relative',
  },
  subContainer: {padding: 15},
});

export default SignInPage;
