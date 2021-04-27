import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomeScreen({navigation}){
    return( 
        <View style={styles.Mainbg}>
            <View style={styles.bg1}>
                <Text style={styles.titulo}>Registro de Enfermagem</Text>
                <Text style={styles.subtitulo}>Escolha uma das opções abaixo:</Text>
                <TouchableOpacity style={{paddingTop:100}} onPress={() => navigation.navigate('estudante')}>
                    <View style={styles.btn1}>
                        <Image source={require('../assets/images/icone_estudante_livro.png')} style={styles.sizeIconBtn}/>
                        <Text style={styles.textoBtn}>Estudante</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingTop:100}} onPress={() => navigation.navigate('profissional')}>
                    <View style={styles.btn2}>
                        <Image source={require('../assets/images/prancheta.png')} style={styles.sizeIconBtn}/>
                        <Text style={styles.textoBtn}>Profissional</Text>
                    </View>
                </TouchableOpacity>
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
        backgroundColor:'#2E8B57'
    },
    bg1:{
        flex:1,
        paddingTop:50,
        alignItems:'center'
    },
    bg2:{
        height:80,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    titulo:{
        color:'white',
        fontSize:30,
        paddingBottom:20
    },
    subtitulo:{
        color:'white',
        fontSize:18
    },
    textoRodape:{
        fontSize:15

    },
    btn1:{
        backgroundColor:'white',
        width:150,
        height:150,
        borderRadius:80,
        justifyContent:'center',
        alignItems:'center',
    },
    sizeIconBtn:{
        width:100,
        height:100
    },
    textoBtn:{
        fontSize:18,
    },
    btn2:{
        backgroundColor:'white',
        width:150,
        height:150,
        borderRadius:80,
        justifyContent:'center',
        alignItems:'center',
    }
});