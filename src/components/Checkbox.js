import React from 'react';
import {View, Text, StyleSheet, CheckBox} from 'react-native';


export default function DetailButton({propriedade, nome, texto, onValueChange}) {
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
        fontSize:17

    }
});