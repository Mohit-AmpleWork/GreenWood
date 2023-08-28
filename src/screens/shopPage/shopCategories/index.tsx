import ShopContainer from 'components/container/shopContainer';
import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'

const ShopCategory = ({onPress, horizontal,pagingEnabled,style, favorite}: {onPress: any, horizontal: boolean,pagingEnabled: boolean; style: object; favorite: boolean}) => {

  const data: Array<Object> = [
    {
      id: 1,
      img: require('../../../assets/images/shop2.jpeg'),
      headline: 'New Yearly Membership just in 999' ,
      price: '$999.00' ,
      brand: 'Talwalkars'
    },
    {
      id: 2,
      img: require('../../../assets/images/Shop1.jpeg'),
      txt: 'Entertainment',
      headline: 'Roger Solid Wood One Seater Sofa…' ,
      price: '$199.50' ,
      brand: 'Woodsworth'
    },
    {
      id: 3,
      img: require('../../../assets/images/shop2.jpeg'),
      txt: 'Entertainment',
      headline: 'Roger Solid Wood One Seater Sofa…' ,
      price: '$199.50' ,
      brand: 'Woodsworth'
    },
    {
      id: 4,
      img: require('../../../assets/images/Shop1.jpeg'),
      txt: 'Entertainment',
      headline: 'Roger Solid Wood One Seater Sofa…' ,
      price: '$199.50' ,
      brand: 'Woodsworth'
    },
    {
      id: 5,
      img: require('../../../assets/images/shop2.jpeg'),
      txt: 'Entertainment',
      headline: 'Roger Solid Wood One Seater Sofa…' ,
      price: '$199.50' ,
      brand: 'Woodsworth'
    },
    {
      id: 6,
      img: require('../../../assets/images/Shop1.jpeg'),
      txt: 'Entertainment',
      headline: 'Roger Solid Wood One Seater Sofa…' ,
      price: '$199.50' ,
      brand: 'Woodsworth'
    },
    {
      id: 7,
      img: require('../../../assets/images/Shop1.jpeg'),
      txt: 'Entertainment',
      headline: 'Roger Solid Wood One Seater Sofa…' ,
      price: '$199.50' ,
      brand: 'Woodsworth'
    },
  ];

  

  const ComponentRenderItem = ({item}: {item: any}) => {
    return (
      <>
        <ShopContainer
          src={item.img}
          onPress={ onPress //  
        }
          headline={item.headline}
          price={item.price}
          brand={item.brand}
        />
        {favorite
        ? <Image source={require('../../../assets/images/shape2/shape.png')} style={{ position: 'absolute', margin: 10 }} /> 
        : null }
      </>
    );
  };

  return (
    <View>
      <FlatList
          data={data}
          renderItem={ComponentRenderItem}
          accessible={true}
          pagingEnabled={pagingEnabled}
          horizontal={horizontal}
          contentContainerStyle={style}
        />
    </View>
  )
}

export default ShopCategory
