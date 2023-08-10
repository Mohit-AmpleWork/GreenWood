import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {CardContainer, EventContainer} from '../../../components/container';

const DealCategories = ({
  horizontal,
  pageEnable,
  onPress,
  style,
}: {
  horizontal: boolean;
  pageEnable: boolean;
  onPress: any;
  style: object
}) => {
  const data: Array<Object> = [
    {
      id: 1,
      img: 'https://t3.ftcdn.net/jpg/02/00/87/86/360_F_200878690_TcNFVjD7FqAR9gADMZrG8ygXQq86oVi7.jpg',
      txt: 'Gold’s gym',
      headline: 'Flat 25% OFF on Freeletics',
      subheadline: 'New Members Only',
    },
    {
      id: 2,
      img: 'https://media.istockphoto.com/id/1150388959/photo/co-ed-gym-workout.jpg?s=612x612&w=is&k=20&c=bz15Vl83427UN7xrw7ZU_1yLnMflXDlwvgLo9M8NNNE=',
      txt: 'Gold’s gym',
      headline: 'Flat 25% OFF on Freeletics',
      subheadline: 'New Members Only',
    },
    {
      id: 3,
      img: 'https://media.istockphoto.com/id/1252619764/photo/young-fitness-women-working-out-with-dumbbells.jpg?s=612x612&w=is&k=20&c=GTpgI65xX2etDPguf9tfv_aJzpPneNKiggJnu_BMgE4=',
      txt: 'Gold’s gym',
      headline: 'Flat 25% OFF on Freeletics',
      subheadline: 'New Members Only',
    },
    {
      id: 4,
      img: 'https://t3.ftcdn.net/jpg/02/00/87/86/360_F_200878690_TcNFVjD7FqAR9gADMZrG8ygXQq86oVi7.jpg',
      txt: 'Gold’s gym',
      headline: 'Flat 25% OFF on Freeletics',
      subheadline: 'New Members Only',
    },
  ];

  const renderItem = ({item}: {item: any}) => {
    return (
      <View>
        <CardContainer
          src={item.img}
          headline={item.headline}
          subHeadline={item.subheadline}
          text={item.txt}
          onPress={onPress}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        pagingEnabled={pageEnable}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style}
      />
    </View>
  );
};

export default DealCategories;
