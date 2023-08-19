import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {CategoriesComponent} from '../../../../components/category';
import { Title } from '../../../../components/customText';
import StoreCategory from '../../../storePage/storeCategory';


const FavBusiness = ({navigation}: {navigation: any}) => {
  return (
    <View style={StoreStyle.container}>
      <View style={StoreStyle.subContainerOne}>
        <TouchableOpacity
          style={{width: 28, height: 18}}
          onPress={() => {
            navigation.pop();
          }}>
          <Image
            style={{tintColor: '#797979', marginTop: 10, marginLeft: 4}}
            source={require('../../../../assets/images/path/path.png')}
          />
        </TouchableOpacity>
        <Title text="Stores"  />
      </View>
      <View style={StoreStyle.subContainerTwo}>
        <StoreCategory
          onPress={() => {
            navigation.navigate('BusinessDetails');
          }}
          horizontal={false}
          pagingEnabled={false}
          style={{paddingBottom: 200}}
          favorite={true}
        />
      </View>
    </View>
  );
};

const StoreStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246,246,246)',
    rowGap: 14,
    marginBottom: 20
  },
  subContainerOne: {
    flexDirection: 'row',
    marginStart: 10,
    marginTop: 30,
    columnGap: 10,
  },
  subContainerTwo: {
    marginHorizontal: 15,
    marginVertical: 15,
    rowGap: 20,
  },
});

export default FavBusiness;
