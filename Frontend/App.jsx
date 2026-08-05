import { Provider } from 'react-redux';
import StackNavigation from "./src/screens/navigation";
import { NavigationContainer } from '@react-navigation/native';

import { store } from "./src/state/Store";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
 return (
<>
  <Provider store={store}>    
   <NavigationContainer>
    <StackNavigation />
    </NavigationContainer>
       </Provider> 
 
</>
 
   );
}


export default App;