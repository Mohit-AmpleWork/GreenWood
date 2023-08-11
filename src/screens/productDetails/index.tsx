import React from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {BottomBtn} from '../../components/button';
import {BuisnessImg, ServiceImg} from '../../components/image';
import {Labels} from '../../components/customText';
import { Brand } from '../../components/container';
import BusinessDetails from '../buisnessDetailsPage';
import {s, vs, ms, mvs} from 'react-native-size-matters'

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
    return <BuisnessImg src={item.img} />;
  };

  return (
    <View style={ProductStyle.container}>
      <ScrollView contentContainerStyle={ProductStyle.subContainer} >
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
      <View
        style={{
          width: ms(340),
          marginTop: 20,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          position: 'absolute',
        }}>
        <TouchableOpacity
          style={{marginStart: 20, width: 28, height: 18}}
          onPress={pop}>
          <Image
            style={{tintColor: 'white'}}
            source={require('../../assets/images/path/path.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{width: 28, height: 18}}>
          <Image
            style={{tintColor: 'white'}}
            source={require('../../assets/images/shape/shape.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={{ rowGap: 15, padding: 15}} >
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
      <Brand src={require('../../assets/images/woodsworth_Logo.jpeg')} brand='Woodsworth' text="231 Products" />
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
