import React, {useLayoutEffect, useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import { useFonts } from 'expo-font';


export default function EstudanteDetalhe() {
    const route = useRoute();
    const navigation = useNavigation();

    const [fontsLoaded] = useFonts({
        'Comfortaa': require('../../../assets/fonts/Comfortaa-Regular.ttf'),
        'Coolvetica': require('../../../assets/fonts/Coolvetica-Regular.ttf'),
        'DreamOrphans': require('../../../assets/fonts/DreamOrphans-Regular.ttf'),
        'Espera': require('../../../assets/fonts/Espera-Regular.ttf'),
        'LouisGeorgeCafe': require('../../../assets/fonts/LouisGeorgeCafe-Regular.ttf'),
    });


    useEffect(() => {
        if(!fontsLoaded){
            navigation.setOptions({
                title: <Text>{route.params.titulo}</Text>
            });
        }else{
            navigation.setOptions({
                title: <Text style={{fontFamily: 'LouisGeorgeCafe'}}>{route.params.titulo}</Text>
            });
        }            
        
    }, []);

    if(!fontsLoaded){
        return null;
    }

    return(
        <View style={styles.bg}>
            <ScrollView style={styles.bg}>
                <Text style={informacaoEtapa(route.params.id) != '' ? styles.textoInformativo : ''}>{informacaoEtapa(route.params.id)}</Text>
                {informativoImagem(route.params.id)}
                <View style={styles.linha}></View>
                <Text style={{fontSize:16, padding:10, fontFamily:'Espera'}}>{exemploEtapa(route.params.id) ? 'Exemplo:' : ''}</Text>
                <Text style={styles.exemplo}>{exemploEtapa(route.params.id)}</Text>
            </ScrollView>
        </View>
    );
}

function informacaoEtapa(id){
    switch(id){
        case '1':
            return 'Sempre que realizamos um procedimento é de grande importância iniciar com a data e horário que foi realizado, um registro completo sempre deve ser precedido por estas informações.';
        case '2':
            return 'Ao irmos ao encontro do paciente relatar como o encontramos: deambulando, em repouso no leito. Acrescentar o estado geral do paciente se orientado em tempo e espaço e se está colaborativo ou não.';
        case '3':
            return 'Descrever o estado em que a pele do paciente se encontra:\nanictérico, ictérico, cianótico, coloração, integridade, hidratada, hipocorado,normocorado.';
        case '4':
            return 'Em relação à cabeça, podemos avaliar tamanho do crânio, presença de tumorações ou lesões no couro cabeludo e pontos dolorosos. No rosto avaliar coloração e aspecto da pele e mucosas, na boca presença de dentes, saburra lingual e feridas ou fissuras labiais. Nos olhos avaliar reflexo pupilar, pupilas isocóricas, anisocóricas, miose ou midríase. Nariz e ouvidos avaliar tamanho, formato e se há presença de processo inflamatório.';
        case '5':
            return 'Inspeção: Avaliar alterações na traqueia, observar artérias da região do pescoço.\nPalpação: Analisar tamanho dos linfonodos e contratilidade da traqueia.';
        case '6':
            return 'Inspeção: formato (globoso, enfisematoso, escavado, peito de pombo, normal), simetria do tórax, frequência respiratória, expansividade torácica e retrações.\nAusculta: Realizar a ausculta nos seguintes espaços intercostais, analisar MV+(murmúrios vesiculares presentes) e RA( ruídos adventícios).AP(ausculta pulmonar)';
        case '7':
            return 'Inspeção: Avaliar pulso e analisar o Ictos Cordis (localizado no 5° espaço intercostal no lado esquerdo)\nAusculta: Realizar a ausculta nos seguintes focos';
        case '8':
            return '';
        case '9':
            return 'Inspeção:\nObservar presença de processos inflamatórios, secreções patológicas, sangramentos e presença de nódulos. Verificar presença de edemas, hemorroidas ou abcessos.\nPalpação:\nRealizar apalpação das mamas em busca de nódulos, depressões e rigidez. Observar presença de fimose, e hérnias na região escrotal  ';
        case '10':
            return 'Verificar simetria entre os membros, analisar se o paciente possui algum acesso se possuir relata o local, se há presença de edemas e avaliar articulações.';
        case '11':
            return '';
        case '12':
            return 'Tudo que o paciente relata ou refere/se queixa: dor, pruído, necessidades humanas básicas (NHB, sono, eliminações e alimentação).';
        case '13':
            return 'No final do seu registro nunca se esquece de assinar, o registro do paciente é um documento e deve estar devidamente preenchido indicando qual acadêmico ou enfermeiro que o fez, se for acadêmica finalizar com o carimbo do professor responsável pela pratica, como enfermeiro carimbo contendo número do COREN.';
    }
}

function exemploEtapa(id){
    switch(id){
        case '1':
            return '14/08/2020 às 14:30h.';
        case '2':
            return 'Paciente deambulando. Orientado em tempo e espaço, colaborativo. \n\n Exame Físico: Ao exame físico acrescentar...';
        case '3':
            return 'Ictérico, pele integra, hidratada e hipocorado.';
        case '4':
            return 'Crânio sem abaulamentos ou depressões, presença de saburra lingual +/4+e pupilas isocóricas.';
        case '5':
            return 'Não há alterações na traqueia e linfonodos cervicais não palpáveis.';
        case '6':
            return 'Tórax simétrico e expansivos, AP:MV+ sem RA, eupneico.';
        case '7':
            return 'ACV com BNF e RCR em 2T \n2T: Em dois tempos \nRCR: Ruído cardíaco regular';
        case '8':
            return 'Abdômen globoso, refere dor á palpação profunda e superficial da região abdominal hipocondríaca direita, ruídos hidroaéreos(+).';
        case '9':
            return 'Nas duas genitálias observas sinais de infecções sexualmente transmitidas (IST’S).';
        case '10':
            return 'MMII E MMSS sem edema, possui acesso venoso na mão esquerda.';
        case '11':
            return '';
        case '12':
            return 'Paciente relata sono regular, episódio de êmese depois do café da manhã, melhora na náusea e melhora na diarreia.';
        case '13':
            return '';
    }
}

function informativoImagem(id){
    switch(id){
        case '6':
            return (
                <View>
                    <Image source={require('../../assets/images/tela_6_respiratorio.png')} style={{width:350, height:200, resizeMode:'stretch', marginBottom:30, marginLeft:20}}/>
                    <Text style={styles.imagemTexto}>
                        Palpação: Verificar a amplitude dos movimentos do tórax e traqueia.{"\n"}
                        Percussão: Analisar os sons pulmonares (timpânico, maciço, sub-maciço e claro)
                    </Text>
                </View>
            );
        case '7':
            return(
                <View>
                    <Image source={require('../../assets/images/tela_7_cardiaco.png')} style={{width:350, height:250, resizeMode:'stretch', marginLeft:20, marginBottom:30}}/>
                    <Text style={styles.imagemTexto}>
                        ACV: Ausculta Cardiovascular{"\n"}
                        BNF: Bulhas normo fonéticas1(B1 e B2){"\n"}
                        B1: Fechamento das valvas mitral e tricúspide (. Som correspondente: “TUM”.){"\n"}
                        B2: Fechamento das valvas aórtica e pulmonar. Som correspondente: ” TA”){"\n"}
                        B3: Passagem rápido e forte do sangue dos átrios aos ventrículos. Inicio da diástole, som imediatamente após B2. “TU”. Ruído de baixa frequência{"\n"}
                        B4: Contração dos átrios, enviando sangue aos ventrículos. Final da diástole, som imediatamente antes de B1. “TA”. Ruído de baixa frequência
                    </Text>
                </View>
            );
        case '8':
            return(
                <View>
                    <Image source={require('../../assets/images/tela_8_abdominal.png')} style={{width:375, height:300, resizeMode:'stretch', marginBottom:30, marginLeft:10}}/>
                    <Text style={styles.imagemTexto}>
                        OBS: Ao descrever qualquer anormalidade, especificar a região.{"\n"}
                        Inspeção:{"\n"}
                        Analisar forma (globoso, plano, gravídico), abaulamentos, depressões e cicatrizes.{"\n"}
                        Ausculta:{"\n"}
                        Ruídos hidroaéreos (presente = [+], ausente ou aumentado){"\n"}
                        Percussão: Som timpânico, maciço ou sub-maciço.{"\n"}
                        Palpação: Avaliar sinas de dor a palpação (indolor ou dolorosa), se há ou não visceromegalias presentes e presença ou ausência de ascite.
                    </Text>
                </View>
            );
        case '11':
            return(
                <View>
                    <Text style={[styles.imagemTexto, {fontWeight:'bold', paddingBottom:30}]}>OBS: Algumas instituições de saúde possuem prontuários padronizados com o registro de sinais vitais a parte do registro de enfermagem.</Text>
                    <Text style={[styles.imagemTexto, {fontWeight:'bold'}]}>ADULTO</Text>
                    <Text style={styles.textoInformativo}>
                        •	Normotérmico: 35°c a 37,4°c{"\n"}
                        •	Hipertermia: {">"} 37,5°c{"\n"}   
                        •	Hipotermia: {"<"} 35°c{"\n"}
                        Pressão Arterial:{"\n"}
                        Sistólica{"\n"}
                        •	Normotenso: 100-140 mmHg{"\n"}
                        •	Hipotensão: {"<"} 100 mmHg{"\n"}
                        •	Hipertensão: {">"} 140 mmHg{"\n"}
                        Diastólica{"\n"}
                        •	Normotensão: 60-90 mmHg{"\n"}
                        •	Hipotensão: {"<"} 60 mmHg{"\n"}
                        •	Hipertensão: {">"} 90 mmHg{"\n"}
                        Frequência Respiratória:{"\n"}
                        •	Eupneico: 12-20 ipm{"\n"}
                        •	Taquipneia: {">"} 20ipm{"\n"}
                        •	Bradipneia: {"<"} 12 ipm{"\n"}
                        Frequência Cardíaca:{"\n"}
                        •	Normal: 60-100 bpm{"\n"}
                        •	Taquicardia: {">"} 100bpm{"\n"}
                        •	Bradicardia: {"<"} 60 bpm
                    </Text>
                    <Text style={[styles.imagemTexto, {fontWeight:'bold'}]}>PEDIÁTRICO</Text>
                    <Text style={styles.textoInformativo}>
                        Temperatura:{"\n"}
                        •	Oral: 35,5-37,2°c{"\n"}
                        •	Axilar: 35,9-36,9°c{"\n"}
                        •	Retal: 36,2-38,0°c{"\n"}
                        Frequência Respiratória:{"\n"}
                        •	Prematuros: 50 ipm{"\n"}
                        •	Lactantes: 30-40 ipm{"\n"}
                        •	1 ano: 25-30 ipm{"\n"}
                        •	Pré-escolar: 20-25 ipm{"\n"}
                        •	10 anos: {">"} 20 ipm{"\n"}
                        Frequência Cardíaca:{"\n"}
                        •	Recém-nascido: 70-170 bpm{"\n"}
                        •	11 meses: 80-160 bpm{"\n"}
                        •	2 anos: 80-130 bpm{"\n"}
                        •	4 anos: 80-120 bpm{"\n"}
                        •	6 anos: 75-115 bpm{"\n"}
                        •	8 anos: 70-110 bpm{"\n"}
                        •	10 anos: 70-110 bpm{"\n"}
                        Pressão Arterial: {"\n"}
                        •	0-3 meses: 75/50 mmHg{"\n"}
                        •	3-6 meses: 5/65 mmHg{"\n"}
                        •	9-12 meses: 90/70 mmHg{"\n"}
                        •	1-3 anos: 90/65 mmHg{"\n"}
                        •	3-5 anos: 95/60 mmHg
                    </Text>
                    <Text style={[styles.textoInformativo, {fontWeight:'bold'}]}>Índice de massa corpórea:</Text>
                    <Text style={styles.textoInformativo}>
                        Formula: Peso/Altura{"\n"}
                        Homens: IMC entre 20-25{"\n"}
                        Mulheres: IMC entre 19-24{"\n"}
                        Acima de 27: considerado 20% acima do peso{"\n"}
                        {">"}30: Quadro de obesidade
                    </Text>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    bg:{
        flex:1
    },
    linha:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingTop:25
    },
    textoInformativo:{
        fontSize:18,
        padding:10,
        fontFamily: 'LouisGeorgeCafe'
    },
    imagemTexto:{
        fontSize:18,
        paddingLeft:10,
        fontFamily: 'LouisGeorgeCafe'
    },
    exemplo:{
        fontSize:16,
        fontWeight:'bold',
        padding:10
    }
});