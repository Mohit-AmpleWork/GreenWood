import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Explorer from '../screens/explorerPage';
import ServiceDetails from '../screens/serviceDetails';
import BusinessDetails from '../screens/buisnessDetailsPage';
import SubscribtionDetails from '../screens/subScribptionDetails';
import Stores from '../screens/storePage';
import SelectSubscribption from '../screens/selectSubscribption';
import Events from '../screens/eventsPage';
import EventDetails from '../screens/eventDetails';
import DealCategories from '../screens/dealsPage/dealsCategory';
import Deals from '../screens/dealsPage';
import DealsDetails from '../screens/dealDetails';
import Shop from '../screens/shopPage';
import ProductDetails from '../screens/productDetails';
import Cart from '../screens/payment/cart';
import Checkout from '../screens/payment/checkout';
import PayProcess from '../screens/payment/checkout/payProcess';
import LandingPage from '../screens/onboarding/landingPage';
import SignInPage from '../screens/onboarding/signInPage';
import SignUp from '../screens/onboarding/signUpPage';
import BottomTab from './bottomTab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

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
        <Stack.Screen name="Explorer" component={Explorer} />
        <Stack.Screen name="BusinessDetails" component={BusinessDetails} />
        <Stack.Screen
          name="SubscribptionDetails"
          component={SubscribtionDetails}
        />
        <Stack.Screen
          options={{title: 'MuscleTraining', headerShown: true}}
          name="ServiceDetails"
          component={ServiceDetails}
        />
        <Stack.Screen name="Stores" component={Stores} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="EventDetails" component={EventDetails} />
        <Stack.Screen name="Deals" component={Deals} />
        <Stack.Screen name="DealsDetails" component={DealsDetails} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNav;
