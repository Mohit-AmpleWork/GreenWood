import React from 'react';
import {
  SectionList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ms, vs} from 'react-native-size-matters/extend';
import colors from '../../../themes/colors';
import {useNavigation} from '@react-navigation/native';
import {Labels} from '../../../components/customText';

const MoreList = () => {
  const navigation = useNavigation();

  type menu = object;

  interface Section {
    title: string;
    data: menu[];
  }

  interface data {
    name: string;
    screen: string;
    number: number;
  }

  const DATA = [
    {
      title: 'ACCOUNT',
      data: [
        {name: 'Update Profile', screen: 'UserProfile', number: ''},
        {name: 'Inbox', screen: 'Inbox', number: '07'},
      ],
    },
    {
      title: 'MY FAVOURITE',
      data: [
        {name: 'Buisness', screen: 'FavoriteBusiness', number: '15'},
        {name: 'Deals', screen: 'FavoriteDeals', number: '07'},
        {name: 'Events', screen: 'FavoriteEvents', number: '05'},
        {name: 'Products', screen: 'FavoriteProducts', number: '05'},
      ],
    },
    {
      title: 'ACCOUNT',
      data: [
        {name: 'Shopping Cart', screen: 'cart', number: '07'},
        {name: 'My Orders', screen: 'orders', number: '06'},
      ],
    },
  ];

  return (
    <View>
      <SectionList
        sections={DATA}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() =>  navigation.navigate(item.screen)}>
            <View style={styles.items}>
              <Text style={styles.title}>{item.name}</Text>
              <Image
                source={require('../../../assets/images/arrow.png')}
                resizeMode="cover"
                width={9}
                height={16}
                style={{ margin: 11}}
              />
            </View>
            <Text style={styles.number}>{item.number}</Text>
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
  number: {
    color: 'gray',
    fontSize: 15,
    letterSpacing: 0.36,
    padding: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingRight: 33,
  }
});

export default MoreList;
