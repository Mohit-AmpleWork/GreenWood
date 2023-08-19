import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {CategoriesComponent} from '../../components/category';
import {Title} from '../../components/customText';
import EventCategories from './eventCategories';

const Events = ({navigation}: {navigation: any}) => {
  const pop = () => {
    navigation.navigate('Explorer')
  };
  return (
    <View style={EventStyle.container}>
      <View style={EventStyle.subContainerOne}>
        <TouchableOpacity style={{width: 28, height: 18}} onPress={pop}>
          <Image
            style={{tintColor: '#797979', marginTop: 10, marginLeft: 4}}
            source={require('../../assets/images/path/path.png')}
          />
        </TouchableOpacity>
        <View>
          <Title text="Events" />
        </View>
      </View>
      <View>
        <CategoriesComponent />
      </View>
      <View style={EventStyle.subContainerTwo}>
        <EventCategories
          horizontal={false}
          pageEnable={false}
          onPress={() => {
            navigation.navigate('EventDetails');
          }}
          style={{paddingBottom: 200}}
          favorite={false}
        />
      </View>
    </View>
  );
};

const EventStyle = StyleSheet.create({
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
    marginHorizontal: 15,
    marginVertical: 15,
    rowGap: 20,
  },
});

export default Events;
