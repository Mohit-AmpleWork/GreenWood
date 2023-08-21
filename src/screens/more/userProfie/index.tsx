import React from 'react';
import {
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import MoreCard from '../../../components/moreCard';
import UpdateProfileList from '../../more/moreList/userProfileList';

const UserProfile = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView>
      <MoreCard />
      <TouchableOpacity
        style={styles.path}
        onPress={() => {
          navigation.pop();
        }}>
        <Image
          style={{tintColor: 'white'}}
          source={require('../../../assets/images/path/path.png')}
        />
      </TouchableOpacity>
      <UpdateProfileList />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  path: {
    position: 'absolute',
    width: 28,
    height: 18,
    marginTop: '10%',
    marginLeft: 15,
  },
});

export default UserProfile;
