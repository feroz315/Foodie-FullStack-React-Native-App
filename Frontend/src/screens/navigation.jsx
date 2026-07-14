import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

// import Signup from '../screens/signup';
// import Login from '../screens/login';
// import ProductDetail from './details';
import Home from './home';
// import Cart from './cart';
// import Logout from './logout';
// import OrderForm from './order';

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
        {/* <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="productdetail" component={ProductDetail} />
        <Stack.Screen name="checkout" component={Chectout} />
        <Stack.Screen name="logout" component={Logout} />
        <Stack.Screen name="order" component={OrderForm} />
         */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
