import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {ScrollView} from 'react-native';
import {BottomBtn} from '../../../components/button';
import Header from '../../../components/header';
import CartContainer from '../../../components/container/cartContainer';
import {CheckoutInput} from '../../../components/textInput/index';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import PayProcess from './payProcess';

const Checkout = ({navigation}: {navigation: any}) => {
  const [isModal, setIsModal] = React.useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }} >
      <View style={{flex: 1}}>
        <Header
          title="Checkout"
          onPress={() => {
            navigation.pop();
          }}
        />
        <ScrollView style={CartStyle.container}>
          <KeyboardAwareScrollView>
            <View style={CartStyle.subContainer}>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 20,
                  marginTop: 20,
                  letterSpacing: 0.36,
                }}>
                ORDER SUMMARY
              </Text>
              <CartContainer />
              <CartContainer />
            </View>
            <View style={CartStyle.deliveryDetails}>
              <Text
                style={{color: 'black', marginTop: 20, letterSpacing: 0.36}}>
                DELIVERY ADDRESS
              </Text>
              <CheckoutInput
                text="ADDRESS"
                keyboardType="default"
                width={ms(345)}
              />
              <View style={CartStyle.delivery}>
                <CheckoutInput text="CITY" keyboardType="default" width={ms(165)} />
                <CheckoutInput
                  text="COUNTRY"
                  keyboardType="default"
                  width={ms(165)}
                />
              </View>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
        <TouchableWithoutFeedback onPress={() => {setIsModal(false)}}>
        <PayProcess visible={isModal} onPress={() => {setIsModal(false)}}/>
        </TouchableWithoutFeedback> 
        <BottomBtn text="Pay Now" onPress={() => { setIsModal(true)}}/>
        </View>
    </TouchableWithoutFeedback>
  );
};

const CartStyle = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)',
    margin: 'auto',
    
  },
  subContainer: {
    rowGap: 10,
  },
  deliveryDetails: {
    alignContent: 'center',
    padding: 20,
  },
  delivery: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Checkout;
