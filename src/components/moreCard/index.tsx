import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { vs, ms } from 'react-native-size-matters/extend'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../../themes/colors'

const MoreCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.personalphoto}>
        <Image source={require('../../assets/images/muscle.webp')} width={130} height={130} resizeMode='cover' style={styles.personalphoto} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: vs(288),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  personalphoto: {
    width: ms(130),
    height: ms(130),
    borderRadius: 100,
    backgroundColor: 'white',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.white,
    borderWidth: 2
  },
  
})

export default MoreCard
