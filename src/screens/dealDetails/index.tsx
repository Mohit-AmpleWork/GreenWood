import React from 'react';
import {ScrollView, View, Text, StyleSheet,TouchableOpacity,Image} from 'react-native';
import {BuisnessImg} from '../../components/image';
import {Labels} from '../../components/customText';
import {BusinessReview} from '../../components/container';
import ServiceHeader from '../../components/header/serviceHeader';

const DealsDetails = ({navigation}: {navigation: any}) => {
  const pop = () => {
    navigation.pop();
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BuisnessImg
          src={require('../../assets/images/fitness4.webp')}
        />
          <ServiceHeader onPressArrow={pop} />
        <View style={DealsStyle.subContainerOne}>
          <View>
            <Labels
              Color="rgb(74, 144, 226)"
              text="Gold’s gym"
              fontsize={17}
              letterspacing={0.47}
            />
            <Labels
              Color="rgb(85,85,85)"
              text="Fitness & Training"
              fontsize={17}
              letterspacing={0.28}
            />
            <Text style={DealsStyle.txt}>
              OPENED NOW
              <Text style={{color: '#686868'}}> -10:00 AM - 07:00 PM</Text>
            </Text>
          </View>
          <Labels
              text="Exp. 15 Jun 2019"
              Color='rgb(64,64,64)'
              fontsize={13}
              letterspacing={0.36} 
            />
            <View>
              <Labels text="DEAL" fontsize={17} letterspacing={0.47} Color="rgb(208,2,7)"  />
              <Labels text="15% OFF on Cardio, Yoga 
for 6 month Membership" fontsize={24} letterspacing={0.47} Color="rgb(47,47,47)"  />
            </View>
          <Labels
              text="How To Avail Deal"
              Color='rgb(79,79,79)'
              fontsize={13}
              letterspacing={0.36} 
            />
          <View>
            <Labels
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit porta sem, bibendum interdum lectus pretium sit amet. Praesent eleifend et nulla dictum fringilla. Etiam eget interdum, sagittis orci nec, dictum eros. Donec luctus elit sed mi ultricies venenatis quis condimentum turpis."
              Color='rgb(79,79,79)'
              letterspacing={0.28}
              fontsize={10}
            />
            <Labels
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus suscipit porta sem, bibendum interdum lectus pretium sit amet. Praesent eleifend et nulla dictum fringilla. Etiam eget interdum, sagittis orci nec, dictum eros. Donec luctus elit sed mi ultricies venenatis quis condimentum turpis."
              Color='rgb(79,79,79)'
              letterspacing={0.28}
              fontsize={10}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const DealsStyle = StyleSheet.create({
  subContainerOne: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 14.5,
    marginVertical: 14.5,
    rowGap: 20,
  },
  txt: {
    color: 'rgb(84,184,0)',
  },
});

export default DealsDetails;
