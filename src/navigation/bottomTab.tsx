import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explorer from '../screens/explorerPage';
import Stores from '../screens/storePage';
import Events from '../screens/eventsPage';
import Deals from '../screens/dealsPage';
import Shop from '../screens/shopPage';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator initialRouteName={'Explorer'} screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Deals" component={Deals} />
      <Tab.Screen name="Explorer" component={Explorer} />
      <Tab.Screen name="Products" component={Shop} />
     </Tab.Navigator>
  );
};

export default BottomTab;
