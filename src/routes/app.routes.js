import React from "react";
import Home from "../screens/userHome/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from "@react-navigation/core";


const AppStack = createNativeStackNavigator();

const AppRoutes = () => {

    // const navigation = useNavigation();

    // const isLogged = !!AsyncStorage.getItem("auth_token");
    // return isLogged ? 
    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} options={{headerShown: false}} />
        </AppStack.Navigator>
    )
        // : navigation.push('Login');
    
}

export default AppRoutes;