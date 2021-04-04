import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function HomeScreen(){
    return(
        <View style={styles.back}>
            <Text>Tela HOME!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    back:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
});