import { mmkv } from 'navigation/stackNav';
import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser} from 'redux/slice/userAuth/action';
import { UserState } from 'redux/slice/userAuth/userReducer';
import {Labels} from '../../components/customText';
import MoreCard from '../../components/moreCard';
import colors from '../../themes/colors';
import MoreList from './moreList';

const More = ({navigation}: {navigation: any}) => {

  const user = useSelector((state: UserState) =>  state.user );
  const dispatch = useDispatch();  

  const logOut = async () => {
      // mmkv.delete('user')
      dispatch(logoutUser());
      console.log(logoutUser());
      console.log('usert ===>' ,user);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={MoreStyle.container}>
        <MoreCard />
        <View style={MoreStyle.texts}>
          <View style={{alignSelf: 'center'}}>
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
          onPress={logOut}>
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
    alignSelf: 'center',
  },
});

export default More;
