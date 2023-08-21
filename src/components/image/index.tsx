import React from 'react';
import {
  Image,
  ImageBackground,
  ImageURISource,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {s, vs, ms, mvs} from 'react-native-size-matters';

const GreenWoodImage = () => {
  return (
    <View style={{ alignSelf: 'center' }}>
    <Image
      source={require('../../assets/images/group22.png')}
      style={{width: mvs(257), height: mvs(213)}}
      resizeMode='contain'
    />
    </View>
  );
};

const BuisnessImg = ({src}: {src: ImageURISource; }) => {
  return (
    <View>
      <ImageBackground
        source={src}
        style={{width: '100%',height: vs(316)}}
        resizeMode="stretch">
        <LinearGradient
          colors={['rgba(0,0,0, 0.7)', 'rgba(0,0,0,-1)']}
          style={{height: vs(316), width: '100%'}}></LinearGradient>
      </ImageBackground>
    </View>
  );
};

const ServiceImg = ({src}: {src: ImageURISource}) => {
  return (
    <ImageBackground
      source={src}
      style={{width: s(375), height: vs(232)}}
      resizeMode="stretch"></ImageBackground>
  );
};

export {GreenWoodImage, BuisnessImg, ServiceImg};
