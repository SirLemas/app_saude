import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function ProfissionaViewRelatorio() {

    const route = useRoute();

    function estado1(params){
        if(params.acamado == true) return 'acamado';
        if(params.deambulando == true) return 'deambulando';
        return '';
    }

    function estado2(params){
        if(params.orientado == true) return 'orientado';
        if(params.desorientado == true) return 'desorientado';
        return '';
    }

    function estado3(params){
        if(params.colaborativo == true) return 'colaborativo';
        if(params.nao_colaborativo == true) return 'não colaborativo';
        return '';
    }

    function pele1(params){
        if(params.anicterico == true) return 'anictérico';
        if(params.icterico == true) return 'ictérico';
        return '';
    }

    function pele2(params){
        if(params.cianotico == true) return 'cianótico';
        if(params.acianotico == true) return 'acianótico';
        return '';
    }

    function pele3(params){
        if(params.hidratada == true) return 'hidratada';
        if(params.integra == true) return 'integra';
        if(params.ressecada == true) return 'ressecada';
        return '';
    }

    function pele4(params){
        if(params.hipocorado == true) return 'hipocorado';
        if(params.normocorado == true) return 'normocorado';
        return '';
    }

    function tamanhoCabeca(params){
        if(params.normal == true) return 'normal';
        if(params.expandido == true) return 'expandido';
        return '';
    }

    function cabeca(params){
        if(params.tumoracoes == true) return 'tumorações'
        if(params.lesoes_no_couro_cabeludo == true) return 'lesões no couro cabeludo'
        if(params.pontos_dolorosos == true) return 'pontos dolorosos'
        return '';
    }

    function boca(params){
        if(params.presenca_dos_dentes_na_boca == true) return 'presença de/dos dentes na boca';
        if(params.saburra_lingual == true) return 'saburra lingual';
        if(params.feridas_ou_fissuras_labiais == true) return 'feridas e/ou fissuras labiais';
        return '';
    }

    function olhos(params){
        if(params.reflexo_pupilares_presentes == true) return 'reflexos pupilares presentes';
        if(params.pupilas_em_miose == true) return 'pupilas em miose';
        if(params.pupilas_em_midriase == true) return 'pupilas em midriase';
        return '';
    }

    function nariz(params){
        if(params.hidratado == true) return 'hidratado';
        if(params.ressecado == true) return 'ressecado';
        return '';
    }

    function ouvidos(params){
        if(params.ouvidos_limpos == true) return 'limpos';
        if(params.ouvidos_com_presenca_de_cerumen == true) return 'com presença de cerúmen';
        return '';
    }

    function pescoco(params){
        if(params.alteracao_da_traqueia == true) return 'alterações na traqueia';
        if(params.tamanho_dos_linfonodos == true) return 'tamanho dos linfonodos';
        return '';
    }

    function abdome(params){
        if(params.plano == true) return 'plano';
        if(params.globoso == true) return 'globoso';
        if(params.gravidico == true) return 'gravidico';
        if(params.estrias == true) return 'estrias';
        if(params.cicatrizes == true) return 'cicatrizes';
        if(params.som_abdominal == true) return 'som abdominal';
        return '';
    }

    function torax1(params){
        if(params.enfisematoso == true) return 'enfisematoso';
        if(params.escavado == true) return 'escavado';
        return '';
    }

    function torax2(params){
        if(params.peitoDePombo == true) return 'peito de pombo';
        if(params.normal == true) return 'normal';
        return '';
    }

    function torax3(params){
        if(params.simetrico == true) return 'simétrico';
        if(params.não_simetrico == true) return 'não simetrico';
        return '';
    }

    function cardiaco(params){
        if(params.pulso_celere == true) return 'pulso célere';
        if(params.pulso_filiforme == true) return 'pulso filiforme';
        return '';
    }

    function abdome2(params){
        if(params.ruidos_hidroaereos_presente == true) return 'ruídos hidroaéreos presente';
        if(params.ruidos_hidroaereos_ausente == true) return 'ruídos hidroaéreos ausente';
        return '';
    }

    function abdome3(params){
        if(params.reação_a_palpação_dolorosa == true) return 'reação a palpação dolorosa';
        if(params.reação_a_palpação_indolor == true) return 'reação a palpação indolor';
        return '';
    }

    function geniturinario(params){
        if(params.mucosa_ressecada == true) return 'mucosa ressecada';
        if(params.mucosa_hidratada == true) return 'mucosa hidratada';
        if(params.secreções_patogênicas == true) return 'secreções patogênicas';
        return '';
    }

    function mmiiMMSS1(params){
        if(params.mmii_e_mmss_simetricos == true) return 'simétricos';
        if(params.mmii_e_mmss_não_simetricos == true) return 'não simétricos';
        return '';
    }

    function mmiiMMSS2(params){
        if(params.força_muscular_preservada == true) return 'força muscular preservada';
        if(params.força_muscular_não_preservada == true) return 'força muscular não preservada';
        return '';
    }

    function fr(params){
        if(params.profunda == true) return 'profunda';
        if(params.normal == true) return 'normal';
        if(params.superficial == true) return 'superficial';
        return '';
    }

    return(
        <View style={styles.bg}>
            <View style={styles.areaVerde}>
                <ScrollView>
                    <Text style={styles.tituloRelatorio}>Relatório</Text>
                    <Text style={styles.textoRelatorio}>
                        {route.params.dadosGerais.data ?? '' } {route.params.dadosGerais.hora ?? ''}, {route.params.dadosGerais.iniciais_paciente ?? ''}, 
                        o paciente esta {estado1(route.params.estadoPaciente1)}, {estado2(route.params.estadoPaciente2)} do tempo, espaço e pessoa e {estado3(route.params.estadoPaciente3)}.
                         Ao exame físico: {'\n'}
                        Pele: {pele1(route.params.pele1)}, {pele2(route.params.pele2)}, {pele3(route.params.pele3)}, {pele4(route.params.pele3)}.
                         Cabeça: crânio {tamanhoCabeca(route.params.tamanhoCranio)}, apresenta {cabeca(route.params.cabeca)}, 
                        na boca: {boca(route.params.boca)}, nos olhos {olhos(route.params.olhos)}, 
                        nariz: {nariz(route.params.nariz)}, 
                        ouvidos {ouvidos(route.params.ouvidos)}, 
                        no pescoço: {pescoco(route.params.pescoco)}, 
                        tórax: {torax1(route.params.torax1)}, {torax2(route.params.torax2)}, {torax3(route.params.torax3)}, 
                        {route.params.estadoTorax.map(function(valor){
                            return valor+', ';
                        })}
                        cardíaco: {cardiaco(route.params.cardiaco)}, 
                        abdome: {abdome(route.params.abdome)}, {abdome2(route.params.abdomeRuidos)}, {abdome3(route.params.abdomeReacao)}, 
                        geniturinário, reto e ânus: {geniturinario(route.params.geniturinarioRetoAnus)} e 
                        MMII e MMSS: {mmiiMMSS1(route.params.mmssMmiiSimetria)} e {mmiiMMSS2(route.params.mmssMmiiForcaMuscular)}.{'\n'}
                        Sinais vitais:{'\n'}
                        Temperatura {route.params.sinaisVitais.temperatura} º, frequência cardiaca de {route.params.sinaisVitais.frequenciaCardiaca} bpm, pressão arterial {route.params.sinaisVitais.pressaoArterial1} - {route.params.sinaisVitais.pressaoArterial2} mmHg.{'\n'}
                        IMC: peso {route.params.sinaisVitais.imcPeso} kg, altura {route.params.sinaisVitais.imcAltura} cm,
                        amplitude da frequência respiratória {fr(route.params.amplitudeDaFr)}, ritmo da frequência respiratória {route.params.ritmoDaFr.regular ? 'regular' : 'irregular'},
                        amplitude da frequência cardíaca {route.params.amplitudeDaFc.celere ? 'célere' : 'filiforme'}, ritmo da frequência cardíaca {route.params.ritmoDaFC.regular ? 'regular' : 'irregular'}
                    </Text>
                </ScrollView>
            </View>
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
});