import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import OrderContainer from '../../../components/container/orderContainer';
import Header from '../../../components/header';

const Order = ({navigation}: {navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        title="My Orders"
        onPress={() => {
          navigation.pop();
        }}
      />
      <ScrollView style={OrderStyle.container}>
        <Text style={OrderStyle.date}> 19 Aug 2023</Text>
        <OrderContainer
          color="rgb(99,171,14)"
          fontSize={13}
          text="SUCCESS"
          spacing={0.31}
        />
        <Text style={OrderStyle.date}> 19 Aug 2023</Text>
        <OrderContainer
          color="rgb(199,115,40)"
          fontSize={13}
          text="Under Delivery"
          spacing={0.31}
        />
        <Text style={OrderStyle.date}> 19 Aug 2023</Text>
        <OrderContainer
          color="rgb(74,144,226)"
          fontSize={11}
          text="Validity: 12 Jun 24 - 15 June 24"
          spacing={0.27}
        />
        <Text style={OrderStyle.date}> 19 Aug 2023</Text>
        <OrderContainer
          color="rgb(74,144,226)"
          fontSize={11}
          text="09:00 AM - 10:00AM on 12 June 24"
          spacing={0.27}
        />
        <OrderContainer
          color="rgb(74,144,226)"
          fontSize={11}
          text="09:00 AM - 10:00AM on 12 June 24"
          spacing={0.27}
        />
      </ScrollView>
    </View>
  );
};

const OrderStyle = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)',
  },
  date: {color: '#686868', fontSize: 11, letterSpacing: 0.27, margin: 13},
});

export default Order;
