import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { colors } from '../styles/colors';
import {Images} from "../assets/Images"
import CustomText from '../components/CustomText';
import { fontsFamily } from '../assets/Fonts';

const { width } = Dimensions.get("window")


export function DrawerItems(props) {


  return (
    <View style={{ flex: 1 ,backgroundColor:colors.primary}}>
      <DrawerContentScrollView contentContainerStyle={{ flexGrow: 1 }}>

      <View style={{ flex: 1 }}>
      <TouchableOpacity style={{ width: 70, paddingVertical: 8, paddingLeft: 15 }} onPress={() => props.navigation.closeDrawer()}>
        <Image source={Images.metrocancel} resizeMode="contain" style={{width: width * 0.042,marginLeft:5}}/>
      
      </TouchableOpacity>
           
         <View style={{marginTop:30,paddingHorizontal:10,marginLeft:20}}>                
              <Image source={Images.maleuser} resizeMode="contain" 
              style={{width:width*0.25,height:width*0.25}}/>
            <CustomText
            numberOfLines={1}
            ellipsizeMode="tail"
              fontWeight={fontsFamily.semiBold}
              style={{color: colors.white,fontSize: width * 0.050,marginTop:20}}>
              Mir Farasat
              </CustomText>
            
           <CustomText
              fontWeight={fontsFamily.light}
              style={{color: colors.white,fontSize: width * 0.035}}>
              +92 324 3546095
              </CustomText>


             </View>
            

            <View style={{flex:1,justifyContent:"center"}}>

             
         <DrawerItem
         style={styles.itemStyling}
            onPress={() => props.navigation.navigate('profile')}
            icon={() => (
            <Image 
            source={Images.featherinfo} 
            resizeMode="contain" 
            style={{width: width * 0.040,marginLeft:5}}/>
            )}
            label="About us"
            labelStyle={styles.itemText}
          /> 

           <DrawerItem
           style={styles.itemStyling}
              onPress={() => props.navigation.navigate('profile')}
              icon={() => (
              <Image 
              source={Images.termscondition} 
              resizeMode="contain" 
              style={{width: width * 0.040,marginLeft:5}}/>
              )}
              label="Terms & Condition"
              labelStyle={styles.itemText}
            /> 

          <DrawerItem
          style={styles.itemStyling}
             onPress={() => props.navigation.navigate('profile')}
             icon={() => (
             <Image 
             source={Images.locklocked} 
             resizeMode="contain" 
             style={{width: width * 0.040,marginLeft:5}}/>
             )}
             label="Privacy Policy"
             labelStyle={styles.itemText}
           /> 
            </View>


<DrawerItem
             onPress={() => props.navigation.navigate('login')}
             icon={() => (
             <Image 
             source={Images.exittoapp} 
             resizeMode="contain" 
             style={{width: width * 0.040,marginLeft:5}}/>
             )}
             label="Logout"
             labelStyle={styles.itemText}
           /> 

        </View>

      </DrawerContentScrollView>
    </View>
  )
}


const styles = StyleSheet.create({

itemText:{
  color:colors.white,
  fontSize:width*0.034,  
},
logout:{
  marginVertical:width*0.50,
  paddingHorizontal:50,
  flexDirection:'row'
},
customtext:{
  color: colors.white,
  fontSize: width * 0.038,
  marginLeft:15,
  marginTop:15
},
itemStyling:{
  height:40,
  justifyContent:"center"
}
})







// // components/CustomDrawerContent.js
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   TextInput,
//   FlatList,
//   Image,
//   SafeAreaView,
//   StatusBar,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

// // Sample drawer items data
// const drawerItems = [
//   { id: '1', name: 'Dashboard', icon: 'home-outline' },
//   { id: '2', name: 'Categories', icon: 'grid-outline' },
//   { id: '3', name: 'Favorites', icon: 'heart-outline' },
//   { id: '4', name: 'Orders', icon: 'cube-outline' },
//   { id: '5', name: 'Notifications', icon: 'notifications-outline' },
//   { id: '6', name: 'Settings', icon: 'settings-outline' },
//   { id: '7', name: 'Help', icon: 'help-circle-outline' },
//   { id: '8', name: 'About', icon: 'information-circle-outline' },
//   { id: '9', name: 'Logout', icon: 'log-out-outline' },
// ];

// const CustomDrawerContent = (props) => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredItems, setFilteredItems] = useState(drawerItems);

//   const handleSearch = (text) => {
//     setSearchQuery(text);
//     if (text.trim() === '') {
//       setFilteredItems(drawerItems);
//     } else {
//       const filtered = drawerItems.filter(item =>
//         item.name.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredItems(filtered);
//     }
//   };

//   const renderDrawerItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.drawerItem}
//       onPress={() => {
//         // Handle navigation or action
//         console.log(`Selected: ${item.name}`);
//         props.navigation.closeDrawer();
//       }}
//     >
//       <Icon name={item.icon} size={24} color="#333" style={styles.itemIcon} />
//       <Text style={styles.itemText}>{item.name}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar barStyle="dark-content" />
//       <View style={styles.header}>
//         <Image
//           source={{ uri: 'https://via.placeholder.com/80' }}
//           style={styles.avatar}
//         />
//         <Text style={styles.userName}>John Doe</Text>
//         <Text style={styles.userEmail}>john.doe@example.com</Text>
//       </View>

//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <Icon name="search-outline" size={20} color="#666" style={styles.searchIcon} />
//         <TextInput
//           style={styles.searchInput}
//           placeholder="Search items..."
//           placeholderTextColor="#999"
//           value={searchQuery}
//           onChangeText={handleSearch}
//         />
//         {searchQuery.length > 0 && (
//           <TouchableOpacity onPress={() => handleSearch('')}>
//             <Icon name="close-circle" size={20} color="#666" />
//           </TouchableOpacity>
//         )}
//       </View>

//       {/* Drawer Items List */}
//       <FlatList
//         data={filteredItems}
//         renderItem={renderDrawerItem}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//         style={styles.list}
//         ListEmptyComponent={() => (
//           <View style={styles.emptyContainer}>
//             <Icon name="search-outline" size={50} color="#ccc" />
//             <Text style={styles.emptyText}>No items found</Text>
//           </View>
//         )}
//       />
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     padding: 20,
//     paddingTop: 10,
//     backgroundColor: '#6C63FF',
//     alignItems: 'center',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     marginBottom: 10,
//   },
//   avatar: {
//     width: 80,
//     height: 80,
//     borderRadius: 40,
//     borderWidth: 3,
//     borderColor: '#fff',
//     marginBottom: 8,
//   },
//   userName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   userEmail: {
//     fontSize: 14,
//     color: '#e0e0e0',
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0',
//     marginHorizontal: 16,
//     paddingHorizontal: 12,
//     borderRadius: 10,
//     marginBottom: 10,
//     height: 44,
//   },
//   searchIcon: {
//     marginRight: 10,
//   },
//   searchInput: {
//     flex: 1,
//     fontSize: 16,
//     color: '#333',
//   },
//   list: {
//     flex: 1,
//     paddingHorizontal: 10,
//   },
//   drawerItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 14,
//     paddingHorizontal: 16,
//     borderRadius: 10,
//     marginVertical: 2,
//   },
//   itemIcon: {
//     marginRight: 15,
//   },
//   itemText: {
//     fontSize: 16,
//     color: '#333',
//     fontWeight: '500',
//   },
//   emptyContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 50,
//   },
//   emptyText: {
//     fontSize: 16,
//     color: '#999',
//     marginTop: 10,
//   },
// });

// export default CustomDrawerContent;