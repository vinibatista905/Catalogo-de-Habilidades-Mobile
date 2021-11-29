import React from "react";
import Login from "../screens/login";
import Register from "../screens/Register";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <AuthStack.Screen name="Register" component={Register} options={{headerShown: false}} />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes;