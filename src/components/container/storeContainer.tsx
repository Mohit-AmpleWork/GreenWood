import React from 'react';
import {
  ImageBackground,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {s, vs, ms} from 'react-native-size-matters';
import {BusinessReview} from './customContainers';
import colors from '../../themes/colors';

const StoreContainer = ({
  src,
  onPress,
}: {
  src: ImageURISource;
  onPress: any;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={styles.container}>
        <ImageBackground
          source={src}
          style={styles.bgImage}
          resizeMode="stretch">
          <View
            style={{
              alignItems: 'flex-end',
              paddingRight: ms(15),
              paddingTop: ms(10),
            }}>
            <BusinessReview />
          </View>
          <View
            style={styles.subcontainer}>
            <View>
              <Text style={{color: 'black', fontSize: 13, letterSpacing: 0.47}}>
                Gold's gym
              </Text>
              <Text
                style={{color: '#656565', fontSize: 9, letterSpacing: 0.37}}>
                Fitness {'&'} Training{' '}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 11, color: '#757575'}}>3.7 KM</Text>
              <Text
                style={{
                  color: colors.secondary,
                  fontSize: 10,
                  letterSpacing: 0.37,
                }}>
                3 OFFERS
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 5,
    borderLeftWidth: 3,
    borderColor: '#eeeeee',
    marginBottom: 10,
  },
  bgImage: {minWidth: s(345), maxWidth: '100%', height: vs(200)},
  subcontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 146,
    backgroundColor: 'white',
    height: vs(39),
    padding: 10,
  }

});

export default StoreContainer;
