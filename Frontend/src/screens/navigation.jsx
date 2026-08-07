import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {StatusBar} from 'react-native';


import Home from './home';
import ProductDetail from './productDetail';
import Cart from './cart';
import Checkout from './checkout';
import OrderForm from './order';
import DeliveryMap from './deliveryMap';
import DrawerNavigation from './drawer';


// Initialize Navigators
const Stack = createStackNavigator();


const StackNavigation = () => {
  return (
<>
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
        {/* <Stack.Screen name="search" component={Search} /> */}
        <Stack.Screen name="cart" component={Cart} />
        <Stack.Screen name="checkout" component={Checkout} />
        <Stack.Screen name="order" component={OrderForm} />
        <Stack.Screen name="map" component={DeliveryMap} />
        <Stack.Screen name="drawer" component={DrawerNavigation} /> 
        
      </Stack.Navigator>
  </>

  );
};



export default StackNavigation;




// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import HomeScreen from './screens/HomeScreen';
// import CustomDrawerContent from './components/CustomDrawerContent';

// const Drawer = createDrawerNavigator();

// const App = () => {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <SafeAreaProvider>
//         <NavigationContainer>
//           <Drawer.Navigator
//             drawerContent={(props) => <CustomDrawerContent {...props} />}
//             screenOptions={{
//               headerStyle: {
//                 backgroundColor: '#6C63FF',
//               },
//               headerTintColor: '#fff',
//               headerTitleStyle: {
//                 fontWeight: 'bold',
//               },
//               drawerStyle: {
//                 width: 280,
//               },
//             }}
//           >
//             <Drawer.Screen name="Home" component={HomeScreen} />
//             <Drawer.Screen name="Categories" component={HomeScreen} />
//             <Drawer.Screen name="Favorites" component={HomeScreen} />
//             <Drawer.Screen name="Settings" component={HomeScreen} />
//           </Drawer.Navigator>
//         </NavigationContainer>
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   );
// };

// export default App;