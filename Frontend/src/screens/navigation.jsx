import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

// import Login from '../screens/login';
// import ProductDetail from './details';
import Home from './home';
import ProductDetail from './productDetail';
import Search from './search';



const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="home">
        {/* <Stack.Screen name="board" component={BoardScreen} /> */}
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="productdetail" component={ProductDetail} />
        <Stack.Screen name="search" component={Search} />
        {/* <Stack.Screen name="signup" component={Signup} />
         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
