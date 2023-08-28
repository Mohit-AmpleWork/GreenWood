import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Categories} from '../container/customContainers';
import {s, vs, ms} from 'react-native-size-matters/extend';
import colors from '../../themes/colors';

const Data: Array<Object> = [
  {
    id: 1,
    img: require('../../assets/images/shape/shape.png'),
    txt: 'Entertainment',
    BGcolor: ' rgb(254,122,68)',
  },
  {
    id: 2,
    img: require('../../assets/images/shape/shape.png'),
    txt: 'Technology',
    BGcolor: 'rgb(243,177,99) ',
  },
  {
    id: 3,
    img: require('../../assets/images/shape/shape.png'),
    txt: 'WorkOut',
    BGcolor: ' rgb(59, 89, 152)',
  },
  {
    id: 4,
    img: require('../../assets/images/shape/shape.png'),
    txt: 'Entertainment',
    BGcolor: 'rgb(247, 151, 65) ',
  },
  {
    id: 5,
    img: require('../../assets/images/shape/shape.png'),
    txt: 'Entertainment',
    BGcolor: ' rgb(243,177,99)',
  },
];

const CategoriesComponent = () => {
  const [selected, setSelected] = React.useState(1);

  const RenderItem = ({item}: {item: any}) => {
    const isSelected = selected === item.id;
    const bgColor = isSelected ? 'rgb(25,209,145)' : 'white';
    const color = isSelected ? 'white' : 'black';

    return (
      <Categories
        text={item.txt}
        color={color}
        bgcolor={bgColor}
        src={item.img}
        onPress={() => {
          setSelected(item.id);
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={Data}
        renderItem={RenderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight: 15}}
      />
    </View>
  );
};

const ExplorerCategories = () => {
  const renderItem = ({item}: {item: any}) => {
    return (
      <View style={{rowGap: 10}}>
        <Categories
          text={item.txt}
          color={colors.white}
          bgcolor={item.BGcolor}
          src={item.img}
          onPress={() => {
            Alert.alert(item.txt);
          }}
        />
        <Categories
          text={item.txt}
          color="white"
          bgcolor={item.BGcolor}
          src={item.img}
          onPress={() => {
            Alert.alert(item.txt);
          }}
        />
      </View>
    );
  };

  return (
    <ScrollView
      scrollEnabled={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <TouchableWithoutFeedback onPress={() => {}}>
            <View
              style={{
                width: s(150),
                height: s(150),
                backgroundColor: colors.orange,
                borderRadius: 4,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{width: s(27), height: s(27), padding: ms(5)}}
                source={require('../../assets/images/star/path.png')}
                resizeMode="stretch"
              />
              <Text
                style={{
                  fontSize: 15,
                  color: colors.white,
                  fontWeight: 'bold',
                  marginTop: 10,
                }}>
                Dining
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <View>
            <FlatList
              data={Data}
              renderItem={renderItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{paddingRight: 15}}
              scrollEnabled={false}
            />
          </View>
        </View>
      </ScrollView>
    </ScrollView>
  );
};

export {CategoriesComponent, ExplorerCategories};
