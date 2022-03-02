import { createStackNavigator } from '@react-navigation/stack';
import {Button, Image, Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import OptionsScreen from './OptionsScreen';
import OptionInformation from './OptionInformation';
import { TransitionPresets } from '@react-navigation/stack';
import Images from '../assets/Images';
import HomeScreen from '../Screens/HomeScreen';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
//import CheckoutModal from '../Screens/HomeScreen';



const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 30 }}
      source={Images.YTLogo}
    />
  );
}


// const threeButtonAlert = (navigation) => {
//     Alert.alert(
//       "Would you like to save this celebration?",
//       "",
//       [
//         {
//           text: "Yes, save my celebration",
//           onPress: () => navigation.navigate('HomeScreen')
//         },
//         { text: "No, don't save", onPress: () =>  navigation.navigate('HomeScreen') },
//         {
//           text: "Cancel",
//           onPress: () => console.log("Cancel Pressed"),
//           style: "cancel"
//         }
        
//       ]
//     );
// }

export default function OptionsStack() {
  return (
    <Stack.Navigator
      screenOptions= {() => ({
        headerShown: false,
        //add buttons inside of you header here
      })}>
      <Stack.Screen name="Add-ons!" component={OptionsScreen} 
        // options={{
        //   headerTitle: (props) => <LogoTitle {...props} />,
        //   headerLeft: (props) => {          
        //     const navigation = useNavigation();
        //   return(
        //     <Button 
        //     title={"Home"} 
        //     onPress={() => threeButtonAlert(navigation)}
        //     />
        //   )},
        //   headerRight: (props) => {          
        //     const navigation = useNavigation();
        //     return(
        //     <Button 
        //     title={"Checkout"} 
        //     onPress={() => navigation.navigate('CheckoutScreen')}
        //     />
        //   )},
        // }}
      />
      <Stack.Screen name="AcrobatsScreen" component={OptionInformation} 
        options={{
          title: 'Profile',
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen name="BalloonsScreen" component={OptionInformation} />
      <Stack.Screen name="ConfettiScreen" component={OptionInformation} />
    </Stack.Navigator>
  );
}


// style for the modal alone! 

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});