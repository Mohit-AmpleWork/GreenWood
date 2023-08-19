import React from 'react'
import { Image, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native'
import MoreCard from '../../../components/moreCard'

const UserProfile = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView>
      <MoreCard />
      <View style={styles.path }>
      <TouchableOpacity
            style={{marginStart: 20, width: 28, height: 18}}
            onPress={ () => {navigation.pop()} }>
            <Image
              style={{tintColor: 'white'}}
              source={require('../../../assets/images/path/path.png')}
            />
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  path: {
    position: 'absolute',
    marginTop: 25
  }
})

export default UserProfile
