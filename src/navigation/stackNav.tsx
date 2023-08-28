import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MMKV} from 'react-native-mmkv';
import LandingPage from '@screens/onboarding/landingPage';
import SignInPage from '@screens/onboarding/signInPage';
import SignUp from '@screens/onboarding/signUpPage';
import BottomTab from './bottomTab';
import BusinessDetails from '@screens/businessDetailsPage';
import SubscribtionDetails from '@screens/subScribptionDetails';
import ServiceDetails from '@screens/serviceDetails';
import Stores from '@screens/storePage';
import Events from '@screens/eventsPage';
import EventDetails from '@screens/eventDetails';
import Deals from '@screens/dealsPage';
import DealsDetails from '@screens/dealDetails';
import Shop from '@screens/shopPage';
import ProductDetails from '@screens/productDetails';
import Cart from '@screens/payment/cart';
import Checkout from '@screens/payment/checkout';
import UserProfile from '@screens/more/userProfie';
import Inbox from '@screens/more/inbox';
import FavProducts from '@screens/more/favorites/shop';
import FavBusiness from '@screens/more/favorites/business';
import FavoriteDeals from '@screens/more/favorites/deals';
import FavoriteEvents from '@screens/more/favorites/events';
import Order from '@screens/more/orders';
import ChatBox from '@screens/more/inbox/chatBox';
import { store } from 'redux/store';

export const mmkv = new MMKV();

const Stack = createNativeStackNavigator();

const savedState = mmkv.getBuffer('reduxState');
if (savedState) {
  store.dispatch({ type: 'LOAD_STATE', payload: savedState });
}

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName={'LandingPage'}
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="landingPage" component={LandingPage} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
        <Stack.Screen
          name="SubscribptionDetails"
          component={SubscribtionDetails}
        />
        <Stack.Screen name="ServiceDetails" component={ServiceDetails} />
        <Stack.Screen name="Stores" component={Stores} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="Deals" component={Deals} />
        <Stack.Screen name="DealsDetails" component={DealsDetails} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Inbox" component={Inbox} />
        <Stack.Screen name="FavoriteProducts" component={FavProducts} />
        <Stack.Screen name="FavoriteBusiness" component={FavBusiness} />
        <Stack.Screen name="FavoriteDeals" component={FavoriteDeals} />
        <Stack.Screen name="FavoriteEvents" component={FavoriteEvents} />
        <Stack.Screen name="orders" component={Order} />
        <Stack.Screen name="Chat" component={ChatBox} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNav;
