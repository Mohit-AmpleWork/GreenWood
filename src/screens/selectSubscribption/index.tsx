import React from 'react';
import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BottomBtn} from '../../components/button';
import {BuisnessImg, ServiceImg} from '../../components/image';
import {SubscribptionSelectCard} from '../../components/container';
import {s, vs, ms, mvs} from 'react-native-size-matters';

const SelectSubscribption = ({
  visible,
  onPress,
}: {
  visible: any;
  onPress: any;
}) => {
  const [selected, setSelected] = React.useState(null);

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
    {
      id: 6,
      cost: '$129',
      txt: '3',
    },
  ];

  const RenderItem = ({item}: {item: any}) => {
    const onClick = () => {
      setSelected(item.id);
    };
    const isSelected = selected === item.id;
    const bgColor = isSelected ? 'rgb(25,209,145)' : 'black';
    const color = isSelected ? 'white' : 'black';

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
    <Modal visible={visible} transparent={true}>
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
              // nestedScrollEnabled={true}
              onEndReachedThreshold={0.2}
              contentContainerStyle={{ paddingBottom: 200 }}
            />
            </View>
        <BottomBtn text="Buy Now" onPress={onPress} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: s(375),
    height: vs(499),
    marginTop: '50%',
  },
  card: {
    alignItems: 'center',
    rowGap: 10,
  },
});

export default SelectSubscribption;
