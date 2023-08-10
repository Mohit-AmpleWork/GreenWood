/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

 import React from 'react';
 import type {PropsWithChildren} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import {NavigationContainer} from '@react-navigation/native';
 import StackNav from './src/navigation/stackNav';
 import RNBootSplash from 'react-native-bootsplash';
 // import { enableScreens } from 'react-native-screens';
 
 // enableScreens(true);
 
 function App(): JSX.Element {
   React.useEffect(() => {
     RNBootSplash.hide({fade: true, duration: 500});
     console.log('BootSplash has been hidden successfully');
   }, []);
 
   return (
     <View style={{flex: 1}}>
       <NavigationContainer>
         <StackNav />
       </NavigationContainer>
     </View>
   );
 }
 
 export default App;
 