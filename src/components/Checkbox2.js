import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CheckBox} from 'react-native-elements';


export default function Checkbox2 ({checked, onPress, texto}) {

    return (   
        <View style={styles.containerCheck}>
            <CheckBox 
                checked={checked}
                onPress={() => onPress()}
                checkedColor='#FFFFFF'
            />
            <Text style={styles.label}>{texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    containerCheck: {
        flexDirection: "row",
        flexWrap:'wrap',
        flex:1
    },
    label: {
        flex:1,
        alignSelf:'center',
        fontSize:17,
        color: '#FFFFFF',

    }
});