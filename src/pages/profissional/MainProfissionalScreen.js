import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function MainProfissionalScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.back}>
            <View style={styles.areaVerde}>
                <Text style={styles.titulo}>Criação de Registro</Text>
                <View style={styles.linha}></View>
                <Text style={styles.textoInformativo}>Aqui você poderá acrescentar todos os dados coletados na abordagem ao paciente e, ao final, será disponibilizado seu Registro de Enfermagem:</Text>
                <View style={styles.linha}></View>
                <View style={styles.cercoBtn}>
                    <TouchableOpacity onPress={() => navigation.navigate('profissional_data')}>
                        <View style={styles.btn}>
                            <Text style={{fontSize:22}}>Criar</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    back:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingTop:30
    },
    areaVerde: {
        backgroundColor: '#333652',
        flex:1,
        width:350,
        shadowOpacity:8,
        shadowOffset:{
            width:35,
            height:45
        },
        alignItems:'center'
    },
    linha:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:320,
        paddingTop:25
    },
    titulo:{
        fontSize:25,
        textAlign:'center',
        paddingTop:25,
        color: '#FF5757'
    },
    textoInformativo:{
        fontSize:14,
        paddingTop:15,
        fontWeight:'bold',
        textAlign:'justify',
        width:320,
        color: '#FFFFFF'
    },
    cercoBtn:{
        marginTop:70,
    },
    btn:{
        backgroundColor:'white', 
        color:'white', 
        width:250, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center'
    }
});