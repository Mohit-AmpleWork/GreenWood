import React from 'react'
import {View,TouchableOpacity,Image} from 'react-native';
import {ms} from 'react-native-size-matters/extend'
import { Title } from '../customText';

const Header = ({onPress, title}: {onPress: any, title: string}) => {
  return (
    <View style={{backgroundColor: 'white', marginBottom: 11}}>
      <View
          style={{
            width: ms(340),
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center', 
            justifyContent: 'flex-start',
            marginVertical: 20,
            
          }}>
          <TouchableOpacity
            style={{margin: 15, width: 28, height: 18}}
            onPress={onPress}>
            <Image
              style={{tintColor: 'black'}}
              source={require('../../assets/images/path/path.png')}
            />
          </TouchableOpacity>
          <Title text={title}  />
         
        </View>
    </View>
  )
}

export default Header
