import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import Country from '../screens/Country';
import Weather from '../screens/Weather';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title:"Home",
            headerStyle: {
              backgroundColor:"#d1d1d1"
            }
          }}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={{
            title:"Country",
            headerStyle: {
              backgroundColor:"#d1d1d1"
            }
          }}
        />
        <Stack.Screen
        name="Weather"
          component={Weather}
          options={{
            title:"Weather",
            headerStyle: {
              backgroundColor:"#d1d1d1"
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;