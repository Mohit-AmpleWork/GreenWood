import React from 'react';
import {
  Image,
  ImageURISource,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {s, ms, mvs, vs} from 'react-native-size-matters/extend';
import colors from '../../../themes/colors';

const InboxContainer = ({
  src,
  brand,
  text,
  onPress,
}: {
  src: ImageURISource;
  brand: string;
  text: string;
  onPress: any;
}) => {
  return (
    <TouchableOpacity onPressIn={onPress}>
      <View
        style={{
          rowGap: 10,
          backgroundColor: 'rgb(235,235,235',
          borderWidth: 1,
          borderColor: 'rgb(220,220,220)',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: ms(345),
            height: ms(102),
            alignItems: 'center',
          }}>
          <View
            style={{
              width: s(60),
              height: vs(60),
              shadowColor: colors.black,
              shadowOpacity: 0.2,
              shadowRadius: 5,
              marginRight: 10,
            }}>
            <Image
              source={src}
              resizeMode="cover"
              style={{
                width: s(60),
                height: vs(60),
              }}
            />
          </View>
          <View style={{margin: 5}}>
            <Text
              style={{
                fontSize: 17,
                color: 'rgb(74,144,226)',
                letterSpacing: 0.47,
                fontWeight: '700',
              }}>
              {brand}
            </Text>
            <Text
              style={{
                fontSize: 13,
                color: 'rgb(85,85,85)',
                letterSpacing: 0.27,
                marginTop: 2,
              }}>
              {text}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default InboxContainer;
