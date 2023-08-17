import React from 'react';
import {
  Pressable,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {s, vs, ms, mvs} from 'react-native-size-matters'
import colors from '../../themes/colors';

const Email = ({text, onPress}: {text: string; onPress: any}) => {
  return (
    <Pressable
      style={{
        width: ms(300),
        height: mvs(50),
        borderRadius: 6,
        backgroundColor: colors.primary,
        marginTop: 20,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: colors.white,
          textAlign: 'center',
          marginHorizontal: 84,
          marginVertical: 15,
        }}>
        {text}
      </Text>
    </Pressable>
  );
};

const FaceBook = () => {
  return (
    <Pressable
      style={{
        width: ms(140),
        height: mvs(50),
        borderRadius: 6,
        backgroundColor: colors.facebook,
        flexDirection: 'row',
        alignContent: 'center',
      }}>
      <Image
        source={require('../../assets/images/fb.png')}
        style={{
          width: 13,
          height: 23,
          marginHorizontal: 16,
          marginVertical: 13,
        }}
      />
      <Text
        style={{
          color: 'white',
          marginHorizontal: 7,
          marginVertical: 15,
          width: 81,
          height: 21,
        }}>
        Facebook
      </Text>
    </Pressable>
  );
};

const Google = () => {
  return (
    <Pressable
      style={{
        width: ms(140),
        height: mvs(50),
        borderRadius: 6,
        backgroundColor: 'tomato',
        flexDirection: 'row',
        alignContent: 'center',
      }}>
      <Image
        source={require('../../assets/images/google.png')}
        style={{
          width: 32,
          height: 21,
          marginHorizontal: 16,
          marginVertical: 13,
        }}
      />
      <Text style={{color: 'white', marginHorizontal: 7, marginVertical: 15}}>
        Google
      </Text>
    </Pressable>
  );
};

const SignedBtn = ({onPress, text}: {onPress: any; text: string}) => {
  return (
    <Pressable
      style={{
        width: 140,
        height: 50,
        borderRadius: 6,
        backgroundColor: colors.primary ,
        marginTop: 30,
      }}
      onPress={onPress}>
      <Text
        style={{
          color: colors.white,
          textAlign: 'center',
          marginHorizontal: 20,
          marginVertical: 15,
        }}>
        {text}
      </Text>
    </Pressable>
  );
};

const GoBack = ({onPress}: {onPress: any}) => {
  return (
    <TouchableOpacity style={{paddingTop: vs(73)}} onPress={onPress}>
      <Text style={{color: '#727272', textAlign: 'center'}}> {'<< '} Go Back </Text>
    </TouchableOpacity>
  );
};

const BottomBtn = ({onPress, text}: {onPress: any; text: string}) => {
  return (
    <Pressable
      style={{
        width: '100%',
        height: mvs(64),
        borderRadius: 2,
        backgroundColor: colors.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
      }}
      onPress={onPress}>
      <Text style={{color: 'white', fontSize: 19, fontWeight: '500'}}>{text}</Text>
    </Pressable>
  );
};

export {Email, FaceBook, Google, SignedBtn, GoBack,  BottomBtn};


// interface props {
//   primary: boolean;
//   secondary: boolean;
//   transparent: boolean;
//   text: string;
//   onPress: any;
// }

// const ButtonComponent = ({
//   primary,
//   secondary,
//   transparent,
//   text,
//   onPress
// }) => {
//   const buttonStyles = useMemo(
//     () => [
//       primary && styles.primary,
//       secondary && styles.secondary,
//       transparent && styles.transparent,
//     ],
//     [primary, secondary, transparent],
//   );
  // const titleStyles = useMemo(
  //   () => [
  //     primary && styles.primaryTitle,
  //     full && styles.fullTitle,
  //     secondary && styles.secondaryTitle,
  //     outline && styles.outlineTitle,
  //     titleStyle,
  //   ],
  //   [primary, full, secondary, outline, titleStyle],
  // );
  // return (
  //   <Pressable
  //     accessibilityLabel={text}
  //     buttonStyle={buttonStyles}
      // titleStyle={titleStyles}

//       style={{
//         width: 300,
//         height: 50,
//         borderRadius: 6,
//         backgroundColor: '#17c884',
//         marginTop: 20,
//       }}
//       onPress={onPress}>
//       <Text
//         style={{
//           color: 'white',
//           textAlign: 'center',
//           marginHorizontal: 84,
//           marginVertical: 15,
//         }}>
//         {text}
//       </Text>
//     </Pressable>
//   );
// };

// const styles = StyleSheet.create({
//   primary: {
//     backgroundColor: '#17c884',
//     height: 60,
//     borderRadius: 30,
//   },
//   secondary: {
//     backgroundColor: '',
//     borderWidth: 1,
//   },
//   transparent: {
//     backgroundColor: 'transparent',
//     borderWidth: 0,
//   },
// });

// export default ButtonComponent;