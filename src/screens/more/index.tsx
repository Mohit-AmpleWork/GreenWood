import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Labels} from '../../components/customText';
import MoreCard from '../../components/moreCard';
import colors from '../../themes/colors';
import MoreList from './moreList';

const More = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={MoreStyle.container}>
        <MoreCard />
        <View style={MoreStyle.texts}>
          <View style={{ alignSelf: 'center' }}>
          <Labels
            text="John Cornor"
            fontsize={25}
            letterspacing={0.7}
            Color={colors.white}
          />
          </View>
          <Labels
            text="51 Street, Hampshire, USA"
            fontsize={15}
            letterspacing={0.42}
            Color={colors.white}
          />
        </View>
        <MoreList />
        <TouchableOpacity
          style={MoreStyle.logout}
          onPress={() => {
            navigation.navigate('SignInPage');
          }}>
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
    padding: 15,
  },
  texts: {
    position: 'absolute',
    alignContent: 'center',
    marginTop: '60%',
    alignSelf: 'center'
   }
});

export default More;
