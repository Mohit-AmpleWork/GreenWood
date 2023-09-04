import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Explorer from '@screens/explorerPage';
import Events from '@screens/eventsPage';
import Deals from '@screens/dealsPage';
import Shop from '@screens/shopPage';
import {Image} from 'react-native';
import {mvs} from 'react-native-size-matters/extend';
import More from '@screens/more';
import colors from '../themes/colors';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Explorer'}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.black,
        tabBarActiveBackgroundColor: colors.silver,
        tabBarStyle: {height: mvs(70)},
        tabBarItemStyle: {
          height: mvs(70),
          alignItems: 'center',
          borderBottomWidth: 4,
          paddingBottom: '3%',
          borderBottomColor: colors.secondary,
        },
        tabBarLabelStyle: {paddingBottom: 7},
      }}>
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarLabel: 'Events',
          tabBarIcon: () => (
            <Image source={require('../assets/images/EventIcon/event.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Deals"
        component={Deals}
        options={{
          tabBarLabel: 'Deals',
          tabBarIcon: () => (
            <Image source={require('../assets/images/DealsIcon/deals.png')} />
          ),
        }}
      />
      <Tab.Screen
        name="Explorer"
        component={Explorer}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/ExploreIcon/explore.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Shop}
        options={{
          tabBarLabel: 'Products',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/ProductsIcon/products.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: 'More',
          tabBarIcon: () => (
            <Image
              source={require('../assets/images/MoreIcon/more.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
