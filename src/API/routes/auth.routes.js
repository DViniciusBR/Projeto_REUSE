import React from 'react';
import Login from '../../telas/PaginasApp/TelaLog';
import Cadastro from '../../telas/PaginasApp/TelaCad';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
    <AuthStack.Navigator>
        <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
);

export default AuthRoutes;