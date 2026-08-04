import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator }  from "@react-navigation/drawer";
import {StatusBar} from 'react-native';


import Home from './home';
import ProductDetail from './productDetail';
import Search from './search';
import Cart from './cart';
import Checkout from './checkout';
import OrderForm from './order';
import DeliveryMap from './deliveryMap';


// Initialize Navigators
// const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();


//  Create the Nested Stack for the Main Flow
// const HomeStackNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen 
//         name="search" 
//         component={Search} 
//         options={{ title: 'Global Search' }}
//       />
//     </Stack.Navigator>
//   );
// }

const Navigation = () => {
  return (

// {/* <NavigationContainer>
//       <Drawer.Navigator screenOptions={{ headerShown: false }}>
//         {/* Hide Drawer Header because Stack Navigator will manage its own header */}
//         <Drawer.Screen 
//           name="home" 
//           component={HomeStackNavigator} 
//           options={{ drawerLabel: 'Home Dashboard' }}
//         />
      
//       </Drawer.Navigator>
//     </NavigationContainer> */}

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
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="order" component={OrderForm} />
        <Stack.Screen name="map" component={DeliveryMap} />
        
        
      </Stack.Navigator>
    </NavigationContainer>

  );
};



export default Navigation;
