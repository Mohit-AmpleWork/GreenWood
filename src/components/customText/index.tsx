import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Double, Float } from 'react-native/Libraries/Types/CodegenTypes';

const Title = ({text}: {text: string}) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    letterSpacing: 0.83,
    color: '#797979',
    marginLeft: 5,
  },
});

const Labels = ({text, fontsize, letterspacing, Color}: {text: string, fontsize: number, letterspacing: Float, Color: string}) => {
  return (
    <Text
      style={{
        fontSize: fontsize,
        letterSpacing: letterspacing,
        color: `${Color}`
      }}>
      {text}
    </Text>
  );
};

const CustomText = {
  Primary: {

  }
}
 
export {Title, Labels };
