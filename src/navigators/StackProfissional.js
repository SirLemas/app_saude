import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainProfissionalScreen from '../pages/profissional/MainProfissionalScreen';
import ProfissionalData from '../pages/profissional/ProfissionalData';
import ProfissionalViewRelatorio from '../pages/profissional/ProfissionalViewRelatorio';

const ProfissionalStack = createStackNavigator();

export default () => (
    <ProfissionalStack.Navigator screenOptions={{
        headerShown:false
    }}>
        <ProfissionalStack.Screen name="profissional_main" component={MainProfissionalScreen}/>
        <ProfissionalStack.Screen name="profissional_data" component={ProfissionalData} />
        <ProfissionalStack.Screen name="profissional_view_relatorio" component={ProfissionalViewRelatorio} />
    </ProfissionalStack.Navigator>
);