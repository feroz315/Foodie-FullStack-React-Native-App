import { Provider } from 'react-redux';
import Navigation from "./src/screens/navigation";

import { store } from "./src/state/Store";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
 return (
<>
  <Provider store={store}>    
    <Navigation />
       </Provider> 
 
</>
 
   );
}


export default App;