import React from "react";
import Login from "../screens/login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/forgotPassword";
import ResetPassword from "../screens/resetPassword";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useNavigation } from "@react-navigation/core";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {

//   const navigation = useNavigation();

//     const isLogged = !AsyncStorage.getItem("auth_token");
//     return isLogged ? 
return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <AuthStack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown: false}} />
            <AuthStack.Screen name="ResetPassword" component={ResetPassword} options={{headerShown: false}} />
        </AuthStack.Navigator>
)
    // : navigation.push('Home');


}

export default AuthRoutes;