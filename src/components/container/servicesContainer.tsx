import React from 'react';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters/extend';

const ServicesContainer = ({
  src,
  text,
  onPress,
}: {
  src: string;
  text: string;
  onPress: any;
}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        width: ms(155),
        height: ms(102),
        borderRadius: 5,
        borderWidth: 1,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.53)',
      }}>
      <TouchableOpacity onPress={onPress}>
        <ImageBackground
          source={src ? {uri: src} : require('../../assets/images/muscle.webp')}
          style={{
            width: 165,
            height: ms(102),
            justifyContent: 'center',
            opacity: 0.59,
          }}
          resizeMode="stretch">
          <Text
            style={{color: 'white', alignSelf: 'center', fontWeight: '900'}}>
            {text}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default ServicesContainer