import React from "react";
import Home from "../screens/userHome/home";
import AddSkills from "../screens/userHome/addSkills";
import AllSkills from "../screens/userHome/allSkills";
import EditSkills from "../screens/userHome/editSkills";
import EditSpecSkill from "../screens/userHome/editSkills/editSpecSkill";
import AllUsers from "../screens/userHome/allUsers";
import AddProjects from "../screens/userHome/addProjects";
import AllProjects from "../screens/userHome/allProjects";
import EditProjects from "../screens/userHome/editProjects";
import Profile from "../screens/userHome/profile";
import EditProfile from "../screens/userHome/editProfile";
import UsersProfile from "../screens/userHome/usersProfile";
import UsersProjects from "../screens/userHome/usersProjects";
import UsersSkills from "../screens/userHome/usersSkills";

import { createNativeStackNavigator } from "@react-navigation/native-stack";


const AppStack = createNativeStackNavigator();

const AppRoutes = () => {

    return (
        <AppStack.Navigator>
            <AppStack.Screen name="Home" component={Home} options={{headerShown: false}} />
            <AppStack.Screen name="AddSkills" component={AddSkills} options={{headerShown: false}} />
            <AppStack.Screen name="AllSkills" component={AllSkills} options={{headerShown: false}} />
            <AppStack.Screen name="EditSkills" component={EditSkills} options={{headerShown: false}} />
            <AppStack.Screen name="EditSpecSkill" component={EditSpecSkill} options={{headerShown: false}} />
            <AppStack.Screen name="AllUsers" component={AllUsers} options={{headerShown: false}} />
            <AppStack.Screen name="AddProjects" component={AddProjects} options={{headerShown: false}} />
            <AppStack.Screen name="AllProjects" component={AllProjects} options={{headerShown: false}} />
            <AppStack.Screen name="EditProjects" component={EditProjects} options={{headerShown: false}} />
            <AppStack.Screen name="Profile" component={Profile} options={{headerShown: false}} />
            <AppStack.Screen name="EditProfile" component={EditProfile} options={{headerShown: false}} />
            <AppStack.Screen name="UsersProfile" component={UsersProfile} options={{headerShown: false}} />
            <AppStack.Screen name="UsersSkills" component={UsersSkills} options={{headerShown: false}} />
            <AppStack.Screen name="UsersProjects" component={UsersProjects} options={{headerShown: false}} />
        </AppStack.Navigator>
    )  
}

export default AppRoutes;