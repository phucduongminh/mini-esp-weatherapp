import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import InputScreen from './screens/InputScreen';
import ListScreen from './screens/ListScreen';

const Stack = createNativeStackNavigator ();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Input">
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//import { StatusBar } from 'expo-status-bar';
//import Weather from './screens/Weather';
/* <View style={styles.container}>
      <Weather />
      <StatusBar style="auto" />
    </View> */
