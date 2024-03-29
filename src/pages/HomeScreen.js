import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen({navigation}){
    return( 
        <View style={styles.Mainbg}>
            <View style={styles.bg1}>
                <Text style={styles.titulo}>Registro de Enfermagem</Text>
                <Text style={styles.subtitulo}>Escolha uma das opções abaixo:</Text>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('estudante')}>
                            <Image source={require('../assets/images/estudante_botao.png')} style={{resizeMode: 'contain', width:500, height:200}}/>
                    </TouchableOpacity>
                    <View style={styles.separacao}></View>
                    <TouchableOpacity onPress={() => navigation.navigate('profissional')}>
                            <Image source={require('../assets/images/profissional_botao.png')} style={{resizeMode: 'contain', width:500, height:200}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bg2}>
                <Text style={styles.textoRodape}>Desenvolvido por Talles Nogueira</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    Mainbg:{
        flex: 1,
        backgroundColor:'#333652',
    },
    bg1:{
        flex:1,
        marginTop:20,
        alignItems:'center'
    },
    bg2:{
        height:80,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
    },
    titulo:{
        color:'#FFFFFF',
        fontSize:30,
        paddingBottom:20
    },
    subtitulo:{
        color:'#FF5757',
        fontSize:18,
        paddingBottom:20
    },
    textoRodape:{
        fontSize:15

    },
    btn1:{
        backgroundColor:'#FFFFFF',
        width:150,
        height:150,
        borderRadius:80,
        justifyContent:'center',
        alignItems:'center',
    },
    sizeIconBtn:{
        // width:100,
        // height:100
    },
    separacao: {
        paddingTop:25,
        marginLeft:50
    },
    textoBtn:{
        fontSize:18,
    },
    btn2:{
        backgroundColor:'#FFFFFF',
        width:150,
        height:150,
        borderRadius:80,
        justifyContent:'center',
        alignItems:'center',
    }
});