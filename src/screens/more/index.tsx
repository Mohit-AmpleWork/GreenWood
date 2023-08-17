import React from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import MoreCard from '../../components/moreCard';
import MoreList from './moreList';

const More = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView>
      <View style={MoreStyle.container}>
        <MoreCard />
        <MoreList />
        <TouchableOpacity style={MoreStyle.logout} onPress={() => {navigation.navigate('SignInPage')}}>
        <Image
          source={require('../../assets/images/LogOut/logout.png')}
          width={20}
          height={21}
          tintColor={Colors.white}   
        />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const MoreStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  logout: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 20,
    padding: 15
  },
});

export default More;
