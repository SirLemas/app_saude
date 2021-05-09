import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function ProfissionaViewRelatorio() {

    const route = useRoute();

    function pele(param){
        if(param.hidratada == true) return 'hidratada';
        if(param.integra == true) return 'integra';
        if(param.ressecada == true) return 'ressecada';
    }

    function cabeca(params){
        if(params.tumoracoes == true) return 'tumorações'
        if(params.lesoes_no_couro_cabeludo == true) return 'lesões no couro cabeludo'
        if(params.pontos_dolorosos == true) return 'pontos dolorosos'
    }

    function boca(params){
        if(params.presenca_dos_dentes_na_boca == true) return 'presença de/dos dentes na boca';
        if(params.saburra_lingual == true) return 'saburra lingual';
        if(params.feridas_ou_fissuras_labiais == true) return 'feridas e/ou fissuras labiais';
    }

    function olhos(params){
        if(params.reflexo_pupilares_presentes == true) return 'reflexos pupilares presentes';
        if(params.pupilas_em_miose == true) return 'pupilas em miose';
        if(params.pupilas_em_midriase == true) return 'pupilas em midriase';
    }

    function abdome(params){
        if(params.plano == true) return 'plano';
        if(params.globoso == true) return 'globoso';
        if(params.gravidico == true) return 'gravidico';
        if(params.estrias == true) return 'estrias';
        if(params.cicatrizes == true) return 'cicatrizes';
        if(params.som_abdominal == true) return 'som abdominal';
    }

    function geniturinario(params){
        if(params.mucosa_ressecada == true) return 'mucosa ressecada';
        if(params.mucosa_hidratada == true) return 'mucosa hidratada';
        if(params.secreções_patogênicas == true) return 'secreções patogênicas';
    }

    function fr(params){
        if(params.profunda == true) return 'profunda';
        if(params.normal == true) return 'normal';
        if(params.superficial == true) return 'superficial';
    }

    console.log(route.params);

    return(
        <View style={styles.bg}>
            <View style={styles.areaVerde}>
                <ScrollView>
                    <Text style={styles.tituloRelatorio}>Relatório</Text>
                    <Text style={styles.textoRelatorio}>
                        {route.params.dadosGerais.data ?? '' } {route.params.dadosGerais.hora ?? ''}, {route.params.dadosGerais.iniciais_paciente ?? ''}, 
                        o paciente esta {route.params.estadoPaciente1.acamado ?  'acamado' :  'deambulando'}, {route.params.estadoPaciente2.orientado ? 'orientado' : 'desorientado'} do tempo, espaço e pessoa e {route.params.estadoPaciente3.colaborativo ? 'colaborativo' :'não coloborativo'}.
                         Ao exame físico: {'\n'}
                        Pele: {route.params.pele1.anicterico ? 'anictérico' : 'ictérico'},
                        {route.params.pele2.cianotico ? 'cianótico' : 'Acianótico'},
                        {pele(route.params.pele3)}, {route.params.pele3.hipocorado ? 'hipocorado' : 'normocorado'}.
                         Cabeça: crânio {route.params.tamanhoCranio.normal ? 'normal' :'expandido'}, apresenta {cabeca(route.params.cabeca)}, 
                        na boca: {boca(route.params.boca)}, nos olhos {olhos(route.params.olhos)}, 
                        nariz: {route.params.nariz.hidratado ? 'hidratado' : 'ressecado'}, 
                        ouvidos {route.params.ouvidos.ouvidos_limpos ? 'limpos' : 'com presença de cerúmen'}, 
                        no pescoço: {route.params.pescoco.alteracao_da_traqueia ? 'alterações na traqueia' : 'tamanho dos linfonodos'}, 
                        tórax: {route.params.torax1.enfisematoso ? 'enfisematoso' : 'escavado'}, {route.params.torax2.peitoDePombo ? 'peito de pombo' : 'normal'}, {route.params.torax3.simetrico ? 'simétrico' : 'não simétrico'}, 
                        {route.params.estadoTorax.map(function(valor){
                            return valor+', ';
                        })}
                        cardíaco: {route.params.cardiaco.pulso_celere ? 'pulso célere' : 'pulso filiforme'}, 
                        abdome: {abdome(route.params.abdome)}, {route.params.abdomeRuidos.ruidos_hidroaereos_presente ? 'ruídos hidroaéreos presente' : 'ruídos hidroaéreos ausente'}, {route.params.abdomeReacao.reação_a_palpação_dolorosa ? 'reação a palpação dolorosa' : 'reação a palpação indolor'}, 
                        geniturinário, reto e ânus: {geniturinario(route.params.geniturinarioRetoAnus)} e 
                        MMII e MMSS: {route.params.mmssMmiiSimetria.simetrico ? 'simétricos' : 'não simétricos'} e {route.params.mmssMmiiForcaMuscular.força_muscular_preservada ? 'força muscular preservada' : 'força muscular não preservada'}.{'\n'}
                        Sinais vitais:{'\n'}
                        Temperatura {route.params.sinaisVitais.temperatura} º, frequência cardiaca de {route.params.sinaisVitais.frequenciaCardiaca} bpm, pressão arterial {route.params.sinaisVitais.pressaoArterial1} - {route.params.sinaisVitais.pressaoArterial2} mmHg.{'\n'}
                        IMC: peso {route.params.sinaisVitais.imcPeso} kg, altura {route.params.sinaisVitais.imcAltura} cm,
                        amplitude da frequência respiratória {fr(route.params.amplitudeDaFr)}, ritmo da frequência respiratória {route.params.ritmoDaFr.regular ? 'regular' : 'irregular'},
                        amplitude da frequência cardíaca {route.params.amplitudeDaFc.celere ? 'célere' : 'filiforme'}, ritmo da frequência cardíaca {route.params.ritmoDaFC.regular ? 'regular' : 'irregular'}
                    </Text>
                </ScrollView>
            </View>
            {/* <TouchableOpacity style={{alignSelf:'center', marginTop:30,}} onPress={() => alert('ainda será implementado')}>
                <View style={styles.btn}>
                    <Text style={{fontSize:20}}>Gerar PDF</Text>
                </View>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        paddingTop:20
    },
    areaVerde: {
        backgroundColor: '#2E8B57',
        height:450,
        width:350,
        marginTop:30
        
    },
    btn:{
        marginTop:30
    },
    textoRelatorio:{
        paddingTop:15,
        marginLeft:10,
        paddingBottom:15
    },
    tituloRelatorio: {
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center',
        paddingTop:20
    },
    btn:{
        backgroundColor:'#2E8B57', 
        color:'black', 
        width:250, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center'
    }
});