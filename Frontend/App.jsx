import { Provider } from 'react-redux';
import Navigation from "./src/screens/navigation";

import { store } from "./src/state/Store";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
 return (
<>
  <Provider store={store}>    
  <GestureHandlerRootView style={{ flex: 1 }}> // add this line
    <Navigation />
    </GestureHandlerRootView>
       </Provider> 
 
</>
 
   );
}


export default App;