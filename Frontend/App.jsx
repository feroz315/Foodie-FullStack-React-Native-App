import { Provider } from 'react-redux';
import StackNavigation from "./src/screens/navigation";
// import { NavigationContainer } from '@react-navigation/native';
import { store } from "./src/state/Store";
import DrawerNavigation from './src/screens/drawer';


const App = () => {
 return (
<>
  <Provider store={store}>    
   {/* <NavigationContainer> */}
    <DrawerNavigation />
    {/* </NavigationContainer> */}
       </Provider> 
 
</>
 
   );
}


export default App;