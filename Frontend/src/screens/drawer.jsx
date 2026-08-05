
import { Dimensions } from 'react-native';
import { createDrawerNavigator }  from "@react-navigation/drawer";
import Search from "./search";




const { width } = Dimensions.get("window")


// Initialize Navigators
const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (

 <Drawer.Navigator
        drawerPosition="right" // This makes it a right drawer
        screenOptions={{drawerType:"front",drawerStyle: { width: width * 0.7 }, headerShown: false }}>
      
        <Drawer.Screen name="search" component={Search} />
      </Drawer.Navigator>


  );
};



export default DrawerNavigation;
