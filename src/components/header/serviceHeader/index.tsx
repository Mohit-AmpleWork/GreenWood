import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

const ServiceHeader = ({onPressArrow}: {onPressArrow: any}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        width: '100%',
        flexDirection: 'row',
        position: 'absolute',
        marginTop: 20
      }}>
      <TouchableOpacity
        style={{alignSelf: 'flex-start', margin: 20}}
        onPress={onPressArrow}>
        <Image
          style={{tintColor: 'white'}}
          source={require('../../../assets/images/path/path.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{width: 28, height: 18, justifyContent: 'flex-end', margin: 20}}>
        <Image
          style={{tintColor: 'white'}}
          source={require('../../../assets/images/shape/shape.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ServiceHeader;
