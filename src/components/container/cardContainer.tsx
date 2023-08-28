import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {s, vs, ms} from 'react-native-size-matters/extend';

const CardContainer = ({
  src,
  headline,
  subHeadline,
  text,
  onPress,
}: {
  src: string;
  headline: string;
  subHeadline: string;
  text: string;
  onPress: any;
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={styles.container}>
        <ImageBackground
          source={src ? {uri: src} : require('../../assets/images/muscle.webp')}
          style={styles.bgImage}
          resizeMode="cover"></ImageBackground>

        <View
          style={styles.subcontainer}>
          <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
            {headline}
          </Text>
          <Text style={{color: 'black'}}>{subHeadline}</Text>
          <Text style={{color: 'black', fontSize: 10}}>{text}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    height: vs(90),
    margin: 'auto',
    rowGap: 20,
    marginBottom: 10,
    borderBottomWidth: 5,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#eeeeee',
    backgroundColor: 'white',
  },
  bgImage: {width: ms(90), height: vs(86), margin: 0.5},
  subcontainer: {
    width: s(190),
    height: vs(38),
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 15,
  }
})

export default CardContainer;