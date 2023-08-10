import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  StatusBar,
  ScrollView,
} from 'react-native';
import { GreenWoodImage } from '../../../components/image';
import {Email, FaceBook, Google} from '../../../components/button/index';
import SignInPage from '../signInPage';
import { Link } from '@react-navigation/native';

const LandingPage = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView
      stickyHeaderHiddenOnScroll={true}
      style={{backgroundColor: 'white'}}
      contentContainerStyle={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <GreenWoodImage />
        <View style={styles.button}>
          <Email
            text="Sign In with Email"
            onPress={() => {
              navigation.navigate('SignInPage');
            }}
          />
          <View style={styles.subContainer}>
            <FaceBook />
            <Google />
          </View>
        </View>
        <Text style={styles.txt}>
          Don't have an account?
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignUpPage');
            }}
            style={{paddingTop: 10,paddingLeft: 2}}  
          >
            <Text style={{color: '#17c884', letterSpacing: 0.88,}}>SignUp</Text>
            {/* <Link to='/' style={{color: '#17c884', letterSpacing: 0.88,} >SignUp</Link> */}
          </TouchableOpacity>
          
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'relative',
    padding: 20
  },
  subContainer: {
    flexDirection: 'row',
    columnGap: 20,
    marginTop: 10,
  },
  button: {
    padding: 12
  },
  txt: {color: 'black', marginTop: 224, letterSpacing: 0.88, textAlign: 'center'},
});

export default LandingPage;
