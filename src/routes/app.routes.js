import React from "react";
import Home from "../screens/userHome/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AppStack = createNativeStackNavigator();

const AppRoutes = () => {
    return(
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} />
            
        </AppStack.Navigator>
    )
}

export default AppRoutes;