import React from "react";
import Home from "../screens/userHome/home";
import AddSkills from "../screens/userHome/addSkills";
import AllSkills from "../screens/userHome/allSkills";
import EditSkills from "../screens/userHome/editSkills";
import AllUsers from "../screens/userHome/allUsers";
import AddProjects from "../screens/userHome/addProjects";
import AllProjects from "../screens/userHome/allProjects";
import EditProjects from "../screens/userHome/editProjects";

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
            <AppStack.Screen name="AddSkills" component={AddSkills} options={{headerShown: false}} />
            <AppStack.Screen name="AllSkills" component={AllSkills} options={{headerShown: false}} />
            <AppStack.Screen name="EditSkills" component={EditSkills} options={{headerShown: false}} />
            <AppStack.Screen name="AllUsers" component={AllUsers} options={{headerShown: false}} />
            <AppStack.Screen name="AddProjects" component={AddProjects} options={{headerShown: false}} />
            <AppStack.Screen name="AllProjects" component={AllProjects} options={{headerShown: false}} />
            <AppStack.Screen name="EditProjects" component={EditProjects} options={{headerShown: false}} />
        </AppStack.Navigator>
    )
        // : navigation.push('Login');
    
}

export default AppRoutes;