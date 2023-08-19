import React from 'react';
import {Image, StatusBar, StyleSheet, TextInput, View} from 'react-native';
import {BottomBtn} from '../../../../components/button';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {s, vs, ms, mvs} from 'react-native-size-matters';
import {Labels} from '../../../../components/customText';
import Modal from 'react-native-modal';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import colors from '../../../../themes/colors';

const PayProcess = ({
  visible,
  onPress,
  onSwipe,
}: {
  visible: any;
  onPress: any;
  onSwipe: any;
}) => {
  return (
    <View>
      <Modal
        isVisible={visible}
        swipeDirection="down"
        onSwipeComplete={onSwipe}>
        <KeyboardAwareScrollView>
          <StatusBar hidden={true} />
          <View style={styles.container}>
            <View style={styles.cardText}>
              <Labels
                text="Credit/Debit Card Details"
                fontsize={17}
                letterspacing={0.47}
                Color="rgb(51,51,51)"
              />
            </View>
            <View style={{ alignItems: 'center' }}>
              <TextInput placeholder='xxxx-xxxx-xxxx-xxxx' placeholderTextColor='rgb(51,51,51)' style={styles.input} >
              </TextInput>
              <View style={{ flexDirection: 'row' }} >
              <TextInput placeholder='MM-YY' placeholderTextColor='rgb(51,51,51)' style={styles.secInputOne} >
              </TextInput>
              <TextInput placeholder='CCV' placeholderTextColor='rgb(51,51,51)' style={styles.secInputTwo} >
              </TextInput>
              </View>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png',
                }}
                width={94}
                height={75}
                resizeMode="stretch"
                style={{ opacity: 0.5 }}
              />
            </View>
            <BottomBtn text="Proceed" onPress={onPress} />
          </View>
        </KeyboardAwareScrollView>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    width: '100%',
    height: ms(316),
    marginTop: vs(315),
  },
  cardText: {
    padding: 30,
  },
  input: {
    height: 50,
    width: ms(300),
    padding: 10,
    margin: 4,
    marginBottom: 0,
    borderColor: 'rgba(0,0,0,0.54)' ,
    backgroundColor: 'rgb(246,246,246)' 
  },
  secInputOne: {
    height: 50,
    width: ms(170),
    paddingLeft: 10,
    borderColor: 'rgba(0,0,0,0.54)',
    backgroundColor: 'rgb(246,246,246)' 
  },
  secInputTwo: {
    height: 50,
    width: ms(130),
    padding: 10,
    borderColor: 'rgba(0,0,0,0.54)' ,
    backgroundColor: 'rgb(246,246,246)' 
  }
});

export default PayProcess;
