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
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {MMKV} from 'react-native-mmkv';
import {GoBack, SignedBtn} from '../../../components/button/index';
import {GreenWoodImage} from '../../../components/image/index';
import {FormInput} from '../../../components/textInput/index';
import colors from '../../../themes/colors';

const mmkv = new MMKV();

const SignInPage = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    const userData = {
      email: mmkv.getString(email),
      password: mmkv.getString(password)
    }
    if (!userData || userData.email !== email || userData.password !== password) {
      Alert.alert('Error', 'Invalid email or password');
      return;
    }else{
      
      Alert.alert('Success', 'Sign in successful!');
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
                keyboardType="email-address"
                inputMode='email'
                onChangeText={({text}: {text: string}) =>
                  setEmail(text)
                }
                value={email}
              />
              <FormInput
                text="PASSWORD"
                keyboardType="default"
                inputMode='text'
                onChangeText={({text}: {text: string}) =>
                  setPassword(text)
                }
                value={password}
              />
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <SignedBtn text="Sign In" onPress={() => {navigation.navigate('BottomTab')
}} />
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
