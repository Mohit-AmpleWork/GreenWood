import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {StoreContainer} from '../../../components/container';

const StoreCategory = ({
  onPress,
  horizontal,
  pagingEnabled,
  style,
  favorite,
}: {
  onPress: any;
  horizontal: boolean;
  pagingEnabled: boolean;
  style: object;
  favorite: boolean;
}) => {
  const data: Array<Object> = [
    {
      id: 1,
      img: require('../../../assets/images/cardio.jpeg'),
      txt: 'Entertainment',
    },
    {
      id: 2,
      img: require('../../../assets/images/fitness4.webp'),
      txt: 'Entertainment',
    },
    {
      id: 3,
      img: require('../../../assets/images/woman-fitness.webp'),
      txt: 'Entertainment',
    },
    {
      id: 4,
      img: require('../../../assets/images/muscle.webp'),
      txt: 'Entertainment',
    },
    {
      id: 5,
      img: require('../../../assets/images/fitness4.webp'),
      txt: 'Entertainment',
    },
    {
      id: 6,
      img: require('../../../assets/images/fitness4.webp'),
      txt: 'Entertainment',
    },
    {
      id: 7,
      img: require('../../../assets/images/muscle.webp'),
      txt: 'Entertainment',
    },
  ];

  const ComponentRenderItem = ({item}: {item: any}) => {
    return (
      <>
        <StoreContainer
          src={item.img}
          onPress={
            onPress //
          }
        />
        {favorite
        ? <Image source={require('../../../assets/images/shape2/shape.png')} style={{ position: 'absolute', margin: 10 }} /> 
        : null }
      </>
    );
  };

  return (
    <View >
      <FlatList
        data={data}
        renderItem={ComponentRenderItem}
        accessible={true}
        pagingEnabled={pagingEnabled}
        horizontal={horizontal}
        onEndReachedThreshold={0.2}
        contentContainerStyle={style}
      />
    </View>
  );
};

export default StoreCategory;
