import React, {useContext} from 'react';
import { Button, Text, View } from "react-native";
import AuthContext from '../../contexts/auth';

function Login(params) {
    const { logged } = useContext(AuthContext);

    console.log(logged);

    return(
        <View style={{flex: 1, justifyContent: 'center',}}>
            <Text>Tela de Login</Text>
            <Button title="login" onPress={() =>{}} />
        </View>
    )
}

export default Login;