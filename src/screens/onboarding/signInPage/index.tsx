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
import {GoBack, SignedBtn} from '../../../components/button/index';
import {GreenWoodImage} from '../../../components/image/index';
import {FormInput} from '../../../components/textInput/index';
import {mmkv} from '../../../navigation/stackNav';
import colors from '../../../themes/colors';

const SignInPage = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignIn = () => {
    // console.log(mmkv.getString('data'));
    
    const jsonUser: any = mmkv.getString('data') 
    // console.log(jsonUser);
    
    const userData = JSON.parse(jsonUser)
  // console.log('jsonUser ===>', jsonUser, typeof(jsonUser));

    if (
      !userData ||
      userData.email !== email ||
      userData.password !== password
    ) {
      console.log(email);
      
      Alert.alert('Error', 'Invalid email or password');
      return;
    } else {
      navigation.navigate('BottomTab')
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
