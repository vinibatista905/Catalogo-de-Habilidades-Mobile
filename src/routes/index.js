import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useAuth } from '../contexts/auth'

import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

const Routes = () => {

    const {logged} = useAuth();
    

    return (
        <NavigationContainer>
            {logged ? (<AppRoutes />) : ( <AuthRoutes />)}
       </NavigationContainer>
    )
}

export default Routes
