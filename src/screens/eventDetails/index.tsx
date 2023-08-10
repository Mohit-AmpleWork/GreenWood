import {NavigationRouteContext} from '@react-navigation/core';
import React from 'react';
import {Alert, ScrollView, StyleSheet, View,TouchableOpacity,Image} from 'react-native';
import {s,ms , vs } from 'react-native-size-matters';
import {BottomBtn} from '../../components/button';
import {BuisnessImg} from '../../components/image';
import {Labels} from '../../components/texts';

const EventDetails = ({navigation}: {navigation: any}) => {
  const pop = () => {
    navigation.pop();
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView //contentContainerStyle={styles.Container}
      >
        <BuisnessImg
          src={require('../../assets/images/event.jpeg')}
        />
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
        <View style={styles.heading}>
          <Labels
            text="LOVE + PROPAGANDA SATURDAY'S (seriesgrp)"
            fontsize={17}
            letterspacing={0.47}
            Color="rgb(74,144,226)"
          />
        </View>
        <View style={styles.subheading} >
          <Labels
            text="by Mind the Product"
            fontsize={13}
            letterspacing={0.36}
            Color="rgb(85,85,85)"
          />
          <Labels
            text="$809.10 – $999"
            fontsize={11}
            letterspacing={0.31}
            Color="rgb(84,148,10)"
          />
          <Labels
            text="Description"
            fontsize={13}
            letterspacing={0.36}
            Color="rgb(79,79,79)"
          />
          <Labels
            text="Dance at San Francisco's premier dance-club featuring the best open-format DJs from all over. NO COVER with RSVP for you and all your friends or reserve a VIP section."
            fontsize={10}
            letterspacing={0.28}
            Color="rgb(79,79,79)"
          />
          <Labels
            text="Situated in San Francisco's Union Square district, Love and Propaganda is a crossroads where music, fashion, and art all meet to form an audio-visual experience unlike anything you've ever seen before. After you've settled into the gorgeous neo-classic inspired design, sound becomes the focal point. Expect to have your understanding of nightlife challenged, as L+P prides itself on the attention put forth to recognize the much broader community of widely acclaimed international and underground producers, DJs, and overall talent that you won’t find anywhere else."
            fontsize={10}
            letterspacing={0.28}
            Color="rgb(79,79,79)"
          />
           <Labels
            text="85 CAMPTON PL., SAN FRANCISCO CA"
            fontsize={11}
            letterspacing={0.36}
            Color="rgb(79,79,79)"
          />
           <Labels
            text="Date & Time"
            fontsize={13}
            letterspacing={0.36}
            Color="rgb(79,79,79)"
          />
          <Labels
            text="Sat, May 25, 2019, 9:30 PM – Sun, May 26, 2019, 2:00 AM PDT"
            fontsize={10}
            letterspacing={0.28}
            Color="rgb(79,79,79)"
          />
           <Labels
            text="Location"
            fontsize={13}
            letterspacing={0.36}
            Color="rgb(79,79,79)"
          />
          <Labels
            text="Love + Propaganda 85 Campton Place 
            San Francisco, CA 94108
            United States"
            fontsize={10}
            letterspacing={0.28}
            Color="rgb(79,79,79)"
          />
         
         
        </View>
      </ScrollView>
      <View>
        <BottomBtn
          text="Are you Interested?"
          onPress={() => {
            Alert.alert('Are You Interested?');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

  heading: {
    marginVertical: 10,
    marginHorizontal: 15,
    paddingRight: ms(25)
  },
  subheading: {
  marginHorizontal: 15,
   rowGap: 10,
   marginBottom: 20
  },
})

export default EventDetails;
