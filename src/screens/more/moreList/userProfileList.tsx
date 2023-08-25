import React, {Component} from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  Button,
} from 'react-native';
import {ms, vs} from 'react-native-size-matters/extend';
import colors from '../../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import Slider from '@react-native-community/slider';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';

import {decrement, increment} from 'redux/slice';
import {AppDispatch, RootState} from 'redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const UpdateProfileList = () => {
  const [sliderValue, setSliderValue] = React.useState(15);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const navigation = useNavigation();

  const count = useAppSelector(state => state.createReducer.value);
  const dispatch = useAppDispatch();

  type menu = object;

  interface DATA {
    title: string;
    data: menu[];
  }

  interface data {
    name: string;
    screen: string;
    content: string;
  }

  const DATA = [
    {
      title: 'PERSONAL DETAILS',
      data: [
        {
          name: 'Name',
          screen: 'UserProfile',
          content: 'John Cornor',
          component: (
            <Image
              source={require('../../../assets/images/arrow.png')}
              resizeMode="cover"
              width={9}
              height={16}
              style={{margin: 11, position: 'absolute', alignSelf: 'flex-end'}}
            />
          ),
        },
        {
          name: 'Location',
          screen: 'Inbox',
          content: '51 Street , Hamshire, USA',
          component: (
            <Image
              source={require('../../../assets/images/arrow.png')}
              resizeMode="cover"
              width={9}
              height={16}
              style={{margin: 11, position: 'absolute', alignSelf: 'flex-end'}}
            />
          ),
        },
      ],
    },
    {
      title: 'SEARCH SETTINGS',
      data: [
        {
          name: 'Location Services',
          screen: 'UserProfile',
          content: null,
          component: (
            <Switch
              style={{
                margin: 11,
                position: 'absolute',
                alignSelf: 'flex-end',
              }}
              disabled={false}
              trackColor={{false: 'lightgray', true: colors.primary}}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
              thumbColor={colors.white}></Switch>
          ),
        },
        {
          name: 'Search Radius',
          screen: 'UserProfile',
          content: '2 Km',
          component: (
            <View
              style={{
                backgroundColor: colors.white,
                padding: 15,
                paddingTop: 0,
              }}>
              <Slider
                maximumValue={100}
                minimumValue={0}
                minimumTrackTintColor={colors.primary}
                maximumTrackTintColor={Colors.silver}
                step={1}
                value={sliderValue}
                onValueChange={sliderValue => setSliderValue(sliderValue)}
                thumbTintColor={colors.primary}
              />
            </View>
          ),
        },
        {
          name: 'Inc/dec',
          screen: 'UserProfile',
          content: '',
          component: (
            <View
              style={{
                position: 'absolute',
                width: '50%',
                height: 50,
                padding: 10,
                marginLeft: '25%',
                flexDirection: 'row',
              }}>
              <Button title="-" onPress={() => {
                console.log(decrement)
                dispatch(decrement)
              } } />
              <Text>{count}</Text>
              <Button title="+" onPress={()=> dispatch(increment) } />
            </View>
          ),
        },
      ],
    },
  ];

  return (
    <View>
      <SectionList
        sections={DATA}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.items}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
            <Text style={styles.content}>{item.content}</Text>
            {item.component}
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 13,
    backgroundColor: colors.silver,
    paddingLeft: 20,
    paddingTop: 27,
    height: vs(50),
    color: colors.black,
    fontWeight: '500',
    letterSpacing: 0.36,
  },
  items: {
    width: '100%',
    height: vs(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 13,
    height: 50,
    color: colors.black,
    padding: 10,
    paddingLeft: 20,
    borderBottomColor: colors.silver,
    borderBottomWidth: 1,
    letterSpacing: 0.36,
  },
  content: {
    color: 'gray',
    fontSize: 15,
    letterSpacing: 0.36,
    padding: 8,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 33,
  },
});

export default UpdateProfileList;
