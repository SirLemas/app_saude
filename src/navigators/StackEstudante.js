import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MainEstudanteScreen from '../pages/estudante/MainEstudanteScreen';
import EstudanteDetalhe from '../pages/estudante/EstudanteDetalhe';

const EstudanteStack = createStackNavigator();

export default () => (
    <EstudanteStack.Navigator>
        <EstudanteStack.Screen name="estudante_stack" component={MainEstudanteScreen} options={{
            headerShown:false
        }}/>
        <EstudanteStack.Screen name="estudante_detalhe" component={EstudanteDetalhe} options={({route} )=> ({
                headerStyle:{
                    backgroundColor:'#FFFFFF'
                }
        })}/>
    </EstudanteStack.Navigator>
);