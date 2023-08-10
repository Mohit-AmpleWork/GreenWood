import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {EventContainer} from '../../../components/container';

const EventCategories = ({horizontal, pageEnable, onPress, style}:{horizontal : boolean, pageEnable: boolean, onPress:any, style: object}) => {
  const data: Array<Object> = [
    {
      id: 1,
      img: require('../../../assets/images/event.jpeg'),
      txt: 'Entertainment',
      headline: "LOVE + PROPAGANDA SATURDAY'S (seriesgrp)",
      subheadline: "Davies Symphony Hall, San Francisco",
    },
    {
      id: 2,
      img: require('../../../assets/images/event.jpeg'),
      txt: 'Entertainment',
      headline: "LOVE + PROPAGANDA SATURDAY'S (seriesgrp)",
      subheadline: "Davies Symphony Hall, San Francisco",
    },
    {
      id: 3,
      img: require('../../../assets/images/event.jpeg'),
      txt: 'Entertainment',
      headline: "LOVE + PROPAGANDA SATURDAY'S (seriesgrp)",
      subheadline: "Davies Symphony Hall, San Francisco",
    },
    {
      id: 4,
      img: require('../../../assets/images/event.jpeg'),
      headline: "LOVE + PROPAGANDA SATURDAY'S (seriesgrp)",
      subheadline: "Davies Symphony Hall, San Francisco",
      txt: 'Entertainment',
    },
  ];

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        <EventContainer src={item.img} headline={item.headline} subHeadline={item.subheadline} text={item.txt} onPress={onPress}/>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={data} renderItem={renderItem} pagingEnabled={pageEnable} horizontal={horizontal} showsHorizontalScrollIndicator={false} contentContainerStyle={style}/>
    </View>
  );
};

export default EventCategories;
