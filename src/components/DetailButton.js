import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';


export default function DetailButton(props) {
    return (
        <TouchableOpacity onPress={() => props.nav.navigate('estudante_detalhe', {id: props.screenParams, titulo: props.texto})}>
            <View style={styles.bg}>
                <Text style={styles.texto}>{props.texto}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:15,
        paddingBottom:3.5,
        color: '#FFFFFF'
    }
});