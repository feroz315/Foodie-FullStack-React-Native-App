import { createDrawerNavigator }  from "@react-navigation/drawer";
import Search from "./search";


// Initialize Navigators
const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (

 <Drawer.Navigator
        drawerPosition="right" // This makes it a right drawer
        screenOptions={{
          headerShown: true,
          drawerType: 'front',
        }} > 
        <Drawer.Screen name="search" component={Search} />
      </Drawer.Navigator>


  );
};



export default DrawerNavigation;
