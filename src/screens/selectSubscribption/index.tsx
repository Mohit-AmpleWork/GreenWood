import React from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {BottomBtn} from '../../components/button';
import {SubscribptionSelectCard} from '../../components/container';
import {s, vs,ms} from 'react-native-size-matters';
import colors from '../../themes/colors';
import Modal from 'react-native-modal';

const SelectSubscribption = ({
  visible,
  onPress,
  onSwipe,
}: {
  visible: any;
  onPress: any;
  onSwipe: any;
}) => {
  const [selected, setSelected] = React.useState(1);

  const Data: Array<Object> = [
    {
      id: 1,
      cost: '$45',
      txt: '1',
    },
    {
      id: 2,
      cost: '$99',
      txt: '2',
    },
    {
      id: 3,
      cost: '$129',
      txt: '3',
    },
    {
      id: 4,
      cost: '$45',
      txt: '1',
    },
    {
      id: 5,
      cost: '$99',
      txt: '2',
    },
  ];

  const RenderItem = ({item}: {item: any}) => {
    const onClick = () => {
      setSelected(item.id);
    };
    const isSelected = selected === item.id;
    const bgColor = isSelected ? 'rgb(25,209,145)' : 'black';

    return (
      <SubscribptionSelectCard
        Color={bgColor}
        cost={item.cost}
        year={item.txt}
        onPress={onClick}
      />
    );
  };

  return (
    <View >
    <Modal isVisible={visible} onSwipeComplete={onSwipe} swipeDirection='down'>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <View>
          <BottomBtn text="Select Subscribption" onPress={onPress} />
        </View>
          <View style={styles.card} >
            <FlatList
              data={Data}
              renderItem={RenderItem}
              showsVerticalScrollIndicator={false}
              onEndReachedThreshold={0.2}
              contentContainerStyle={{ paddingBottom: 150 }}
            />
            </View>
        <BottomBtn text="Buy Now" onPress={onPress} />
      </View>
    </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: ms(316),
    marginTop: '75%',
  },
  card: {
    // alignItems: 'center',
    rowGap: 10,
  },
});

export default SelectSubscribption;
