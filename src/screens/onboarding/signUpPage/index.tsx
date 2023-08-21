import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {GoBack, SignedBtn} from '../../../components/button/index';
import {GreenWoodImage} from '../../../components/image/index';
import {FormInput} from '../../../components/textInput/index';
import {mmkv} from '../../../navigation/stackNav';
import colors from '../../../themes/colors';
import REGEX from '../../../utils/regex';

const SignUp = ({navigation}: {navigation: any}) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  let data = {
    email: state.email,
    password: state.password,
  };

  const isValidEmail = () => {
    const reg = REGEX.emailReg;
    return reg.test(state.email);
  };

  const isValidPassword = () => {
    const reg = REGEX.password;
    return reg.test(state.password);
  };

  const handleSignUp = () => {
    // if (state.email?.trim().length == 0 || !isValidEmail()) {
    //   Alert.alert('Please enter valid email address');
    //   return false;
    // } else if (
    //   (state?.password && state.password?.trim().length == 0) ||
    //   state.password?.trim() == '' ||
    //   !isValidPassword()
    // ) {
    //   Alert.alert(
    //     'Please enter valid Password, Password must Contain Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character, ',
    //   );
    //   return false;
    // } else if (
    //   (state.confirmPassword && state.confirmPassword.trim().length == 0) ||
    //   state.confirmPassword.trim() == ''
    // ) {
    //   Alert.alert('Please enter valid email address');
    //   return false;
    // } else if (
    //   state.password &&
    //   state.confirmPassword &&
    //   state.password != state.confirmPassword
    // ) {
    //   Alert.alert('Please enter valid email address');
    //   return false;
    // } else {
    //   mmkv.set('data', JSON.stringify(data));
    //   navigation.navigate('SignInPage');
    //   return true;
    // }
    mmkv.set('data', JSON.stringify(data));
    navigation.navigate('SignInPage');

  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <ScrollView
        stickyHeaderHiddenOnScroll={true}
        style={{backgroundColor: colors.white, paddingBottom: 50}}
        contentContainerStyle={{padding: 20}}>
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <GreenWoodImage />
            <View style={styles.subContainer}>
              <FormInput
                text="E-MAIL ADDRESS"
                value={state.email}
                keyboardType="email-address"
                inputMode="email"
                onChangeText={({text}: {text: any}) =>
                  setState(prev => ({...prev, email: text}))
                }
              />
              <FormInput
                text="PASSWORD"
                value={state.password}
                keyboardType="default"
                inputMode="text"
                onChangeText={({text}: {text: any}) =>
                  setState(prev => ({...prev, password: text}))
                }
              />
              <FormInput
                text="CONFIRM-PASSWORD"
                keyboardType="default"
                inputMode="text"
                value={state.confirmPassword}
                onChangeText={({text}: {text: any}) =>
                  setState(prev => ({...prev, confirmPassword: text}))
                }
              />
              <SignedBtn text="SignUp" onPress={handleSignUp} />
            </View>
          </KeyboardAwareScrollView>
          <GoBack
            onPress={() => {
              navigation.pop();
            }}
          />
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
  },
  subContainer: {padding: 15},
});

export default SignUp;
