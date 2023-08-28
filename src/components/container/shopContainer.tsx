import React from 'react';
import {
  ImageBackground,
  ImageURISource,
  Pressable,
  Text,
  View,
} from 'react-native';
import {s, vs} from 'react-native-size-matters/extend';
import {Labels} from '../customText';

const ShopContainer = ({
  src,
  onPress,
  headline,
  price,
  brand,
}: {
  src: ImageURISource;
  onPress: any;
  headline: string;
  price: string;
  brand: string;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          flex: 1,
          borderBottomWidth: 5,
          borderRightWidth: 3,
          borderLeftWidth: 3,
          borderColor: '#eeeeee',
          marginBottom: 10,
        }}>
        <ImageBackground
          source={src}
          style={{minWidth: s(346), height: vs(218), width: '100%'}}
          resizeMode="stretch">
          <View style={{flex: 1}}>
            <Text
              style={{
                marginTop: vs(135),
                marginLeft: 6,
                padding: 3,
                backgroundColor: 'rgba(10,10,10,0.63)',
                width: Text.length,
                fontSize: 11,
                letterSpacing: 0.11,
                color: 'white',
                position: 'absolute',
              }}>
              {`by ${brand}`}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 146,
              flexWrap: 'wrap',
              backgroundColor: 'white',
              height: vs(39),
              padding: 10,
            }}>
            <View>
              <Labels
                text={headline}
                fontsize={11}
                letterspacing={0.31}
                Color="black"
              />
              <View>
                <Labels
                  text={price}
                  fontsize={17}
                  letterspacing={0.41}
                  Color="rgb(76,133,10)"
                />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

export default ShopContainer