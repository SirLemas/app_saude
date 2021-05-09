import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../pages/HomeScreen';

import StackEstudante from '../navigators/StackEstudante';
import StackProfissional from '../navigators/StackProfissional';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator 
        screenOptions={({route}) => ({
            tabBarIcon:() => <TabBarIcon name={route.name} />
        })}
        tabBarOptions={{
            activeTintColor:'#2E8B57'
        }}
    >
        <Tab.Screen name="inicio" component={HomeScreen} options={{
            tabBarVisible:false
        }}/>
        <Tab.Screen name="estudante" component={StackEstudante}/>
        <Tab.Screen name="profissional" component={StackProfissional}/>
    </Tab.Navigator>
);