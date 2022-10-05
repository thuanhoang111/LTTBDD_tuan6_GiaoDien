import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TikiPage from '../component/TikiPage';
import Home from '../component/Home';
import ForgotPassword from '../component/ForgotPassword';
import ListProduct from './../component/ListProduct';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (
        <NavigationContainer>
            {/* <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
         </Stack.Navigator> */}
            <Stack.Navigator initialRouteName="TikiPage">
                <Stack.Screen name="TikiPage" component={TikiPage} />
                <Stack.Screen name="ListPage" component={ListProduct} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
