import React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CategoriesComponent,
  ExplorerCategories,
} from '../../components/category';
import {Labels, Title} from '../../components/texts';
import {CardContainer, Categories} from '../../components/container';
import DealCategories from '../dealsPage/dealsCategory';
import EventCategories from '../eventsPage/eventCategories';
import ShopCategory from '../shopPage/shopCategories';
import Stores from '../storePage';
import StoreCategory from '../storePage/storeCategory';

const Explorer = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView horizontal={false} contentContainerStyle={{paddingBottom: 100}}>
      <View style={ExplorerStyles.container}>
        <View style={{marginTop: 20}}>
          <Title text="Explorer" />
        </View>

        <View style={ExplorerStyles.subContainerOne}>
          <ExplorerCategories />
        </View>
        {/* Events */}
        <View style={ExplorerStyles.subContainerTwo}>
          <View style={ExplorerStyles.headerStyle}>
            <Labels text='Events' fontsize={15} letterspacing={0.42} Color="rgb(79,79,79)" />
            <TouchableOpacity onPress={() => [navigation.push('Events')]}>
              <Text style={{color: 'rgb(23,200,132)', marginRight: 10}}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={ExplorerStyles.categoryStyle}>
            <EventCategories
              horizontal={true}
              pageEnable={false}
              onPress={() => {
                navigation.push('EventDetails');
              }}
              style={{paddingRight: 15}}
            />
          </View>
        </View>
        <View style={ExplorerStyles.subContainerTwo}>
          <View style={ExplorerStyles.headerStyle}>
          <Labels text='Nearby Stores' fontsize={15} letterspacing={0.42} Color="rgb(79,79,79)" />
            
            <TouchableOpacity onPress={() => [navigation.push('Stores')]}>
              <Text style={{color: 'rgb(23,200,132)', marginRight: 10}}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={ExplorerStyles.categoryStyle}>
            <StoreCategory
              onPress={() => {
                navigation.navigate('BusinessDetails');
              }}
              horizontal={true}
              pagingEnabled={false}
              style={{paddingRight: 15}}
            />
          </View>
        </View>
        <View style={ExplorerStyles.subContainerTwo}>
          <View style={ExplorerStyles.headerStyle}>
          <Labels text='Nearby Deals' fontsize={15} letterspacing={0.42} Color="rgb(79,79,79)" />
            <TouchableOpacity onPress={() => [navigation.push('Deals')]}>
              <Text style={{color: 'rgb(23,200,132)', marginRight: 10}}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={ExplorerStyles.categoryStyle}>
            <DealCategories
              horizontal={true}
              pageEnable={false}
              onPress={() => {
                navigation.navigate('DealsDetails');
              }}
              style={{paddingRight: 15}}
            />
          </View>
        </View>
        <View style={ExplorerStyles.subContainerTwo}>
          <View style={ExplorerStyles.headerStyle}>
          <Labels text='Latest Products' fontsize={15} letterspacing={0.42} Color="rgb(79,79,79)" />
            <TouchableOpacity onPress={() => [navigation.push('Shop')]}>
              <Text style={{color: 'rgb(23,200,132)', marginRight: 10}}>View all</Text>
            </TouchableOpacity>
          </View>
          <View style={ExplorerStyles.categoryStyle}>
            <ShopCategory
              horizontal={true}
              pagingEnabled={false}
              onPress={() => {
                navigation.navigate('ProductDetails');
              }}
              style={{paddingRight: 15}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const ExplorerStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(246,246,246)',
    rowGap: 20,
    marginVertical: 20,
    marginLeft: 15
  },
  subContainerOne: {},
  subContainerTwo: {},
  headerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  categoryStyle: {
    marginRight: 0
    // marginLeft: 15,
  },
});

export default Explorer;
