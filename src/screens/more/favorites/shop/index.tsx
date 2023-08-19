import React from 'react'
import {View,Image,TouchableOpacity, StyleSheet} from 'react-native'
import { Title } from '../../../../components/customText';
import ShopCategory from '../../../shopPage/shopCategories';


const FavProducts = ({navigation}: {navigation: any}) => {
  return (
    <View style={ShopStyle.container}>
    <View style={ShopStyle.subContainerOne}>
      <TouchableOpacity
        style={{width: 28, height: 18}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          style={{tintColor: '#797979', marginTop: 10, marginLeft: 4}}
          source={require('../../../../assets/images/path/path.png')}
        />
      </TouchableOpacity>
      <Title text="Favorite Products"/>
    </View>
    <View style={ShopStyle.subContainerTwo}>
      <ShopCategory onPress={() => {navigation.push('ProductDetails')}} horizontal={false} pagingEnabled={false} style={{ paddingBottom: 200 }} favorite={true}/>
    </View>
  </View>
  
  )
}

const ShopStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246,246,246)',
    rowGap: 14,
  },
  subContainerOne: {
    flexDirection: 'row',
    marginStart: 10,
    marginTop: 30,
    columnGap: 10,
  },
  subContainerTwo: {
    alignItems: 'center',
    padding: 10,
  },
});


export default FavProducts
