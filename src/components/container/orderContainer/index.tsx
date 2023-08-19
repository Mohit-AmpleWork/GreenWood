import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {s, ms, vs, mvs} from 'react-native-size-matters';
import colors from '../../../themes/colors';

const OrderContainer = ({
  color,
  fontSize,
  text,
  spacing,
}: {
  color: string;
  fontSize: number;
  text: string;
  spacing: number;
}) => {
  return (
    <View style={OrderContainerStyle.container}>
      <View style={OrderContainerStyle.subContainerTwo}>
        <Image
          source={require('../../../assets/images/gym_logo.jpeg')}
          style={OrderContainerStyle.img}
        />
      </View>
      <View style={OrderContainerStyle.subContainerOne}>
        <Text style={{color: 'black', fontSize: 13, letterSpacing: spacing}}>
          Roger Solid Wood One Seater Sofa in…
        </Text>
        <Text
          style={{
            color: color,
            fontSize: fontSize,
            letterSpacing: 0.31,
            fontWeight: '700',
          }}>
          {text}
        </Text>
      </View>
      <View style={OrderContainerStyle.subContainerThree}>
        <Text
          style={{
            color: 'rgb(76,133,10)',
            fontSize: 16,
            letterSpacing: 0.43,
            fontWeight: '800',
          }}>
          $399.00
        </Text>
      </View>
    </View>
  );
};

const OrderContainerStyle = StyleSheet.create({
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
  subContainerOne: {flex: 1, alignItems: 'flex-start'},
  subContainerTwo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    columnGap: 10,
    margin: 10,
  },
  subContainerThree: {alignItems: 'flex-end', margin: 25},
  img: {
    width: 80,
    height: 60,
    borderWidth: 2,
    borderColor: 'lightgray',
    borderRadius: 10,
  },
});

export default OrderContainer;
