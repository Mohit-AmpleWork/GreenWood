import React from 'react';
import {
  Image,
  ImageURISource,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters/extend';

const BusinessReview = () => {
  return (
    <View
      style={{
        width: 50,
        height: vs(24),
        borderRadius: 2,
        backgroundColor: '#56980a',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}>
      <Image
        source={require('../../assets/images/star/path.png')}
        style={{width: 10, height: 9, alignSelf: 'center'}}
        resizeMode="stretch"
      />
      <Text
        style={{
          color: 'white',
          fontSize: 17,
          marginVertical: 2,
          marginRight: 2,
        }}>
        4.5
      </Text>
    </View>
  );
};

const Categories = ({
  text,
  src,
  bgcolor,
  color,
  onPress,
}: {
  text: string;
  src: ImageURISource;
  bgcolor: string;
  color: string;
  onPress: any;
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: s(120),
          height: s(70),
          backgroundColor: `${bgcolor}`,
          borderRadius: 4,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 15,
        }}>
        <Image
          style={{width: s(27), height: s(27), padding: 5}}
          source={src}
          resizeMode="stretch"
        />
        <Text
          style={{
            fontSize: 13,
            color: `${color}`,
            fontWeight: 'bold',
            padding: 3,
          }}>
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const SubscribptionSelectCard = ({
  Color,
  cost,
  year,
  onPress,
}: {
  Color: string;
  cost: string;
  year: string;
  onPress: any;
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: ms(325),
          height: mvs(73),
          borderStyle: 'dashed',
          borderColor: `${Color}`,
          borderWidth: 1,
          borderRadius: 7,
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          columnGap: 20,
          padding: ms(15),
          margin: 4,
        }}>
        <Text
          style={{
            fontSize: 32,
            color: `${Color}`,
            marginLeft: 10,
            fontWeight: 'bold',
          }}>
          {cost}
        </Text>
        <View style={{width: 143, height: 48, margin: 15}}>
          <Text style={{fontSize: 17, color: 'black'}}>{year}Year</Text>
          <Text style={{fontSize: 11, color: 'black'}}>
            Yoga, Cardio, Muscle Gain
          </Text>
        </View>
        <View
          style={{
            borderRadius: 100,
            borderColor: `${Color}`,
            width: 28,
            height: 28,
            borderWidth: 1,
            backgroundColor: `${Color}`,
          }}></View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const Brand = ({
  src,
  brand,
  text,
}: {
  src: ImageURISource;
  brand: string;
  text: string;
}) => {
  return (
    <View style={{rowGap: 10}}>
      <Text
        style={{
          color: 'rgb(53,53,53)',
          fontWeight: '600',
          fontSize: 12,
          letterSpacing: 0.31,
          marginTop: 20,
        }}>
        Product By{' '}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'center',
          maxWidth: '100%',
          minWidth: ms(345),
          height: ms(64),
          padding: 10,
          backgroundColor: 'rgb(242,242,242)',
        }}>
        <Image
          source={src}
          resizeMode="repeat"
          style={{
            width: ms(44),
            height: ms(44),
            borderColor: 'rgb(242,242,242)',
            marginRight: 10,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 17,
              color: 'rgb(74,144,226)',
              letterSpacing: 0.47,
            }}>
            {brand}
          </Text>
          <Text
            style={{fontSize: 11, color: 'rgb(47,47,47)', letterSpacing: 0.27}}>
            {text}
          </Text>
        </View>
      </View>
    </View>
  );
};

export {BusinessReview, Categories, SubscribptionSelectCard, Brand};
