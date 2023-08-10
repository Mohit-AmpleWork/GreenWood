import React from 'react';
import {Keyboard, Modal, StatusBar, StyleSheet, View} from 'react-native';
import {BottomBtn} from '../../../../components/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {s, vs, ms, mvs} from 'react-native-size-matters';

const PayProcess = ({visible, onPress}: {visible: any; onPress: any}) => {
  return (
    <KeyboardAwareScrollView>
      <Modal visible={visible} transparent={true} focusable={true}>
        <StatusBar hidden={true} />
        <View style={styles.container}>
          <BottomBtn text="Proceed" onPress={onPress} />
        </View>
      </Modal>
    </KeyboardAwareScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: ms(375),
    height: mvs(316),
    marginTop: 315,
  },
});

export default PayProcess;
