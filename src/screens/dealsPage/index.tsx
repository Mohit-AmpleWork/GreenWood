import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {CategoriesComponent} from '../../components/category';
import {Title} from '../../components/texts';
import DealCategories from './dealsCategory';
import {s, vs, ms, mvs} from 'react-native-size-matters';

const Deals = ({navigation}: {navigation: any}) => {
  const pop = () => {
    navigation.goBack();
  };
  return (
    <View style={dealStyle.container}>
      <View style={dealStyle.subContainerOne}>
        <TouchableOpacity style={{width: 28, height: 18}} onPress={pop}>
          <Image
            style={{tintColor: '#797979', marginTop: 10, marginLeft: 4}}
            source={require('../../assets/images/path/path.png')}
          />
        </TouchableOpacity>
        <Title text="Nearby Deals " />
      </View>
      <View>
        <CategoriesComponent />
      </View>
      <View style={dealStyle.subContainerTwo}>
        <DealCategories
          horizontal={false}
          pageEnable={false}
          onPress={() => {
            navigation.navigate('DealsDetails');
          }}
          style={{paddingBottom: 200}}
        />
      </View>
    </View>
  );
};

const dealStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(246,246,246)',
    rowGap: 14,
    marginTop: 29,
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

export default Deals;
