import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainProfissionalScreen from '../pages/profissional/MainProfissionalScreen';

import TabBarIcon from '../components/TabBarIcon';
import StackEstudante from '../navigators/StackEstudante';
import HomeScreen from '../pages/HomeScreen';

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
        <Tab.Screen name="profissional" component={MainProfissionalScreen}/>
    </Tab.Navigator>
);