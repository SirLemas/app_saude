import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {useRoute} from '@react-navigation/native';

export default function ProfissionaViewRelatorio() {

    const route = useRoute();

    function estado1(params){
        var estado = '';
        if(params.acamado == true) estado+= 'acamado, ';
        if(params.deambulando == true) estado+= 'deambulando, ';
        return estado;
    }
    function estado2(params){
        var estado2 = '';
        if(params.orientado == true) estado2 += 'orientado, ';
        if(params.desorientado == true) estado2 += 'desorientado, ';
        return estado2;
    }
    function estado3(params){
        var estado3 = '';
        if(params.colaborativo == true) estado3 += 'colaborativo, ';
        if(params.nao_colaborativo == true) estado3 += 'não colaborativo, ';
        return estado3;
    }
    //pele
    function peleColoracao(params){
        var pele = '';
        if(params.palidez == true) pele += 'Palidez, ';
        if(params.eritrose == true) pele += 'Eritrose, ';
        if(params.cianose == true) pele += 'Cianose, ';
        if(params.ictericia == true) pele += 'Icterícia, ';
        if(params.albinismo == true) pele += 'Albinismo, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return pele;
    }
    function peleIntegridade(params){
        var integridade = '';
        if(params.exulceracao == true) integridade += 'Exulceração, ';
        if(params.ulceracao == true) integridade += 'Ulceração, ';
        if(params.fissura == true) integridade += 'Fissura, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return integridade;
    }
    function peleUmidade(params){
        var umidade = '';
        if(params.seca == true) umidade += 'Seca, ';
        if(params.umida == true) umidade += 'Úmida, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return umidade;
    }
    function peleTextura(params){
        var textura = '';
        if(params.lisa == true) textura += 'Lisa/fina, ';
        if(params.aspera == true) textura += 'Áspera, ';
        if(params.enrugada == true) textura += 'Enrugada, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return textura;
    }
    function peleEspessura(params){
        var espessura = '';
        if(params.atrofica == true) espessura += 'Atrófica, ';
        if(params.hipertrofica == true) espessura += 'Hipertrófica, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return espessura;
    }
    function peleTemperatura(params){
        var temperatura = '';
        if(params.normal == true) temperatura += 'Normal, ';
        if(params.aumentada == true) temperatura += 'Aumentada, ';
        if(params.diminuida == true) temperatura += 'Diminuída, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return temperatura;
    }
    function peleElasticidade(params){
        var elasticidade = '';
        if(params.aumentada == true) elasticidade += 'Aumentada, ';
        if(params.diminuida == true) elasticidade += 'Diminuída, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return elasticidade;
    }
    function peleTurgos(params){
        var turgos = '';
        if(params.aumentado == true) turgos += 'Aumentado, ';
        if(params.diminuido == true) turgos += 'Diminuído, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return turgos;
    }
    function peleSensibilidade(params){
        var sensibilidade = '';
        if(params.dolorosa == true) sensibilidade += 'Dolorosa (presente ou ausente), ';
        if(params.tatil == true) sensibilidade += 'Tátil (presente ou ausente), ';
        if(params.termica == true) sensibilidade += 'Térmica (presente ou ausente), ';
        return sensibilidade;
    }
    function peleLesoes(params){
        var lesoes = '';
        if(params.nao == true) lesoes += 'Não apresenta, ';
        if(params.apresenta == true) lesoes += 'Apresenta, ';
        return lesoes;
    }
    //cabeça
    function cabecaTamanhoForma(params) {
        var tamanhoForma = '';
        if(params.macrocefalia == true) tamanhoForma += 'Macrocefalia, ';
        if(params.microcefalia == true) tamanhoForma += 'Microcefalia, ';
        if(params.acrocefalia == true) tamanhoForma += 'Acrocefalia, ';
        if(params.escalocefalia == true) tamanhoForma += 'Escalocefalia, ';
        if(params.dolicocefalia == true) tamanhoForma += 'Dolicocefalia, ';
        if(params.braquicefalia == true) tamanhoForma += 'Braquicefalia, ';
        if(params.plagiocefalia == true) tamanhoForma += 'Plagiocefalia, ';
        return tamanhoForma;
    }
    function cabecaPosicao(params) {
        var posicao = '';
        if(params.torcicolo == true) posicao += 'Torcicolo, ';
        if(params.tiques == true) posicao += 'Tiques, ';
        if(params.sem == true) return 'Sem alterações, ';
        return posicao;
    }
    function cabecaSuperficie(params) {
        var superficie = '';
        if(params.tumor == true) superficie += 'Tumor, ';
        if(params.tumefacao == true) superficie += 'Tumefação, ';
        if(params.bossa == true) superficie += 'Bossa, ';
        if(params.hematoma == true) superficie += 'Hematoma, ';
        if(params.depressao == true) superficie += 'Depressão, ';
        if(params.ponto == true) superficie += 'Ponto Doloroso, ';
        if(params.sem == true) return 'Sem alterações, ';
        return superficie;
    }
    function cabecaFace(params) {
        var face = '';
        if(params.simetrica == true) face += 'Simétrica, ';
        if(params.assimetrica == true) face += 'Assimétrica, ';
        return face;
    }
    // olhos e supercilios
    function olhosPalpebras(params){
        var palpebras = '';
        if(params.edema == true) palpebras += 'Edema (D/E), ';
        if(params.retracao == true) palpebras += 'Retração (D/E), ';
        if(params.ptose == true) palpebras += 'Ptose (D/E), ';
        if(params.epicanto == true) palpebras += 'Epicanto (D/E), ';
        if(params.equimose == true) palpebras += 'Equimose (D/E), ';
        if(params.xantelasma == true) palpebras += 'Xantelasma (D/E), ';
        if(params.lagoftalmia == true) palpebras += 'Lagoftalmia (D/E), ';
        if(params.triquiase == true) palpebras += 'Triquíase (D/E), ';
        if(params.entropio == true) palpebras += 'Entrópio (D/E), ';
        if(params.ectropio == true) palpebras += 'Ectrópio (D/E), ';
        if(params.sem == true) return 'Sem anormalidade, ';
        return palpebras;
    }
    function olhosGlobosOculares(params){
        var globosOculares = '';
        if(params.exoftalmia == true) globosOculares += 'Exoftalmia (D/E), ';
        if(params.enoftalmia == true) globosOculares += 'Enoftalmia (D/E), ';
        if(params.desvio == true) globosOculares += 'Desvio (D/E), ';
        if(params.movimento == true) globosOculares += 'Movimento Involuntário (D/E), ';
        if(params.paralisia == true) globosOculares += 'Paralisia Ocular, ';
        if(params.sem == true) return 'Sem anormalidade, ';
        return globosOculares;
    }
    function olhosConjutiva(params){
        var conjutiva = '';
        if(params.conjutivite == true) conjutiva += 'Conjutivite (D/E), ';
        if(params.irite == true) conjutiva += 'Irite (D/E), ';
        if(params.hemorragia == true) conjutiva += 'Hemorragia Subconjuntival (D/E), ';
        if(params.sem == true) return 'Sem anormalidade, ';
        return conjutiva;
    }
    function olhosEsclerotica(params){
        var esclerotica = '';
        if(params.catarata == true) esclerotica += 'Catarata (D/E), ';
        if(params.pterigio == true) esclerotica += 'Pterígio (D/E), ';
        if(params.sem == true) return 'Sem anormalidade, ';
        return esclerotica;
    }
    function olhosReflexos(params){
        var reflexos = '';
        if(params.fotomotor_dir == true) reflexos += 'Fotomotor olho direito, ';
        if(params.fotomotor_esq == true) reflexos += 'Fotomotor olho esquerdo, ';
        if(params.consensual_dir == true) reflexos += 'Consensual olho direito, ';
        if(params.consensual_esq == true) reflexos += 'Consensual olho esquerdo, ';
        if(params.acomodacao_dir == true) reflexos += 'Acomodação - Convergência olho direito, ';
        if(params.acomodacao_esq == true) reflexos += 'Acomodação - Convergência olho esquerdo, ';
        return reflexos;
    }
    // Boca
    function boca(params){

        if(params.sem == true) return 'Sem anormalidades, ';

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
        var nariz = '';
        if(params.hidratado == true) nariz += 'Hidratado, ';
        if(params.ressecado == true) nariz += 'Ressecado, ';
        if(params.pervio == true) nariz += 'Pérvio, ';
        if(params.obstruido == true) nariz += 'Obstruído, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return nariz;
    }
    function ouvidos(params){
        var ouvidos = '';
        if(params.detritos == true) ouvidos += 'Detritos ceruminosos, ';
        if(params.descamacao == true) ouvidos += 'Descamação, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return ouvidos;
    }
    function pescoco(params){
        var pescoco = '';
        if(params.desvio == true) pescoco += 'Desvio, ';
        if(params.bocio == true) pescoco += 'Bócio, ';
        if(params.hipertrofia == true) pescoco += 'Hipertrofia de linfonodo, ';
        if(params.sopro == true) pescoco += 'Sopro, ';
        if(params.ingurgitamento == true) pescoco += 'Ingurgitamento, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return pescoco;
    }
    //torax
    function toraxForma(params){
        var forma = '';
        if(params.chato == true) forma += 'Chato, ';
        if(params.barril == true) forma += 'Barril, ';
        if(params.infundibiliforme == true) forma += 'Infundibiliforme, ';
        if(params.cifotico == true) forma += 'Cifótico, ';
        if(params.escoliotico == true) forma += 'Escoliótico, ';
        if(params.cariniforme == true) forma += 'Cariniforme, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return forma;
    }
    function toraxPneumotorax(params){
        var pneumotorax = '';
        if(params.ausente == true) pneumotorax += 'Ausente, ';
        if(params.presente == true) pneumotorax += 'Presente, ';
        return pneumotorax;
    }
    function toraxHemotorax(params){
        var hemotorax = '';
        if(params.ausente == true) hemotorax += 'Ausente, ';
        if(params.presente == true) hemotorax += 'Presente, ';
        return hemotorax;
    }
    function toraxRitmoRespiratorio(params){
        var ritmoRespiratorio = '';
        if(params.dispneia == true) ritmoRespiratorio += 'Dispneia, ';
        if(params.platipneia == true) ritmoRespiratorio += 'Platipneia, ';
        if(params.ortopneia == true) ritmoRespiratorio += 'Ortopneia, ';
        if(params.trepopneia == true) ritmoRespiratorio += 'Trepopneia, ';
        if(params.cheyne == true) ritmoRespiratorio += 'Cheyne - Stokes, ';
        if(params.biot == true) ritmoRespiratorio += 'Biot, ';
        if(params.kussmaul == true) ritmoRespiratorio += 'Kussmaul, ';
        if(params.supirosa == true) ritmoRespiratorio += 'Supirosa, ';
        return ritmoRespiratorio;
    }
    function toraxExpansividade(params){
        if(params.pouco == true) return 'Pouco expansivo, ';
        if(params.sem == true) return 'Sem anormalidade, ';
        return '';
    }
    function toraxSons(params){
        var sons = '';
        if(params.fino == true) sons += 'Estertor fino (D/E), ';
        if(params.grosso == true) sons += 'Estertor grosso (D/E), ';
        if(params.roncos == true) sons += 'Roncos (D/E), ';
        if(params.sibilos == true) sons += 'Sibilos (D/E), ';
        if(params.estridor == true) sons += 'Estridor (D/E), ';
        if(params.atrito == true) sons += 'Atrito pleural (D/E), ';
        if(params.sopro == true) sons += 'Sopro anfórico (D/E), ';
        if(params.murmuros == true) sons += 'Murmúros Vesiculares, ';
        return sons;
    }
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
        var geniturinario = '';
        if(params.mucosa_ressecada == true) geniturinario += 'Mucosa ressecada, ';
        if(params.mucosa_hidratada == true) geniturinario += 'Mucosa hidratada, ';
        if(params.secreções_patogênicas == true) geniturinario += 'Secreções patogênicas, ';
        if(params.prurido == true) geniturinario += 'Prurido, ';
        if(params.dispareunia == true) geniturinario += 'Dispareunia, ';
        if(params.sem == true) return 'Sem anormalidades, ';
        return geniturinario;
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
        var fr = '';
        if(params.profunda == true) fr += 'profunda, ';
        if(params.normal == true) fr += 'normal, ';
        if(params.superficial == true) fr += 'superficial, ';
        return fr;
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
                        O paciente esta {estado1(route.params.estadoPaciente1)}{estado2(route.params.estadoPaciente2)}no tempo, espaço e pessoa e {estado3(route.params.estadoPaciente3)}.
                        {'\n'}Ao exame físico:
                        {'\n'}Pele: 
                        {'\n'}Coloração: {peleColoracao(route.params.coloracao)}Integridade: {peleIntegridade(route.params.integridade)}Umidade: {peleUmidade(route.params.umidade)}Textura: {peleTextura(route.params.textura)}Espessura: {peleEspessura(route.params.espessura)}Temperatura {peleTemperatura(route.params.temperatura)}Elasticidade/mobilidade: {peleElasticidade(route.params.elasticidade)}Tugos: {peleTurgos(route.params.turgor)}Sensibilidade: {peleSensibilidade(route.params.sensibilidade)}Lesões: {peleLesoes(route.params.lesoes)}. 
                        {'\n'}Cabeça: 
                        {'\n'}Tamanho e forma: {cabecaTamanhoForma(route.params.tamanho)}Posição e movimentos: {cabecaPosicao(route.params.posicao)}Superfície e couro cabeludo: {cabecaSuperficie(route.params.superficie)}Face: {cabecaFace(route.params.face)}. 
                        {'\n'}Olhos e superfícies: 
                        {'\n'}Pálpebras, cílios e região periorbicular: {olhosPalpebras(route.params.palpebras)}Globos oculares:{olhosGlobosOculares(route.params.globosOculares)}Conjutiva: {olhosConjutiva(route.params.conjutiva)}Esclerótica, córnea e cristalino: {olhosEsclerotica(route.params.esclerotica)}Reflexos: {olhosReflexos(route.params.reflexos)}.
                        {'\n'}Nariz: {nariz(route.params.nariz)}.
                        {'\n'}Ouvidos {ouvidos(route.params.ouvidos)}.
                        {'\n'}Boca: {boca(route.params.boca)}.
                        {'\n'}Pescoço: {pescoco(route.params.pescoco)}.
                        {'\n'}Tórax: 
                        {'\n'}Forma: {toraxForma(route.params.forma)}Pneumotórax: {toraxPneumotorax(route.params.pneumotorax)}Hemotórax: {toraxHemotorax(route.params.hemotorax)}Ritmo respiratório: {toraxRitmoRespiratorio(route.params.ritmoRespiratorio)}Expansibilidade: {toraxExpansividade(route.params.expansibilidade)}Sons:{toraxSons(route.params.sons)}.
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
        backgroundColor: '#333652',
        height:550,
        width:375,
        marginTop:30
        
    },
    textoRelatorio:{
        paddingTop:15,
        marginLeft:10,
        paddingBottom:15,
        fontSize: 16,
        color: '#FFFFFF'
    },
    tituloRelatorio: {
        fontWeight:'bold',
        fontSize:22,
        textAlign:'center',
        paddingTop:20,
        color: '#FF5757'
    },
});