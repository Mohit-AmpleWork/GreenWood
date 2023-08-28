import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
} from 'react-native';
import {BottomBtn} from '../../components/button';
import {Labels} from '../../components/customText';
import {Brand} from '../../components/container/customContainers';
import {vs} from 'react-native-size-matters/extend';
import {ServiceImg} from '../../components/image';
import LinearGradient from 'react-native-linear-gradient';
import ServiceHeader from '../../components/header/serviceHeader';

const ProductDetails = ({navigation}: {navigation: any}) => {
  const pop = () => navigation.pop();

  const data: Array<Object> = [
    {
      id: 1,
      img: require('../../assets/images/Shop1.jpeg'),
    },
    {
      id: 2,
      img: require('../../assets/images/shop2.jpeg'),
    },
    {
      id: 3,
      img: require('../../assets/images/Shop1.jpeg'),
    },
  ];

  const RenderItem = ({item}: {item: any}) => {
    return (
      <View>
        <ServiceImg src={item.img} />
        <LinearGradient
          colors={['rgba(0,0,0, 0.7)', 'rgba(0,0,0,-1)']}
          style={{height: vs(232), width: '100%', position: 'absolute'}}></LinearGradient>
      </View>
    );
  };

  return (
    <View style={ProductStyle.container}>
      <ScrollView contentContainerStyle={ProductStyle.subContainer}>
        <StatusBar hidden={true} />
        <ScrollView>
        <FlatList
          data={data}
          renderItem={RenderItem}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          scrollEnabled={true}
        />
        </ScrollView>
       <ServiceHeader onPressArrow={pop} />
        <View style={{rowGap: 15, padding: 15}}>
          <Labels
            text="Roger Solid Wood One Seater Sofa in Provincial Teak Finish by Woodsworth"
            Color="black"
            fontsize={17}
            letterspacing={0.41}
          />
          <Labels
            text="$199.50"
            Color="rgb(76 ,133, 10)"
            fontsize={17}
            letterspacing={0.41}
          />
          <Labels
            text="About Products"
            Color="black"
            fontsize={17}
            letterspacing={0.26}
          />
        </View>
        <Brand
          src={require('../../assets/images/woodsworth_Logo.jpeg')}
          brand="Woodsworth"
          text="231 Products"
        />
      </ScrollView>
      <View>
        <BottomBtn
          text="Add to Cart"
          onPress={() => {
            navigation.navigate('cart');
          }}
        />
        {/* <BottomBtn
          text="Add to the Cart"
          onPress={() => {
            navigation.navigate('SubscribptionDetails');
          }}
        /> */}
      </View>
    </View>
  );
};

const ProductStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  subContainer: {
    rowGap: 15,
    alignItems: 'center',
  },
});

export default ProductDetails;
