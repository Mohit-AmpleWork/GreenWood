import React from 'react';
import {
  Image,
  ImageBackground,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import colors from '../../themes/colors';
import {Labels} from '../customText';

const CardContainer = ({
  src,
  headline,
  subHeadline,
  text,
  onPress,
}: {
  src: string;
  headline: string;
  subHeadline: string;
  text: string;
  onPress: any;
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          width: s(345),
          height: vs(90),
          margin: 'auto',
          rowGap: 20,
          marginBottom: 10,
          borderBottomWidth: 5,
          borderRightWidth: 3,
          borderLeftWidth: 3,
          borderColor: '#eeeeee',
          backgroundColor: 'white',
        }}>
        <ImageBackground
          source={src ? {uri: src} : require('../../assets/images/muscle.webp')}
          style={{width: ms(90), height: vs(86), margin: 0.5}}
          resizeMode="cover"></ImageBackground>

        <View
          style={{
            width: s(190),
            height: vs(38),
            alignItems: 'flex-start',
            marginLeft: 20,
            marginTop: 15,
          }}>
          <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
            {headline}
          </Text>
          <Text style={{color: 'black'}}>{subHeadline}</Text>
          <Text style={{color: 'black', fontSize: 10}}>{text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

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
        width: 165,
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
          style={{width: ms(346), height: vs(200)}}
          resizeMode="cover">
          <View
            style={{
              alignItems: 'flex-end',
              paddingRight: ms(25),
              paddingTop: ms(10),
            }}>
            <BusinessReview />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 146,
              // flexWrap: 'wrap',
              backgroundColor: 'white',
              height: vs(39),
              padding: 10,
            }}>
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
                style={{color: colors.secondary, fontSize: 10, letterSpacing: 0.37}}>
                3 OFFERS
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </Pressable>
  );
};

const BusinessReview = () => {
  return (
    <View
      style={{
        width: s(56),
        height: vs(24),
        borderRadius: 2,
        backgroundColor: '#56980a',
        flexDirection: 'row',
      }}>
      <Image
        source={require('../../assets/images/star/path.png')}
        style={{width: 10, height: 9, marginHorizontal: 10, marginVertical: 8}}
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

const EventContainer = ({
  src,
  headline,
  subHeadline,
  text,
  onPress,
}: {
  src: ImageURISource;
  headline: string;
  subHeadline: string;
  text: string;
  onPress: any;
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
          flexDirection: 'row',
          width: s(332),
          height: ms(110),
          borderRadius: 4,
          backgroundColor: 'white',
        }}>
        <ImageBackground
          source={src}
          style={{width: ms(100), height: ms(105), margin: 'auto'}}
          resizeMode="stretch"></ImageBackground>

        <View
          style={{
            width: 190,
            height: 38,
            alignItems: 'flex-start',
            marginLeft: 20,
            marginTop: 15,
          }}>
          <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
            {headline}
          </Text>
          <Text style={{color: 'black'}}>{subHeadline}</Text>
          <Text style={{color: 'black', fontSize: 10}}>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

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
          style={{width: ms(346), height: vs(218)}}
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
          width: ms(345),
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

export {
  CardContainer,
  ServicesContainer,
  StoreContainer,
  BusinessReview,
  Categories,
  SubscribptionSelectCard,
  EventContainer,
  ShopContainer,
  Brand,
};
