import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  FlatList,
  ScrollView,
  ImageURISource,
} from 'react-native';
import {BottomBtn} from '../../components/button';
import Header from '../../components/header';
import { ServiceImg } from '../../components/image';
import colors from '../../themes/colors';

const ServiceDetails = ({navigation}: {navigation: any}) => {
  interface data {
    id: number,
    img: ImageURISource
  }

  const data = [
    {
      id: 1,
      img: require('../../assets/images/woman-fitness.webp'),
    },
    {
      id: 2,
      img: require('../../assets/images/fitness4.webp'),
    },
    {
      id: 3,
      img: require('../../assets/images/woman-fitness.webp'),
    },
  ];

  const RenderItem = ({item}: {item: any}) => {
   return <ServiceImg src={item.img} />;
    
  };

  return (
      <View style={ServiceStyle.container}>
        <ScrollView>
          <StatusBar hidden={true} />

        <Header title='Muscle Training' onPress={() => {navigation.pop()}} />
          <ScrollView style={{flex: 1}}>
            <FlatList
              data={data}
              renderItem={RenderItem}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
            />
          </ScrollView>
          <View>
            <Text style={ServiceStyle.heading}>Muscle Training</Text>
            <View style={ServiceStyle.subContainer}>
              <Text style={ServiceStyle.subheading}>About Service</Text>
              <Text style={ServiceStyle.para}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis eveniet maxime tempora rem sunt. Beatae sed, non
                consequuntur magni id reprehenderit odio dolore quibusdam nihil
                harum! Reprehenderit laboriosam ipsa quis!Lorem Aliquid deleniti
                excepturi ratione unde ut ab omnis rem. Dignissimos incidunt
                fugit, non suscipit minima architecto quis voluptate
                rerum,tempore minus voluptatibus!
              </Text>
              <View style={ServiceStyle.subSubContainer}>
                <Text style={ServiceStyle.para}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officiis eveniet maxime tempora rem sunt. Beatae sed, non
                  consequuntur magni id reprehenderit odio dolore quibusdam
                  nihil harum! Reprehenderit laboriosam ipsa quis!Lorem Aliquid
                  deleniti excepturi ratione unde ut ab omnis rem. Dignissimos
                  incidunt fugit, non suscipit minima architecto quis voluptate
                  rerum,tempore minus voluptatibus!
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
        <BottomBtn
          text="Get Subscription Details"
          onPress={() => {
            navigation.navigate('SubscribptionDetails');
          }}
        />
      </View>
  );
};

const ServiceStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    rowGap: 10,
    flexDirection: 'column',
  },
  subContainer: {
    rowGap: 10,
    margin: 15,
  },
  subSubContainer: {},
  heading: {
    color: colors.black,
    fontSize: 19,
    letterSpacing: 0.37,
    marginTop: 10,
    marginLeft: 10,
  },
  subheading: {
    color: 'black',
    fontWeight: '600',
    fontSize: 12,
    letterSpacing: 0.31,
  },
  para: {
    color: 'black',
    fontWeight: '300',
    fontSize: 11,
    letterSpacing: 0.26,
  },
});

export default ServiceDetails;
