import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../../components/header';
import InboxContainer from '../../../components/container/inboxContainer';

const Inbox = ({navigation}: {navigation: any}) => {
  const nav = () => navigation.navigate('Chat');

  return (
    <View style={styles.inbox}>
      <Header
        title="Inbox"
        onPress={() => {
          navigation.pop();
        }}
      />
      <InboxContainer
        src={require('../../../assets/images/gym_logo.jpeg')}
        brand="Gold's gym"
        text="Hi, there i would like to…"
        onPress={nav}
      />
      <InboxContainer
        src={require('../../../assets/images/gym_logo.jpeg')}
        brand="Gold's gym"
        text="Hi, there i would like to…"
        onPress={nav}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inbox: {
    backgroundColor: 'rgb(240,240,240)'
  }
})

export default Inbox;
