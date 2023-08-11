import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {s, ms, vs, mvs} from 'react-native-size-matters';
import colors from '../../../themes/colors';

const CartContainer = () => {
  return (
    <View style={CartContainerStyle.container}>
      <View style={CartContainerStyle.subContainerOne}>
        <Text style={{color: 'black', fontSize: 13, letterSpacing: 0.31}}>
          Roger Solid Wood One Seater Sofa in…
        </Text>
        <Text
          style={{
            color: 'rgb(121,121,121)',
            fontSize: 15,
            letterSpacing: 0.51,
          }}>
          $199.50
        </Text>
      </View>
      <View
        style={CartContainerStyle.subContainerTwo}>
        <Text
          style={{
            color: 'rgb(155,155,155)',
            fontSize: 13,
            letterSpacing: 0.36,
          }}>
          X
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 21,
            letterSpacing: 0.51,
            fontWeight: '600',
          }}>
          02
        </Text>
      </View>
      <View style={CartContainerStyle.subContainerThree}>
        <Text
          style={{color: 'rgb(76,133,10)', fontSize: 17, letterSpacing: 0.43}}>
          $399.00
        </Text>
        <Text
          style={{color: 'rgb(186,33,52)', fontSize: 11, letterSpacing: 0.27}}>
          Remove
        </Text>
      </View>
    </View>
  );
};

const CartContainerStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: mvs(375),
    height: ms(100),
    padding: 13,
    backgroundColor: colors.white,
    borderBottomWidth: 5,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#eeeeee',
  },
  subContainerOne: {flex: 1,alignItems: 'flex-start'},
  subContainerTwo: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    margin: 25
  },
  subContainerThree: { alignItems: 'flex-end', marginRight: '8%'},
});

export default CartContainer;
