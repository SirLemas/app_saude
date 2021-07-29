import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native';


export default function Checkbox({nome, texto, onValueChange}) {

    return (   
        <View style={styles.checkboxContainer}>
            <View>
                <CheckBox
                    value={nome}
                    onValueChange={value => onValueChange(value)}
                />
            </View>
            <Text style={styles.checkboxLabel}>{texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: "row",
        flex:1,
        flexWrap:'wrap',
        paddingLeft:5
    },
    checkboxLabel:{
        flex:1,
        alignSelf:'center', 
        fontSize:17,
        color: '#FFFFFF',
    }
});