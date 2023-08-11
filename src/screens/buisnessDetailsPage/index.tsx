import React from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {BuisnessImg} from '../../components/image';
import {BottomBtn} from '../../components/button';
import {s, vs, ms} from 'react-native-size-matters';
import {
  CardContainer,
  ServicesContainer,
  BusinessReview,
} from '../../components/container';
import colors from '../../themes/colors';

const BusinessDetails = ({navigation}: {navigation: any}) => {
  const pop = () => navigation.pop();

  return (
    <View style={BusinessStyle.container}>
      <ScrollView>
        <BuisnessImg src={require('../../assets/images/woman-fitness.webp')} />
        <View
          style={{
            width: ms(340),
            marginTop: 20,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
          }}>
          <TouchableOpacity
            style={{marginStart: 20, width: 28, height: 18}}
            onPress={pop}>
            <Image
              style={{tintColor: 'white'}}
              source={require('../../assets/images/path/path.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{width: 28, height: 18}}>
            <Image
              style={{tintColor: 'white'}}
              source={require('../../assets/images/shape/shape.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={BusinessStyle.subContainerOne}>
          <View
            style={{flexDirection: 'row', flexWrap: 'wrap', columnGap: 120}}>
            <Text style={BusinessStyle.txt1}>Gold's gym</Text>
            <BusinessReview />
            <Text style={BusinessStyle.txt2}>Fitness {'&'} Training </Text>
            <Text style={{fontSize: 9, color: 'black'}}>{'124 Reviews'}</Text>
          </View>
          <Text style={BusinessStyle.txt3}>
            OPENED NOW
            <Text style={{color: '#686868'}}> -10:00 AM - 07:00 PM</Text>
          </Text>
          <Text style={BusinessStyle.txt4}>{`Today's offer and Discount`}</Text>
          <View style={{marginRight: 20, marginTop: 15}}>
            <CardContainer
              src="https://www.shutterstock.com/image-photo/fitness-healthy-lifestyle-group-women-260nw-1659989539.jpg"
              headline="15% Off on Cardio & Yoga"
              subHeadline="On Yearly Subscrbtion"
              text="Exp: 15 july,2023"
              onPress={() => {
                navigation.navigate('Deals');
              }}
            />
            <CardContainer
              src="https://thumbs.dreamstime.com/b/fitness-exercise-sports-woman-exercising-resistance-band-fashion-clothes-loop-workout-high-resolution-fitness-exercise-126801611.jpg?w=1200"
              headline="15% Off on Cardio & Yoga"
              subHeadline="On Yearly Subscrbtion"
              text="Exp: 15 july,2023"
              onPress={() => {
                navigation.navigate('Deals');
              }}
            />
          </View>
          <Text style={BusinessStyle.txt4}>About Gold’s Gym</Text>
          <Text style={BusinessStyle.txt}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            suscipit porta sem, bibendum interdum lectus pretium sit amet.
            Praesent eleifend et nulla dictum fringilla. Etiam eget nisi
            interdum, sagittis orci nec, dictum eros. Donec luctus elit sed mi
            ultricies venenatis quis condimentum turpis.
          </Text>
          <Text style={BusinessStyle.txt4}>Our Offerings</Text>
          <View
            style={{
              marginVertical: 20,
              flexDirection: 'row',
              columnGap: 10,
              flexWrap: 'wrap',
              rowGap: 10,
            }}>
            <ServicesContainer
              text="Strength Training"
              src=""
              onPress={() => {
                navigation.navigate('ServiceDetails');
              }}
            />
            <ServicesContainer
              text="Yoga"
              src="https://thumbs.dreamstime.com/b/woman-yoga-relax-nature-lake-60434685.jpg"
              onPress={() => {
                navigation.navigate('ServiceDetails');
              }}
            />
            <ServicesContainer
              text="cardio"
              src="data:image/jpeg;base64,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"
              onPress={() => {
                navigation.navigate('ServiceDetails');
              }}
            />
            <ServicesContainer
              text="Muscle Training"
              src="https://thumbs.dreamstime.com/b/fitness-woman-25371935.jpg"
              onPress={() => {
                navigation.navigate('ServiceDetails');
              }}
            />
          </View>

          <Text style={BusinessStyle.txt4}>Rating & Reviews</Text>
        </View>
      </ScrollView>
      <BottomBtn
        text="Rate This Business"
        onPress={() => {
          Alert.alert('Rate Please!');
        }}
      />
    </View>
  );
};

const BusinessStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    rowGap: 10,
  },
  subContainerOne: {
    // justifyContent: 'flex-start',
    flexDirection: 'column',
    marginHorizontal: 15,
    padding: 4,
  },
  txt1: {
    color: '#4a90e2',
    fontSize: 24,
    letterSpacing: 0.47,
    marginRight: 34,
  },
  txt2: {
    color: '#858585',
    fontSize: 19,
    letterSpacing: 0.37,
  },
  txt3: {
    color: '#54940a',
    fontSize: 11,
    letterSpacing: 0.31,
  },
  txt4: {
    color: '#797979',
    fontSize: 19,
    letterSpacing: 0.37,
    marginTop: 10,
  },
  txt: {
    color: colors.black,
    fontWeight: '300',
    fontSize: 11,
    letterSpacing: 0.26,
    marginVertical: 20,
  },
});

export default BusinessDetails;
