import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DetailButton from '../../components/DetailButton';
import {useNavigation} from '@react-navigation/native';

export default function MainEstudanteScreen(){
    const navigation = useNavigation();
    return(
        <View style={styles.back}>
            <View style={styles.areaVerde}>
                <Text style={styles.titulo}>Área de Aprendizagem</Text>
                <View style={styles.linha}></View>
                <Text style={styles.textoInformativo}>Nesta área iremos apresentar todas etapas explicadas e exemplificadas para formulação do registro de enfermagem e termos técnicos em saúde e suas aplicabilidades e conceitos.</Text>
                <View style={styles.linha}></View>
                <View style={styles.links}>
                    <DetailButton texto="Etapa 1 - Data e Hora" screenParams="1" nav={navigation}/>
                    <DetailButton texto="Etapa 2 - Estado fisico geral do paciente" screenParams="2" nav={navigation}/>
                    <DetailButton texto="Etapa 3 - (Exame Físico) - Tegumentar" screenParams="3" nav={navigation}/>
                    <DetailButton texto="Etapa 4 - (Exame Físico) - Cabeça" screenParams="4" nav={navigation}/>
                    <DetailButton texto="Etapa 5 - (Exame Físico) - Pescoço" screenParams="5" nav={navigation}/>
                    <DetailButton texto="Etapa 6 - (Exame Físico) - Respiratório" screenParams="6" nav={navigation}/>
                    <DetailButton texto="Etapa 7 - (Exame Físico) - Cardiaco" screenParams="7" nav={navigation}/>
                    <DetailButton texto="Etapa 8 - (Exame Físico) - Abdominal" screenParams="8" nav={navigation}/>
                    <DetailButton texto="Etapa 9 - (Exame Físico) - Geniturinário Reto e Ânus" screenParams="9" nav={navigation}/>
                    <DetailButton texto="Etapa 10 - (Exame Físico) - Membros Superiores (MMSS) e Inferiores (MMII)" screenParams="10" nav={navigation}/>
                    <DetailButton texto="Etapa 11 - Sinais Vitais(SS VV)" screenParams="11" nav={navigation}/>
                    <DetailButton texto="Etapa 12 - Dados Subjetivos" screenParams="12" nav={navigation}/>
                    <DetailButton texto="Etapa 13 - Assinatura e Carimbo" screenParams="13" nav={navigation}/>
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
    titulo:{
        fontSize:25,
        textAlign:'center',
        paddingTop:25,
        color:'#FF5757'
    },
    textoInformativo:{
        fontSize:14,
        paddingTop:15,
        fontWeight:'bold',
        textAlign:'justify',
        width:320,
        color: '#D66565',
    },
    linha:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:320,
        paddingTop:25,
    },
    links:{
        paddingTop:25,
    }
});