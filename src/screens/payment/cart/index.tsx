import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { ScrollView } from 'react-native'
import { BottomBtn } from '../../../components/button'
import Header from '../../../components/header'
import CartContainer from '../../../components/container/cartContainer'

const Cart = ({navigation}:{navigation: any}) => {
  return (
    <View style={{flex: 1}}>
      <Header title='Shopping Cart' onPress={() => {navigation.pop()}} />
      <ScrollView style={CartStyle.container} >
        <CartContainer />
      </ScrollView>
      <BottomBtn text='Click here for Proceed for Checkout' onPress={() => {navigation.navigate('Checkout')}}  />
    </View>
  )
}

const CartStyle = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)'
  }
})

export default Cart
