import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import {BottomBtn} from '../../components/button';
import {BuisnessImg} from '../../components/image';
import SelectSubscribption from '../selectSubscribption';
import {Brand} from '../../components/container/customContainers';
import {ScrollView} from 'react-native';
import ServiceHeader from '../../components/header/serviceHeader';

const SubscribtionDetails = ({navigation}: {navigation: any}) => {
  const [isModal, setIsModal] = React.useState(false);

  return (
    <View style={SubsriptionStyle.container}>
      <ScrollView>
        <StatusBar hidden={true} />
        <BuisnessImg src={require('../../assets/images/woman-fitness.webp')} />
        <ServiceHeader onPressArrow={()=>{navigation.pop()}} />
        <View style={SubsriptionStyle.subContainer}>
          <Text style={SubsriptionStyle.txt1}>
            New Yearly Membership just in 999
          </Text>
          <Text style={SubsriptionStyle.txt2}>$999.00</Text>
          <View style={SubsriptionStyle.subContainer}>
            <Text style={SubsriptionStyle.txt3}>About Service</Text>
            <Text style={SubsriptionStyle.txt4}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
              eveniet maxime tempora rem sunt. Beatae sed, non consequuntur
              magni id reprehenderit odio dolore quibusdam nihil harum!
              Reprehenderit laboriosam ipsa quis!Lorem Aliquid deleniti
              excepturi ratione unde ut ab omnis rem. Dignissimos incidunt
              fugit, non suscipit minima architecto quis voluptate rerum,tempore
              minus voluptatibus!
            </Text>
            <Brand
              src={require('../../assets/images/talkwalker.jpeg')}
              brand="Talkwalkers"
              text="231 Products"
            />
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => {
            setIsModal(false);
          }}>
          <SelectSubscribption
            visible={isModal}
            onSwipe={() => {
              setIsModal(false);
            }}
            onPress={() => {navigation.navigate('Checkout')}}
          />
        </TouchableWithoutFeedback>
      </ScrollView>
      <BottomBtn
        text="Get New Subscription"
        onPress={() => {
          setIsModal(true);
        }}
      />
    </View>
  );
};

const SubsriptionStyle = StyleSheet.create({
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
  txt1: {
    color: 'black',
    fontSize: 19,
    letterSpacing: 0.37,
    marginLeft: 10,
  },
  txt2: {
    color: '#54940a',
    fontSize: 19,
    letterSpacing: 0.37,
    marginLeft: 10,
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
});

export default SubscribtionDetails;
