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

    //pele

    function peleColoracao(params){
        if(params.palidez == true) return 'Palidez';
        if(params.eritrose == true) return 'Eritrose';
        if(params.cianose == true) return 'Cianose';
        if(params.ictericia == true) return 'Icterícia';
        if(params.albinismo == true) return 'Albinismo';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function peleIntegridade(params){
        if(params.exulceracao == true) return 'Exulceração';
        if(params.ulceracao == true) return 'Ulceração';
        if(params.fissura == true) return 'Fissura';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function peleUmidade(params){
        if(params.seca == true) return 'Seca';
        if(params.umida == true) return 'Úmida';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function peleTextura(params){
        if(params.lisa == true) return 'Lisa/fina';
        if(params.aspera == true) return 'Áspera';
        if(params.enrugada == true) return 'Enrugada';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function peleEspessura(params){
        if(params.atrofica == true) return 'Atrófica';
        if(params.hipertrofica == true) return 'Hipertrófica';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function peleTemperatura(params){
        if(params.normal == true) return 'Normal';
        if(params.aumentada == true) return 'Aumentada';
        if(params.diminuida == true) return 'Diminuída';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function peleElasticidade(params){
        if(params.aumentada == true) return 'Aumentada';
        if(params.diminuida == true) return 'Diminuída';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function peleTurgos(params){
        if(params.aumentado == true) return 'Aumentado';
        if(params.diminuido == true) return 'Diminuído';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function peleSensibilidade(params){
        if(params.dolorosa == true) return 'Dolorosa (presente ou ausente)';
        if(params.tatil == true) return 'Tátil (presente ou ausente)';
        if(params.termica == true) return 'Térmica (presente ou ausente)';
        return '';
    }
    function peleLesoes(params){
        if(params.nao == true) return 'Não apresenta';
        if(params.apresenta == true) return 'Apresenta';
        return '';
    }

    //acabou pele

    //cabeça
    function cabecaTamanhoForma(params) {
        if(params.macrocefalia == true) return 'Macrocefalia';
        if(params.microcefalia == true) return 'Microcefalia';
        if(params.acrocefalia == true) return 'Acrocefalia';
        if(params.escalocefalia == true) return 'Escalocefalia';
        if(params.dolicocefalia == true) return 'Dolicocefalia';
        if(params.braquicefalia == true) return 'Braquicefalia';
        if(params.plagiocefalia == true) return 'Plagiocefalia';
        return '';
    }
    function cabecaPosicao(params) {
        if(params.torcicolo == true) return 'Torcicolo';
        if(params.tiques == true) return 'Tiques';
        if(params.sem == true) return 'Sem alterações';
        return '';
    }
    function cabecaSuperficie(params) {
        if(params.tumor == true) return 'Tumor';
        if(params.tumefacao == true) return 'Tumefação';
        if(params.bossa == true) return 'Bossa';
        if(params.hematoma == true) return 'Hematoma';
        if(params.depressao == true) return 'Depressão';
        if(params.ponto == true) return 'Ponto Doloroso';
        if(params.sem == true) return 'Sem alterações';
        return '';
    }

    function cabecaFace(params) {
        if(params.simetrica == true) return 'Simétrica';
        if(params.assimetrica == true) return 'Assimétrica';
        return '';
    }
    //acabou cabeça
    // olhos e supercilios
    function olhosPalpebras(params){
        if(params.edema == true) return 'Edema (D/E)';
        if(params.retracao == true) return 'Retração (D/E)';
        if(params.ptose == true) return 'Ptose (D/E)';
        if(params.epicanto == true) return 'Epicanto (D/E)';
        if(params.equimose == true) return 'Equimose (D/E)';
        if(params.xantelasma == true) return 'Xantelasma (D/E)';
        if(params.lagoftalmia == true) return 'Lagoftalmia (D/E)';
        if(params.triquiase == true) return 'Triquíase (D/E)';
        if(params.entropio == true) return 'Entrópio (D/E)';
        if(params.ectropio == true) return 'Ectrópio (D/E)';
        if(params.sem == true) return 'Sem anormalidade (D/E)';
        return '';
    }
    function olhosGlobosOculares(params){
        if(params.exoftalmia == true) return 'Exoftalmia (D/E)';
        if(params.enoftalmia == true) return 'Enoftalmia (D/E)';
        if(params.desvio == true) return 'Desvio (D/E)';
        if(params.movimento == true) return 'Movimento Involuntário (D/E)';
        if(params.paralisia == true) return 'Paralisia Ocular';
        if(params.sem == true) return 'Sem anormalidade (D/E)';
        return '';
    }
    function olhosConjutiva(params){
        if(params.conjutivite == true) return 'Conjutivite (D/E)';
        if(params.irite == true) return 'Irite (D/E)';
        if(params.hemorragia == true) return 'Hemorragia Subconjuntival (D/E)';
        if(params.sem == true) return 'Sem anormalidade';
        return '';
    }
    function olhosEsclerotica(params){
        if(params.catarata == true) return 'Catarata (D/E)';
        if(params.pterigio == true) return 'Pterígio (D/E)';
        if(params.sem == true) return 'Sem anormalidade (D/E)';
        return '';
    }
    function olhosReflexos(params){
        var ref = '';
        if(params.fotomotor_dir == true) ref += 'Fotomotor olho direito, ';
        if(params.fotomotor_esq == true) ref += 'Fotomotor olho esquerdo, ';
        if(params.consensual_dir == true) ref += 'Consensual olho direito, ';
        if(params.consensual_esq == true) ref += 'Consensual olho esquerdo, ';
        if(params.acomodacao_dir == true) ref += 'Acomodação - Convergência olho direito, ';
        if(params.acomodacao_esq == true) ref += 'Acomodação - Convergência olho esquerdo, ';
        return '';
    }
    //acabou olhos e supercilios


    function boca(params){

        if(params.sem == true) return 'Sem anormalidades';

        var boca = '';
        if(params.denticao == true) boca += 'Dentição completa, ';
        if(params.protese == true) boca += 'Uso de prótese, ';
        if(params.arcada == true) boca += 'Arcada dentária incompleta, ';

        if(params.saburra == true) boca += 'Saburra lingual, ';
        if(params.seca == true) boca += 'Língua seca, ';
        if(params.lisa == true) boca += 'Língua lisa ';
        if(params.geografica == true) boca += 'Língua geográfica, ';
        if(params.fissurada == true) boca += 'Língua fissurada, ';

        if(params.macroglossia == true) boca += 'Macroglossia, ';
        if(params.lesoes == true) boca += 'Lesões, ';
        return boca;
    }

    function nariz(params){
        if(params.hidratado == true) return 'hidratado';
        if(params.ressecado == true) return 'ressecado';
        if(params.pervio == true) return 'Pérvio';
        if(params.obstruido == true) return 'Obstruído';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }

    function ouvidos(params){
        if(params.detritos == true) return 'Detritos ceruminosos';
        if(params.descamacao == true) return 'Descamação';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }

    function pescoco(params){
        if(params.desvio == true) return 'Desvio';
        if(params.bocio == true) return 'Bócio';
        if(params.hipertrofia == true) return 'Hipertrofia de linfonodo';
        if(params.sopro == true) return 'Sopro';
        if(params.ingurgitamento == true) return 'Ingurgitamento';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }

    //torax
    function toraxForma(params){
        if(params.chato == true) return 'Chato';
        if(params.barril == true) return 'Barril';
        if(params.infundibiliforme == true) return 'Infundibiliforme';
        if(params.cifotico == true) return 'Cifótico';
        if(params.escoliotico == true) return 'Escoliótico';
        if(params.cariniforme == true) return 'Cariniforme';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function toraxPneumotorax(params){
        if(params.ausente == true) return 'Ausente';
        if(params.presente == true) return 'Presente';
        return '';
    }
    function toraxHemotorax(params){
        if(params.ausente == true) return 'Ausente';
        if(params.presente == true) return 'Presente';
        return '';
    }
    function toraxRitmoRespiratorio(params){
        if(params.dispneia == true) return 'Dispneia';
        if(params.platipneia == true) return 'Platipneia';
        if(params.ortopneia == true) return 'Ortopneia';
        if(params.trepopneia == true) return 'Trepopneia';
        if(params.cheyne == true) return 'Cheyne - Stokes';
        if(params.biot == true) return 'Biot';
        if(params.kussmaul == true) return 'Kussmaul';
        if(params.supirosa == true) return 'Supirosa';
        return '';
    }
    function toraxExpansividade(params){
        if(params.pouco == true) return 'Pouco expansivo';
        if(params.sem == true) return 'Sem anormalidade';
        return '';
    }
    function toraxSons(params){
        if(params.fino == true) return 'Estertor fino (D/E)';
        if(params.grosso == true) return 'Estertor grosso (D/E)';
        if(params.roncos == true) return 'Roncos (D/E)';
        if(params.sibilos == true) return 'Sibilos (D/E)';
        if(params.estridor == true) return 'Estridor (D/E)';
        if(params.atrito == true) return 'Atrito pleural (D/E)';
        if(params.sopro == true) return 'Sopro anfórico (D/E)';
        if(params.murmuros == true) return 'Murmúros Vesiculares';
        return '';
    }
    //acabou torax
    function cardiaco(params){
        var cardio = '';

        if(params.apresenta_sopros == true) cardio += 'Apresenta sopros, ';
        if(params.não_apresenta_sopros == true) cardio += 'Não apresenta sopros, ';
        if(params.bnf_2t == true) cardio += 'BNF em 2T, ';
        if(params.bnf_3t == true) cardio += 'BNF em 3T, ';
        if(params.binario == true) cardio += 'Ritmo binário, ';
        if(params.triplice == true) cardio += 'Ritmo tríplice, ';
        if(params.bulhas == true) cardio += 'Bulhas Normofonéticas, ';
        if(params.sopro == true) cardio += 'Sopro (Mitral, Tricúspide, Pulmonar e/ou Aórtico), ';

        return cardio;
    }
    function abdomeGeral(ab, ab1, ruidos, reacao){
        var textoFinal = '';

        textoFinal += abdome(ab);
        textoFinal += abdome1(ab1);
        textoFinal += abdome2(ruidos);
        textoFinal += abdome3(reacao);

        return textoFinal;
    }
    function abdome(params){
        var abdome = '';
        if(params.plano == true) abdome += 'plano, ';
        if(params.globoso == true) abdome += 'globoso, ';
        if(params.gravidico == true) abdome += 'gravidico, ';
        if(params.estrias == true) abdome += 'estrias, ';
        if(params.cicatrizes == true) abdome += 'cicatrizes, ';
        if(params.som_abdominal == true) abdome += 'som abdominal, ';
        return abdome;
    }
    function abdome1(params){
        if(params.sem == true) return 'Sem anormalidades';
        var abdome1 = '';
        if(params.peristaltismo == true) abdome1 += 'Sinal de Blumberg +, ';
        if(params.escavado == true) abdome1 += 'Escavado, ';
        if(params.hernia == true) abdome1 += 'Hernia, ';
        if(params.borborigmos == true) abdome1 += 'Borborigmos, ';
        if(params.hepatomegalia == true) abdome1 += 'Hepatomegalia, ';
        if(params.murphy == true) abdome1 += 'Sinal de Murphy +, ';
        if(params.blumberg == true) abdome1 += 'Peristaltismo visível, ';
        if(params.rovsing == true) abdome1 += 'Sinal de Rovsing +, ';
        if(params.massas == true) abdome1 += 'Massas, ';
        if(params.tumoracao == true) abdome1 += 'Tumoração, ';
        if(params.piparote == true) abdome1 += 'Sinal de Piparote +, ';
        if(params.pneumoperitonio == true) abdome1 += 'Pneumoperitônio, ';
        
        return abdome1;
    }
    function abdome2(params){
        var tex = '';
        if(params.ruidos_hidroaereos_presente == true) tex += 'ruídos hidroaéreos presente, ';
        if(params.ruidos_hidroaereos_ausente == true) tex += 'ruídos hidroaéreos ausente, ';
        return tex;
    }
    function abdome3(params){
        var tex1 = '';
        if(params.reação_a_palpação_dolorosa == true) tex1 += 'reação a palpação dolorosa, ';
        if(params.reação_a_palpação_indolor == true) tex1 += 'reação a palpação indolor, ';
        return tex1;
    }
    function geniturinario(params){
        if(params.mucosa_ressecada == true) return 'Mucosa ressecada';
        if(params.mucosa_hidratada == true) return 'Mucosa hidratada';
        if(params.secreções_patogênicas == true) return 'Secreções patogênicas';
        if(params.prurido == true) return 'Prurido';
        if(params.dispareunia == true) return 'Dispareunia';
        if(params.sem == true) return 'Sem anormalidades';
        return '';
    }
    function mmssiiGeral(mmssiiG, simetria, forca){
        var textoGeral = '';

        textoGeral += mmssii(mmssiiG);
        textoGeral += mmiiMMSS1(simetria);
        textoGeral += mmiiMMSS2(forca);

        return textoGeral;
    }
    function mmssii(params){
        var tex = '';
        if(params.sem == true) return 'Sem anormalidades';

        if(params.perfundidos == true) tex += 'Bem perfundidos, ';
        if(params.aquecidos == true) tex += 'Aquecidos, ';
        if(params.edema == true) tex += 'Edema, ';
        return tex;
    }
    function mmiiMMSS1(params){
        var tex = '';
        if(params.mmii_e_mmss_simetricos == true) tex += 'Simétricos, ';
        if(params.mmii_e_mmss_não_simetricos == true) tex += 'Não simétricos, ';
        return tex;
    }
    function mmiiMMSS2(params){
        var tex = '';
        if(params.força_muscular_preservada == true) tex += 'Força muscular preservada, ';
        if(params.força_muscular_não_preservada == true) tex += 'Força muscular não preservada, ';
        return tex;
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
                    <Text style={{fontSize:16, fontWeight:'bold', textAlign:'center', paddingTop:20}}>
                        {route.params.dadosGerais.data ?? '' } - {route.params.dadosGerais.hora ?? ''}
                        {'\n'}
                        {route.params.dadosGerais.iniciais_paciente ?? ''}
                    </Text>
                    <Text style={styles.textoRelatorio}>
                        O paciente esta {estado1(route.params.estadoPaciente1)}, {estado2(route.params.estadoPaciente2)} no tempo, espaço e pessoa e {estado3(route.params.estadoPaciente3)}.
                        {'\n'}Ao exame físico:
                        {'\n'}Pele: 
                        {'\n'}Coloração: {peleColoracao(route.params.coloracao)}, Integridade: {peleIntegridade(route.params.integridade)}, Umidade: {peleUmidade(route.params.umidade)}, Textura: {peleTextura(route.params.textura)}, Espessura: {peleEspessura(route.params.espessura)}, Temperatura {peleTemperatura(route.params.temperatura)}, Elasticidade/mobilidade: {peleElasticidade(route.params.elasticidade)}, Tugos: {peleTurgos(route.params.turgor)}, Sensibilidade: {peleSensibilidade(route.params.sensibilidade)}, Lesões: {peleLesoes(route.params.lesoes)}. 
                        {'\n'}Cabeça: 
                        {'\n'}Tamanho e forma: {cabecaTamanhoForma(route.params.tamanho)}, Posição e movimentos: {cabecaPosicao(route.params.posicao)}, Superfície e couro cabeludo: {cabecaSuperficie(route.params.superficie)}, Face: {cabecaFace(route.params.face)}. 
                        {'\n'}Olhos e superfícies: 
                        {'\n'}Pálpebras, cílios e região periorbicular: {olhosPalpebras(route.params.palpebras)}, Globos oculares:{olhosGlobosOculares(route.params.globosOculares)}, Conjutiva: {olhosConjutiva(route.params.conjutiva)}, Esclerótica, córnea e cristalino: {olhosEsclerotica(route.params.esclerotica)}, Reflexos: {olhosReflexos(route.params.reflexos)}.
                        {'\n'}Nariz: {nariz(route.params.nariz)}.
                        {'\n'}Ouvidos {ouvidos(route.params.ouvidos)}.
                        {'\n'}Boca: {boca(route.params.boca)}.
                        {'\n'}Pescoço: {pescoco(route.params.pescoco)}.
                        {'\n'}Tórax: 
                        {'\n'}Forma: {toraxForma(route.params.forma)} , Pneumotórax: {toraxPneumotorax(route.params.pneumotorax)}, Hemotórax: {toraxHemotorax(route.params.hemotorax)}, Ritmo respiratório: {toraxRitmoRespiratorio(route.params.ritmoRespiratorio)}, Expansibilidade: {toraxExpansividade(route.params.expansibilidade)}, Sons:{toraxSons(route.params.sons)}.
                        {'\n'}Cardíaco: {cardiaco(route.params.cardiaco)}.
                        {'\n'}Abdômen: {abdomeGeral(route.params.abdome, route.params.abdome1, route.params.abdomeRuidos, route.params.abdomeReacao)}.
                        {'\n'}Geniturinário, reto e ânus: {geniturinario(route.params.geniturinarioRetoAnus)} e 
                        MMSSII: {mmssiiGeral(route.params.mmssii, route.params.mmssMmiiSimetria, route.params.mmssMmiiForcaMuscular)}{'\n'}
                        Sinais vitais:{'\n'}
                        Temperatura {route.params.sinaisVitais.temperatura} º, Frequência cardíaca de {route.params.sinaisVitais.frequenciaCardiaca} bpm, Pressão arterial {route.params.sinaisVitais.pressaoArterial1} - {route.params.sinaisVitais.pressaoArterial2} mmHg.
                        {'\n'}IMC: 
                        {'\n'}Peso {route.params.sinaisVitais.imcPeso} kg, Altura {route.params.sinaisVitais.imcAltura} cm,
                        Amplitude da frequência respiratória {fr(route.params.amplitudeDaFr)}, Ritmo da frequência respiratória {route.params.ritmoDaFr.regular ? 'regular' : 'irregular'},
                        Amplitude da frequência cardíaca {route.params.amplitudeDaFc.celere ? 'célere' : 'filiforme'}, Ritmo da frequência cardíaca {route.params.ritmoDaFC.regular ? 'regular' : 'irregular'}
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
        height:500,
        width:350,
        marginTop:30
        
    },
    textoRelatorio:{
        paddingTop:15,
        marginLeft:10,
        paddingBottom:15,
        fontSize: 16
    },
    tituloRelatorio: {
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center',
        paddingTop:20
    },
});