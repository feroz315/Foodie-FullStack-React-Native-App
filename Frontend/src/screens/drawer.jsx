
// import { Dimensions } from 'react-native';
import { createDrawerNavigator }  from "@react-navigation/drawer";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CustomDrawerContent from './drawerItem';
import { NavigationContainer } from '@react-navigation/native';
import Home from './home';

// import Search from "./search";


// const { width } = Dimensions.get("window")


// Initialize Navigators
const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
<NavigationContainer>        
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
              headerStyle: {
                backgroundColor: '#6C63FF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              drawerStyle: {
                width: 280,
              },
            }}
          >
            <Drawer.Screen name="Home" component={Home} />
          </Drawer.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};


export default DrawerNavigation;





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
//         
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
//         
//       </SafeAreaProvider>
//     </GestureHandlerRootView>
//   );
// };

// export default App;