import { Provider } from 'react-redux';
import Navigation from "./src/screens/navigation";
import { store } from "./src/state/Store";
// import { Text } from "react-native";

const App = () => {
 return (
<>

  <Provider store={store}>    
    <Navigation />
       </Provider>
      <Toast />
    
          {/* <Text style={{ textAlign:'center',marginTop:100}}>Welcome New Project</Text> */}
</>
 
   );
}


export default App;