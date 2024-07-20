import React, {useEffect} from 'react'
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Test from './src/screens/test/Test';
import HomeScreen from './src/screens/test/Home/HomeScreen';
import SavingsScreen from './src/screens/test/Savings/SavingsScreen';
import LoanScreen from './src/screens/test/Loan/LoanScreen';
import CustomIcon from './CustomIcon';
import { color } from 'react-native-elements/dist/helpers';
import SplashScreen from  "react-native-splash-screen";

import SignIn from './src/screens/main/login/SignIn';

const Stack = createNativeStackNavigator();

const Forum = () => {
    const Tab = createBottomTabNavigator();

    useEffect(() => {
      setTimeout(() => SplashScreen.hide(), 2000)
    })
  
    return(
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="Loan" component={SavingsScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Forum;