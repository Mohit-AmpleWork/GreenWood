import RNDateTimePicker from '@react-native-community/datetimepicker';
import {BottomBtn} from 'components/button';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import ReactNativeCalendarStrip from 'react-native-calendar-strip';
import Modal from 'react-native-modal';
import colors from 'themes/colors';

const DealModal = ({
  visible,
  onSwipe,
  onPress,
}: {
  visible: boolean;
  onSwipe: any;
  onPress: any;
}) => {
  return (
    <Modal isVisible={visible} onSwipeComplete={onSwipe} swipeDirection="down">
      <View style={styles.container}>
        <ReactNativeCalendarStrip
          scrollable
          style={{
            height: 200,
            paddingTop: 20,
            paddingBottom: 10,
            marginTop: '150%',
          }}
          calendarColor={colors.white}
          calendarHeaderStyle={{color: colors.black}}
          dateNumberStyle={{color: colors.black}}
          dateNameStyle={{color: 'black'}}
          calendarAnimation={{type: 'sequence', duration: 30}}
          daySelectionAnimation={{
            type: 'border',
            duration: 200,
            borderWidth: 1,
            borderHighlightColor: 'white',
          }}
          // highlightDateNumberContainerStyle={{ backgroundColor: colors.secondary }}
          // highlightDateNumberStyle={{backgroundColor: colors.secondary}}
          // highlightDateNameStyle={{color: colors.secondary}}
          iconContainer={{flex: 0.1}}
          highlightDateContainerStyle={{ backgroundColor: colors.secondary }}
        />
        <RNDateTimePicker value={new Date()}  />
        <BottomBtn text="Schedule it" onPress={onPress} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default DealModal;
