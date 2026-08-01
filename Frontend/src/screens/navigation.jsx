import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {StatusBar} from 'react-native';


import Home from './home';
import ProductDetail from './productDetail';
import Search from './search';
import Cart from './cart';
import Checkout from './checkout';
import OrderForm from './order';
import DeliveryMap from './deliveryMap';


// Initialize Navigators

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();



const HomwStackNavigator = () => {
  return (

   <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="home">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="productdetail" component={ProductDetail} />
        <Stack.Screen name="search" component={Search} />
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="order" component={OrderForm} />
        <Stack.Screen name="map" component={DeliveryMap} />
        {/* <Stack.Screen name="board" component={BoardScreen} /> */}
           
      </Stack.Navigator>

    )
    
  };


const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="home">
        {/* Instead of a regular screen, point the Drawer screen to the Stack Navigator */}
        <Drawer.Screen 
          name="home" 
          component={HomwStackNavigator} 
          options={{ drawerLabel: 'Home Dashboard' }}
        />
       </Drawer.Navigator>
    </NavigationContainer>
  )
};



export default Navigation;
