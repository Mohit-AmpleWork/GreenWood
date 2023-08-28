import React from 'react';
import {
  ImageBackground,
  ImageURISource,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {ms} from 'react-native-size-matters/extend';

const EventContainer = ({
  src,
  headline,
  subHeadline,
  text,
  onPress,
}: {
  src: ImageURISource;
  headline: string;
  subHeadline: string;
  text: string;
  onPress: any;
}) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground
          source={src}
          style={styles.bgImage}
          resizeMode="stretch"></ImageBackground>
        <View style={styles.subcontainer}>
          <Text style={{color: 'black', fontSize: 13, fontWeight: 'bold'}}>
            {headline}
          </Text>
          <Text style={{color: 'black'}}>{subHeadline}</Text>
          <Text style={{color: 'black', fontSize: 10}}>{text}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 5,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderColor: '#eeeeee',
    marginBottom: 10,
    flexDirection: 'row',
    width: '100%',
    height: ms(110),
    borderRadius: 4,
    backgroundColor: 'white',
  },
  bgImage: {width: ms(100), height: ms(105), margin: 'auto'},
  subcontainer: {
    width: 190,
    height: 38,
    alignItems: 'flex-start',
    marginLeft: 20,
    marginTop: 15,
  },
});

export default EventContainer;
