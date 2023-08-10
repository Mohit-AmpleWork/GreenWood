import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {BottomBtn} from '../../components/button';
import {ServiceImg} from '../../components/image';

const ServiceDetails = ({navigation}: {navigation: any}) => {
  const data: Array<Object> = [
    {
      id: 1,
      img: require('../../assets/images/cardio.jpeg'),
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
            <Text style={ServiceStyle.txt1}>Muscle Training</Text>

            <View style={ServiceStyle.subContainer}>
              <Text style={ServiceStyle.txt3}>About Service</Text>
              <Text style={ServiceStyle.txt4}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis eveniet maxime tempora rem sunt. Beatae sed, non
                consequuntur magni id reprehenderit odio dolore quibusdam nihil
                harum! Reprehenderit laboriosam ipsa quis!Lorem Aliquid deleniti
                excepturi ratione unde ut ab omnis rem. Dignissimos incidunt
                fugit, non suscipit minima architecto quis voluptate
                rerum,tempore minus voluptatibus!
              </Text>
              <View style={ServiceStyle.subSubContainer}>
                <Text style={ServiceStyle.txt4}>
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
    backgroundColor: 'white',
    rowGap: 10,
    flexDirection: 'column',
  },
  subContainer: {
    rowGap: 10,
    margin: 15,
  },
  subSubContainer: {},
  txt1: {
    color: 'black',
    fontSize: 19,
    letterSpacing: 0.37,
    marginTop: 10,
    marginLeft: 10,
  },
  txt2: {
    color: '#54940a',
    fontSize: 19,
    letterSpacing: 0.37,
    marginHorizontal: 10,
  },
  txt3: {
    color: 'black',
    fontWeight: '600',
    fontSize: 13,
    letterSpacing: 0.31,
  },
  txt4: {
    color: 'black',
    fontWeight: '300',
    fontSize: 11,
    letterSpacing: 0.26,
  },
  txt5: {
    color: 'black',
    fontWeight: '600',
    fontSize: 12,
    letterSpacing: 0.31,
    marginTop: 20,
  },
});

export default ServiceDetails;
