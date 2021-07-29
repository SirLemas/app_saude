import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';
import {Input} from 'react-native-elements';
import {TextInputMask} from 'react-native-masked-text';
import {useNavigation} from '@react-navigation/native';

import Checkbox from '../../components/Checkbox';
import Checkbox2 from '../../components/Checkbox2';

export default function ProfissionalData() {

    const navigation = useNavigation();

    const [dadosGerais, setDadosGerais] = useState({});

    const [estadoPaciente1, setEstadoPaciente1] = useState({
        acamado:false,
        deambulando:false
    });

    const [estadoPaciente2, setEstadoPaciente2] = useState({
        orientado:false,
        desorientado:false
    });

    const [estadoPaciente3, setEstadoPaciente3] = useState({
        colaborativo:false,
        nao_colaborativo:false
    });

    //relacionado a pele agora:
    const [coloracao, setColoracao] = useState({
        palidez:false,
        eritrose:false,
        cianose:false,
        ictericia:false,
        albinismo:false,
        sem:false
    });
    const [integridade, setIntegridade] = useState({
        exulceracao:false,
        ulceracao:false,
        fissura:false,
        sem:false
    });
    const [umidade, setUmidade] = useState({
        seca:false,
        umida:false,
        sem:false
    });
    const [textura, setTextura] = useState({
        sem:false,
        lisa:false,
        aspera:false,
        enrugada:false
    });
    const [espessura, setEspessura] = useState({
        sem:false,
        atrofica:false,
        hipertrofica:false
    });
    const [temperatura, setTemperatura] = useState({
        normal:false,
        aumentada:false,
        diminuida:false,
        sem:false
    });
    const [elasticidade, setElasticidade] = useState({
        sem:false,
        aumentada:false,
        diminuida:false
    });

    const [turgor, setTurgor] = useState({
        sem:false,
        aumentado:false,
        diminuido:false
    });
    const [sensibilidade, setSensibilidade] = useState({
        dolorosa:false,
        tatil:false,
        termica:false
    });
    const [lesoes, setLesoes] = useState({
        nao:false,
        apresenta:false
    });
    //

    // relacionado a cabeça agora:
    const [tamanho, setTamanho] = useState({
        sem:false,
        macrocefalia:false,
        microcefalia:false,
        acrocefalia:false,
        escalocefalia:false,
        dolicocefalia:false,
        braquicefalia:false,
        plagiocefalia:false
    });
    const [posicao, setPosicao] = useState({
        torcicolo:false,
        tiques:false,
        sem:false
    });
    const [superficie, setSuperficie] = useState({
        tumor:false,
        tumefacao:false,
        bossa:false,
        hematoma:false,
        depressao:false,
        ponto:false,
        sem:false
    });
    const [face, setFace] = useState({
        simetrica:false,
        assimetrica:false
    });
    //

    // Olhos:
    const [palpebras, setPalpebras] = useState({
        edema:false,
        retracao:false,
        ptose:false,
        epicanto:false,
        equimose:false,
        xantelasma:false,
        lagoftalmia:false,
        triquiase:false,
        entropio:false,
        ectropio:false,
        sem:false
    });
    const [globosOculares, setGlobosOculares] = useState({
        exoftalmia:false,
        enoftalmia:false,
        desvio:false,
        movimento:false,
        paralisia:false,
        sem:false
    });
    const [conjutiva, setConjutiva] = useState({
        conjutivite:false,
        irite:false,
        hemorragia:false,
        sem:false
    });
    const [esclerotica, setEsclerotica] = useState({
        catarata:false,
        pterigio:false,
        sem:false
    });
    const [reflexos, setReflexos] = useState({
        fotomotor_dir:false,
        fotomotor_esq:false,
        consensual_dir:false,
        consensual_esq:false,
        acomodacao_dir:false,
        acomodacao_esq:false
    });
    // 

    const [boca, setBoca] = useState({
        denticao:false,
        protese:false,
        arcada:false,
        saburra:false,
        seca:false,
        lisa:false,
        geografica:false,
        fissurada:false,
        macroglossia:false,
        lesoes:false,
        sem:false
    });

    const [nariz, setNariz] = useState({    
        hidratado:false,
        ressecado:false,
        pervio:false,
        obstruido:false,
        sem:false
    });
    const [ouvidos, setOuvidos] = useState({
        detritos:false,
        descamacao:false,
        sem:false
    });
    const [pescoco, setPescoco] = useState({
        desvio:false,
        bocio:false,
        hipertrofia:false,
        sopro:false,
        ingurgitamento:false,
        sem:false
    });

    const [forma, setForma] = useState({
        chato:false,
        barril:false,
        infundibiliforme:false,
        cifotico:false,
        escoliotico:false,
        cariniforme:false,
        sem:false
    });
    const [pneumotorax, setPneumotorax] = useState({
        ausente:false,
        presente:false
    });
    const [hemotorax, setHemotorax] = useState({
        ausente:false,
        presente:false
    });
    const [ritmoRespiratorio, setRitmoRespiratorio] = useState({
        dispneia:false,
        platipneia:false,
        ortopneia:false,
        trepopneia:false,
        cheyne:false,
        biot:false,
        kussmaul:false,
        supirosa:false
    });
    const [expansibilidade, setExpansibilidade] = useState({
        pouco:false,
        sem:false
    });
    const [sons, setSons] = useState({
        fino:false,
        grosso:false,
        roncos:false,
        sibilos:false,
        estridor:false,
        atrito:false,
        sopro:false,
        murmuros:false 
    });

    const [cardiaco, setCardiaco] = useState({
        apresenta_sopros:false,
        não_apresenta_sopros:false,
        bnf_2t:false,
        bnf_3t:false,
        binario:false,
        triplice:false,
        bulhas:false,
        sopro:false
    });

    const [abdome, setAbdome] = useState({
        plano:false,
        globoso:false,
        gravidico:false,
        estrias:false,
        cicatrizes:false,
        som_abdominal:false
    });
    const [abdome1, setAbdome1] = useState({
        peristaltismo:false,
        escavado:false,
        hernia:false,
        borborigmos:false,
        hepatomegalia:false,
        murphy:false,
        blumberg:false,
        rovsing:false,
        massas:false,
        tumoracao:false,
        piparote:false,
        pneumoperitonio:false,
        sem:false
    });
    const [abdomeRuidos, setAbdomeRuidos] = useState({
        ruidos_hidroaereos_presente:false,
        ruidos_hidroaereos_ausente:false
    });
    const [abdomeReacao, setAbdomeReacao] = useState({
        reação_a_palpação_dolorosa:false,
        reação_a_palpação_indolor:false
    });
    const [geniturinarioRetoAnus, setGeniturinarioRetoAnus] = useState({
        mucosa_ressecada:false,
        mucosa_hidratada:false,
        secreções_patogênicas:false,
        prurido:false,
        dispareunia:false,
        sem:false
    });
    const [mmssii, setMmssii] = useState({
        perfundidos:false,
        aquecidos:false,
        edema:false,
        sem:false
    });
    const [mmssMmiiSimetria, setMmssMmiiSimetria] = useState({
        simetricos:false,
        assimetricos:false
    });
    const [mmssMmiiForcaMuscular, setMmssMmiiForcaMuscular] = useState({
        força_muscular_preservada:false,
        força_muscular_não_preservada:false
    });

    const [sinaisVitais, setSinaisVitais] = useState({});

    const [amplitudeDaFr, setAmplitudeDaFr] = useState({
        profunda:false,
        normal:false,
        superficial:false
    });
    const [ritmoDaFr, setRitmoDaFr] = useState({
        regular:false,
        irregular:false
    });
    const [amplitudeDaFc, setAmplitudeDaFC] = useState({
        celere:false,
        filiforme:false
    });
    const [ritmoDaFC, setRitmoDaFC] = useState({
        regular:false,
        irregular:false
    });

    function gerarRelatorio(){

        let resp = verificarObjetos();
        if(resp['value'] == true){
            return alert(resp['message']);
        }else{
            navigation.navigate('profissional_view_relatorio', {
                dadosGerais,
                estadoPaciente1,
                estadoPaciente2,
                estadoPaciente3,
                //pele
                coloracao,
                integridade,
                umidade,
                textura,
                espessura,
                temperatura,
                elasticidade,
                turgor,
                sensibilidade,
                lesoes,
                //cabeça
                tamanho,
                posicao,
                superficie,
                face,
                //olhos
                palpebras,
                globosOculares,
                conjutiva,
                esclerotica,
                reflexos,
                //encerra olhos
                boca,
                ouvidos,
                nariz,
                pescoco,
                //torax
                forma,
                pneumotorax,
                hemotorax,
                ritmoRespiratorio,
                expansibilidade,
                sons,
                //encerra torax
                cardiaco,
                // abdome
                abdome,
                abdome1,
                abdomeRuidos,
                abdomeReacao,
                // encerra abdome
                geniturinarioRetoAnus,
                mmssii,
                mmssMmiiSimetria,
                mmssMmiiForcaMuscular,
                sinaisVitais,
                amplitudeDaFr,
                ritmoDaFr,
                amplitudeDaFc,
                ritmoDaFC
            });
        }
    }      

    function verificarObjetos(){
        if(objetoVazio(dadosGerais)){
            let array = [];
            array['message'] = 'Preencha todos os dados gerais';
            array['value'] = true;
            return array;
        } 
        if(objetoVazio(sinaisVitais)){
            let array = [];
            array['message'] = 'Preencha todos os dados de sinais vitais';
            array['value'] = true;
            return array;
        }

        let array = [];
        array['value'] = false;
        return array;
    }

    function objetoVazio(obj){
        if(Object.keys(obj).length === 0){
            return true;
        }
        return false;
    }

    function checkChange(nome, estado){
        // if(nome === 'acamado') return acamado(estado);
        if(nome === 'acamado') return setEstadoPaciente1({...estadoPaciente1, acamado:!estado});
        if(nome === 'deambulando') return setEstadoPaciente1({...estadoPaciente1, deambulando:!estado});
        if(nome === 'orientado') return setEstadoPaciente1({...estadoPaciente1, orientado:!estado});
        if(nome === 'desorientado') return setEstadoPaciente1({...estadoPaciente1, desorientado:!estado});
        if(nome === 'colaborativo') return setEstadoPaciente1({...estadoPaciente1, colaborativo:!estado});
        if(nome === 'nao_colaborativo') return setEstadoPaciente1({...estadoPaciente1, nao_colaborativo:!estado});
    }
    // Coloração
    function checkChangeColoracao(nome, estado){
        if(nome === 'palidez') return setColoracao({...coloracao, palidez:!estado});
        if(nome === 'eritrose') return setColoracao({...coloracao, eritrose:!estado});
        if(nome === 'cianose') return setColoracao({...coloracao, cianose:!estado});
        if(nome === 'ictericia') return setColoracao({...coloracao, ictericia:!estado});
        if(nome === 'albinismo') return setColoracao({...coloracao, albinismo:!estado});
        if(nome === 'sem') return setColoracao({...coloracao, sem:!estado});
    }
    // Integridade
    function checkChangeIntegridade(nome, estado){
        if(nome === 'exulceracao') return setIntegridade({...integridade, exulceracao:!estado});
        if(nome === 'ulceracao') return setIntegridade({...integridade, ulceracao:!estado});
        if(nome === 'fissura') return setIntegridade({...integridade, fissura:!estado});
        if(nome === 'sem') return setIntegridade({...integridade, sem:!estado});
    }
    // Umidade
    function checkChangeUmidade(nome, estado){
        if(nome === 'seca') return setUmidade({...umidade, seca:!estado});
        if(nome === 'umida') return setUmidade({...umidade, umida:!estado});
        if(nome === 'sem') return setUmidade({...umidade, sem:!estado});
    }
    // Textura
    function checkChangeTextura(nome, estado){
        if(nome === 'lisa') return setTextura({...textura, lisa:!estado});
        if(nome === 'aspera') return setTextura({...textura, aspera:!estado});
        if(nome === 'enrugada') return setTextura({...textura, enrugada:!estado});
        if(nome === 'sem') return setTextura({...textura, sem:!estado});
    }
    // Espessura
    function checkChangeEspessura(nome, estado){
        if(nome === 'atrofica') return setEspessura({...espessura, atrofica:!estado});
        if(nome === 'hipertrofica') return setEspessura({...espessura, hipertrofica:!estado});
        if(nome === 'sem') return setEspessura({...espessura, sem:!estado});
    }     
    // Temperatura
    function checkChangeTemperatura(nome, estado){
        if(nome === 'normal') return setTemperatura({...temperatura, normal:!estado});
        if(nome === 'aumentada') return setTemperatura({...temperatura, aumentada:!estado});
        if(nome === 'diminuida') return setTemperatura({...temperatura, diminuida:!estado});
        if(nome === 'sem') return setTemperatura({...temperatura, sem:!estado});
    }
    // Elasticidade
    function checkChangeElasticidade(nome, estado){
        if(nome === 'aumentada') return setElasticidade({...elasticidade, aumentada:!estado});
        if(nome === 'diminuida') return setElasticidade({...elasticidade, diminuida:!estado});
        if(nome === 'sem') return setElasticidade({...elasticidade, sem:!estado});
    }
    // Turgor
    function checkChangeTurgor(nome, estado){
        if(nome === 'sem') return setTurgor({...turgor, sem:!estado});
        if(nome === 'aumentado') return setTurgor({...turgor, aumentado:!estado});
        if(nome === 'diminuido') return setTurgor({...turgor, diminuido:!estado});
    }
    // Térmica
    function checkChangeSensibilidade(nome, estado){
        if(nome === 'dolorosa') return setSensibilidade({...sensibilidade, dolorosa:!estado});
        if(nome === 'tatil') return setSensibilidade({...sensibilidade, tatil:!estado});
        if(nome === 'termica') return setSensibilidade({...sensibilidade, termica:!estado});
    }
    // Lesoes
    function checkChangeLesoes(nome, estado){
        if(nome === 'nao') return setLesoes({...lesoes, nao:!estado});
        if(nome === 'apresenta') return setLesoes({...lesoes, apresenta:!estado});
    }
    // Tamanho
    function checkChangeTamanho(nome, estado){
        if(nome === 'sem') return setTamanho({...tamanho, sem:!estado});
        if(nome === 'macrocefalia') return setTamanho({...tamanho, macrocefalia:!estado});
        if(nome === 'microcefalia') return setTamanho({...tamanho, microcefalia:!estado});
        if(nome === 'acrocefalia') return setTamanho({...tamanho, acrocefalia:!estado});
        if(nome === 'escalocefalia') return setTamanho({...tamanho, escalocefalia:!estado});
        if(nome === 'dolicocefalia') return setTamanho({...tamanho, dolicocefalia:!estado});
        if(nome === 'braquicefalia') return setTamanho({...tamanho, braquicefalia:!estado});
        if(nome === 'plagiocefalia') return setTamanho({...tamanho, plagiocefalia:!estado});
    }
    // Posicao
    function checkChangePosicao(nome, estado){
        if(nome === 'torcicolo') return setPosicao({...posicao, torcicolo:!estado});
        if(nome === 'tiques') return setPosicao({...posicao, tiques:!estado});
        if(nome === 'sem') return setPosicao({...posicao, sem:!estado});
    }
    // Superficie
    function checkChangeSuperficie(nome, estado){
        if(nome === 'tumor') return setSuperficie({...superficie, tumor:!estado});
        if(nome === 'tumefacao') return setSuperficie({...superficie, tumefacao:!estado});
        if(nome === 'bossa') return setSuperficie({...superficie, bossa:!estado});
        if(nome === 'hematoma') return setSuperficie({...superficie, hematoma:!estado});
        if(nome === 'depressao') return setSuperficie({...superficie, depressao:!estado});
        if(nome === 'ponto') return setSuperficie({...superficie, ponto:!estado});
        if(nome === 'sem') return setSuperficie({...superficie, sem:!estado});
    }
    // Face
    function checkChangeFace(nome, estado){
        if(nome === 'simetrica') return setFace({...face, simetrica:!estado});
        if(nome === 'assimetrica') return setFace({...face, assimetrica:!estado});
    }  
    // Olhos - Palpebras
    function checkChangePalpebras(nome, estado){
        if(nome === 'edema') return setPalpebras({...palpebras, edema:!estado});
        if(nome === 'retracao') return setPalpebras({...palpebras, retracao:!estado});
        if(nome === 'ptose') return setPalpebras({...palpebras, ptose:!estado});
        if(nome === 'epicanto') return setPalpebras({...palpebras, epicanto:!estado});
        if(nome === 'equimose') return setPalpebras({...palpebras, equimose:!estado});
        if(nome === 'xantelasma') return setPalpebras({...palpebras, xantelasma:!estado});
        if(nome === 'lagoftalmia') return setPalpebras({...palpebras, lagoftalmia:!estado});
        if(nome === 'triquiase') return setPalpebras({...palpebras, triquiase:!estado});
        if(nome === 'entropio') return setPalpebras({...palpebras, entropio:!estado});
        if(nome === 'ectropio') return setPalpebras({...palpebras, ectropio:!estado});
        if(nome === 'sem') return setPalpebras({...palpebras, sem:!estado});
    }
    // Olhos - Globos Oculares
    function checkChangeGlobosOculares(nome, estado){
        if(nome === 'exoftalmia') return setGlobosOculares({...globosOculares, exoftalmia:!estado});
        if(nome === 'enoftalmia') return setGlobosOculares({...globosOculares, enoftalmia:!estado});
        if(nome === 'desvio') return setGlobosOculares({...globosOculares, desvio:!estado});
        if(nome === 'movimento') return setGlobosOculares({...globosOculares, movimento:!estado});
        if(nome === 'paralisia') return setGlobosOculares({...globosOculares, paralisia:!estado});
        if(nome === 'sem') return setGlobosOculares({...globosOculares, sem:!estado});
    }
    // Olhos - Conjutiva
    function checkChangeConjutiva(nome, estado){
        if(nome === 'conjutivite') return setConjutiva({...conjutiva, conjutivite:!estado});
        if(nome === 'irite') return setConjutiva({...conjutiva, irite:!estado});
        if(nome === 'hemorragia') return setConjutiva({...conjutiva, hemorragia:!estado});
        if(nome === 'sem') return setConjutiva({...conjutiva, sem:!estado});
    }
    // Olhos - Esclerotica
    function checkChangeEsclerotica(nome, estado){
        if(nome === 'catarata') return setEsclerotica({...esclerotica, catarata:!estado});
        if(nome === 'pterigio') return setEsclerotica({...esclerotica, pterigio:!estado});
        if(nome === 'sem') return setEsclerotica({...esclerotica, sem:!estado});
    }
    // Olhos - Reflexos
    function checkChangeReflexos(nome, estado){
        if(nome === 'fotomotor_dir') return setReflexos({...reflexos, fotomotor_dir:!estado});
        if(nome === 'fotomotor_esq') return setReflexos({...reflexos, fotomotor_esq:!estado});
        if(nome === 'consensual_dir') return setReflexos({...reflexos, consensual_dir:!estado});
        if(nome === 'consensual_esq') return setReflexos({...reflexos, consensual_esq:!estado});
        if(nome === 'acomodacao_dir') return setReflexos({...reflexos, acomodacao_dir:!estado});
        if(nome === 'acomodacao_esq') return setReflexos({...reflexos, acomodacao_esq:!estado});
    }
    // Boca
    function checkChangeBoca(nome, estado){
        if(nome === 'denticao') return setBoca({...boca, denticao:!estado});
        if(nome === 'protese') return setBoca({...boca, protese:!estado});
        if(nome === 'arcada') return setBoca({...boca, arcada:!estado});
        if(nome === 'saburra') return setBoca({...boca, saburra:!estado});
        if(nome === 'seca') return setBoca({...boca, seca:!estado});
        if(nome === 'lisa') return setBoca({...boca, lisa:!estado});
        if(nome === 'geografica') return setBoca({...boca, geografica:!estado});
        if(nome === 'fissurada') return setBoca({...boca, fissurada:!estado});
        if(nome === 'macroglossia') return setBoca({...boca, macroglossia:!estado});
        if(nome === 'lesoes') return setBoca({...boca, lesoes:!estado});
        if(nome === 'sem') return setBoca({...boca, sem:!estado});
    }
    // Nariz
    function checkChangeNariz(nome, estado){
        if(nome === 'hidratado') return setNariz({...nariz, hidratado:!estado});
        if(nome === 'ressecado') return setNariz({...nariz, ressecado:!estado});
        if(nome === 'pervio') return setNariz({...nariz, pervio:!estado});
        if(nome === 'obstruido') return setNariz({...nariz, obstruido:!estado});
        if(nome === 'sem') return setNariz({...nariz, sem:!estado});
    }
    // Ouvidos
    function checkChangeOuvidos(nome, estado){
        if(nome === 'detritos') return setOuvidos({...ouvidos, detritos:!estado});
        if(nome === 'descamacao') return setOuvidos({...ouvidos, descamacao:!estado});
        if(nome === 'sem') return setOuvidos({...ouvidos, sem:!estado});
    }
    // Pescoço
    function checkChangePescoco(nome, estado){
        if(nome === 'desvio') return setPescoco({...pescoco, desvio:!estado});
        if(nome === 'bocio') return setPescoco({...pescoco, bocio:!estado});
        if(nome === 'hipertrofia') return setPescoco({...pescoco, hipertrofia:!estado});
        if(nome === 'sopro') return setPescoco({...pescoco, sopro:!estado});
        if(nome === 'ingurgitamento') return setPescoco({...pescoco, ingurgitamento:!estado});
        if(nome === 'sem') return setPescoco({...pescoco, sem:!estado});
    }
    // Forma
    function checkChangeForma(nome, estado){
        if(nome === 'chato') return setForma({...forma, chato:!estado});
        if(nome === 'barril') return setForma({...forma, barril:!estado});
        if(nome === 'infundibiliforme') return setForma({...forma, infundibiliforme:!estado});
        if(nome === 'cifotico') return setForma({...forma, cifotico:!estado});
        if(nome === 'escoliotico') return setForma({...forma, escoliotico:!estado});
        if(nome === 'cariniforme') return setForma({...forma, cariniforme:!estado});
        if(nome === 'sem') return setForma({...forma, sem:!estado});
    }
    // Pneumotorax
    function checkChangePneumotorax(nome, estado){
        if(nome === 'ausente') return setPneumotorax({...pneumotorax, ausente:!estado});
        if(nome === 'presente') return setPneumotorax({...pneumotorax, presente:!estado});
    }
    // Hemotorax
    function checkChangeHemotorax(nome, estado){
        if(nome === 'ausente') return setHemotorax({...hemotorax, ausente:!estado});
        if(nome === 'presente') return setHemotorax({...hemotorax, presente:!estado});
    }
    // Ritmo Respiratorio
    function checkChangeRitmoRespiratorio(nome, estado){
        if(nome === 'dispineia') return setRitmoRespiratorio({...ritmoRespiratorio, dispneia:!estado});
        if(nome === 'platipneia') return setRitmoRespiratorio({...ritmoRespiratorio, platipneia:!estado});
        if(nome === 'ortopneia') return setRitmoRespiratorio({...ritmoRespiratorio, ortopneia:!estado});
        if(nome === 'trepopneia') return setRitmoRespiratorio({...ritmoRespiratorio, trepopneia:!estado});
        if(nome === 'cheyne') return setRitmoRespiratorio({...ritmoRespiratorio, cheyne:!estado});
        if(nome === 'biot') return setRitmoRespiratorio({...ritmoRespiratorio, biot:!estado});
        if(nome === 'kussmaul') return setRitmoRespiratorio({...ritmoRespiratorio, kussmaul:!estado});
        if(nome === 'supirosa') return setRitmoRespiratorio({...ritmoRespiratorio, supirosa:!estado});
    }
    // Expansibilidade
    function checkChangeExpansibilidade(nome, estado){
        if(nome === 'pouco') return setExpansibilidade({...expansibilidade, pouco:!estado});
        if(nome === 'sem') return setExpansibilidade({...expansibilidade, sem:!estado});
    }
    // Sons
    function checkChangeSons(nome, estado){
        if(nome === 'fino') return setSons({...sons, fino:!estado});
        if(nome === 'grosso') return setSons({...sons, grosso:!estado});
        if(nome === 'roncos') return setSons({...sons, roncos:!estado});
        if(nome === 'sibilos') return setSons({...sons, sibilos:!estado});
        if(nome === 'estridor') return setSons({...sons, estridor:!estado});
        if(nome === 'atrito') return setSons({...sons, atrito:!estado});
        if(nome === 'sopro') return setSons({...sons, sopro:!estado});
        if(nome === 'murmuros') return setSons({...sons, murmuros:!estado});
    }
    // Cardiaco
    function checkChangeCardiaco(nome, estado){
        if(nome === 'apresenta_sopros') return setCardiaco({...cardiaco, apresenta_sopros:!estado});
        if(nome === 'não_apresenta_sopros') return setCardiaco({...cardiaco, não_apresenta_sopros:!estado});
        if(nome === 'bnf_2t') return setCardiaco({...cardiaco, bnf_2t:!estado});
        if(nome === 'bnf_3t') return setCardiaco({...cardiaco, bnf_3t:!estado});
        if(nome === 'binario') return setCardiaco({...cardiaco, binario:!estado});
        if(nome === 'triplice') return setCardiaco({...cardiaco, triplice:!estado});
        if(nome === 'bulhas') return setCardiaco({...cardiaco, bulhas:!estado});
        if(nome === 'sopro') return setCardiaco({...cardiaco, sopro:!estado});
    }
    // Abdomem
    function checkChangeAbdome(nome, estado){
        if(nome === 'plano') return setAbdome({...abdome, plano:!estado});
        if(nome === 'globoso') return setAbdome({...abdome, globoso:!estado});
        if(nome === 'gravidico') return setAbdome({...abdome, gravidico:!estado});
        if(nome === 'estrias') return setAbdome({...abdome, estrias:!estado});
        if(nome === 'cicatrizes') return setAbdome({...abdome, cicatrizes:!estado});
        if(nome === 'som_abdominal') return setAbdome({...abdome, som_abdominal:!estado});
    }
    // Abdomem 1
    function checkChangeAbdome1(nome, estado){
        if(nome === 'peristaltismo') return setAbdome1({...abdome1, peristaltismo:!estado});
        if(nome === 'escavado') return setAbdome1({...abdome1, escavado:!estado});
        if(nome === 'hernia') return setAbdome1({...abdome1, hernia:!estado});
        if(nome === 'borborigmos') return setAbdome1({...abdome1, borborigmos:!estado});
        if(nome === 'hepatomegalia') return setAbdome1({...abdome1, hepatomegalia:!estado});
        if(nome === 'murphy') return setAbdome1({...abdome1, murphy:!estado});
        if(nome === 'blumberg') return setAbdome1({...abdome1, blumberg:!estado});
        if(nome === 'rovsing') return setAbdome1({...abdome1, rovsing:!estado});
        if(nome === 'massas') return setAbdome1({...abdome1, massas:!estado});
        if(nome === 'tumoracao') return setAbdome1({...abdome1, tumoracao:!estado});
        if(nome === 'piparote') return setAbdome1({...abdome1, piparote:!estado});
        if(nome === 'pneumoperitonio') return setAbdome1({...abdome1, pneumoperitonio:!estado});
        if(nome === 'sem') return setAbdome1({...abdome1, sem:!estado});
    }
    // Abdomem Ruidos
    function checkChangeAbdomeRuidos(nome, estado){
        if(nome === 'ruidos_hidroaereos_presente') return setAbdomeRuidos({...abdomeRuidos, ruidos_hidroaereos_presente:!estado});
        if(nome === 'ruidos_hidroaereos_ausente') return setAbdomeRuidos({...abdomeRuidos, ruidos_hidroaereos_ausente:!estado});
    }
    // Abdomem Reação
    function checkChangeAbdomeReacao(nome, estado){
        if(nome === 'reação_a_palpação_dolorosa') return setAbdomeReacao({...abdomeReacao, reação_a_palpação_dolorosa:!estado});
        if(nome === 'reação_a_palpação_indolor') return setAbdomeReacao({...abdomeReacao, reação_a_palpação_indolor:!estado});
    }
    // Geniturinario, Reto e Anus
    function checkChangeGeniturinarioRetoAnus(nome, estado){
        if(nome === 'mucosa_ressecada') return setGeniturinarioRetoAnus({...geniturinarioRetoAnus, mucosa_ressecada:!estado});
        if(nome === 'mucosa_hidratada') return setGeniturinarioRetoAnus({...geniturinarioRetoAnus, mucosa_hidratada:!estado});
        if(nome === 'secreções_patogênicas') return setGeniturinarioRetoAnus({...geniturinarioRetoAnus, secreções_patogênicas:!estado});
        if(nome === 'prurido') return setGeniturinarioRetoAnus({...geniturinarioRetoAnus, prurido:!estado});
        if(nome === 'dispareunia') return setGeniturinarioRetoAnus({...geniturinarioRetoAnus, dispareunia:!estado});
        if(nome === 'sem') return setGeniturinarioRetoAnus({...geniturinarioRetoAnus, sem:!estado});
    }
    // MMSSII
    function checkChangeMmssii(nome, estado){
        if(nome === 'perfundidos') return setMmssii({...mmssii, perfundidos:!estado});
        if(nome === 'aquecidos') return setMmssii({...mmssii, aquecidos:!estado});
        if(nome === 'edema') return setMmssii({...mmssii, edema:!estado});
        if(nome === 'sem') return setMmssii({...mmssii, sem:!estado});
    }
    // MMSSII - Simetria
    function checkChangeMmssiiSimetria(nome, estado){
        if(nome === 'simetricos') return setMmssMmiiSimetria({...mmssMmiiSimetria, simetricos:!estado});
        if(nome === 'assimetricos') return setMmssMmiiSimetria({...mmssMmiiSimetria, assimetricos:!estado});
    }
    // MMSSII - Força Muscular
    function checkChangeMmssiiForcaMuscular(nome, estado){
        if(nome === 'força_muscular_preservada') return setMmssMmiiForcaMuscular({...mmssMmiiForcaMuscular, força_muscular_preservada:!estado});
        if(nome === 'força_muscular_não_preservada') return setMmssMmiiForcaMuscular({...mmssMmiiForcaMuscular, força_muscular_não_preservada:!estado});
    }
    // Amplitude da Frequência Respiratória
    function checkChangeAmplitudeDaFr(nome, estado){
        if(nome === 'profunda') return setAmplitudeDaFr({...amplitudeDaFr, profunda:!estado});
        if(nome === 'normal') return setAmplitudeDaFr({...amplitudeDaFr, normal:!estado});
        if(nome === 'superficial') return setAmplitudeDaFr({...amplitudeDaFr, superficial:!estado});
    }
    // Amplitude da Ritmo da Frequência Respiratória
    function checkChangeRitmoDaFr(nome, estado){
        if(nome === 'regular') return setRitmoDaFr({...ritmoDaFr, regular:!estado});
        if(nome === 'irregular') return setRitmoDaFr({...ritmoDaFr, irregular:!estado});
    }
    // Amplitude da Frequência Cardiaca
    function checkChangeAmplitudeDaFc(nome, estado){
        if(nome === 'celere') return setAmplitudeDaFC({...amplitudeDaFc, celere:!estado});
        if(nome === 'filiforme') return setAmplitudeDaFC({...amplitudeDaFc, filiforme:!estado});
    }
    // Ritmo da Frequência Cardiaca
    function checkChangeRitmoDaFc(nome, estado){
        if(nome === 'regular') return setRitmoDaFC({...ritmoDaFC, regular:!estado});
        if(nome === 'irregular') return setRitmoDaFC({...ritmoDaFC, irregular:!estado});
    }
    return(
        <ScrollView style={{backgroundColor: '#333652'}}>
            <View style={styles.bg}>
                <Text style={styles.titulo}>Dados Gerais</Text>

                <Text style={styles.subtitulo2}>Iniciais do Paciente:</Text>
                <Input 
                    onChangeText={iniciais_paciente => setDadosGerais({...dadosGerais, iniciais_paciente})}
                    color='#FFFFFF'
                />
            <View style={{flexDirection:'row'}}>
                <Text style={styles.subtitulo2}>Data:</Text>
                <TextInputMask 
                    type={'custom'}
                    options={{
                        mask: '99/99/9999'
                    }}
                    keyboardType="numeric"
                    style={styles.maskedInput}
                    value={dadosGerais.data}
                    onChangeText={data => setDadosGerais({...dadosGerais, data})}
                    color='#FFFFFF'
                    maxLength={10}
                />
                <Text style={styles.subtitulo2}>Hora:</Text>
                <TextInputMask 
                    type={'custom'}
                    options={{
                        mask: '99:99'
                    }}
                    keyboardType="numeric"
                    style={[styles.maskedInput, {marginRight: 15}]}
                    value={dadosGerais.hora}
                    onChangeText={hora => setDadosGerais({...dadosGerais, hora})}
                    color='#FFFFFF'
                    maxLength={5}
                />
            </View>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.bg2}>
                <Text style={[styles.titulo]}>Estado Físico Geral do Paciente</Text>
                <View style={{paddingTop:15}}>
                    <View style={{flexDirection:'row'}}>
                        <Checkbox2 
                            checked={estadoPaciente1.acamado}
                            onPress={() => checkChange('acamado', estadoPaciente1.acamado)}
                            texto="Acamado"
                        />
                        <Checkbox2 
                            checked={estadoPaciente1.deambulando}
                            onPress={() => checkChange('deambulando', estadoPaciente1.deambulando)}
                            texto="Deambulando"
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Checkbox2 
                            checked={estadoPaciente2.orientado}
                            onPress={() => checkChange('orientado', estadoPaciente2.orientado)}
                            texto="Orientado"
                        />
                        <Checkbox2 
                            checked={estadoPaciente2.desorientado}
                            onPress={() => checkChange('desorientado', estadoPaciente2.desorientado)}
                            texto="Desorientado"
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Checkbox2 
                            checked={estadoPaciente3.colaborativo}
                            onPress={() => checkChange('colaborativo', estadoPaciente3.colaborativo)}
                            texto="Colaborativo"
                        />
                        <Checkbox2 
                            checked={estadoPaciente3.nao_colaborativo}
                            onPress={() => checkChange('nao_colaborativo', estadoPaciente3.nao_colaborativo)}
                            texto="Não Colaborativo"
                        />
                    </View>
                </View>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.bg2}>
                <Text style={styles.titulo}>Exame Físico</Text>
                <View>
                    <Text style={[styles.subtitulo]}>Pele, mucosa e fâneros</Text>
                    <View>
                        <View style={styles.containerCheckbox}>
                            <Text style={styles.subtitulo}>Coloração:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={coloracao.palidez}
                                    onPress={() => checkChangeColoracao('palidez', coloracao.palidez)}
                                    texto="Palidez"
                                />
                                <Checkbox2 
                                    checked={coloracao.eritrose}
                                    onPress={() => checkChangeColoracao('eritrose', coloracao.eritrose)}
                                    texto="Eritrose"
                                />
                                <Checkbox2 
                                    checked={coloracao.cianose}
                                    onPress={() => checkChangeColoracao('cianose', coloracao.cianose)}
                                    texto="Cianose"
                                />
                                <Checkbox2 
                                    checked={coloracao.ictericia}
                                    onPress={() => checkChangeColoracao('ictericia', coloracao.ictericia)}
                                    texto="Icterícia"
                                />
                                <Checkbox2 
                                    checked={coloracao.albinismo}
                                    onPress={() => checkChangeColoracao('albinismo', coloracao.albinismo)}
                                    texto="Albinismo"
                                />
                                <Checkbox2 
                                    checked={coloracao.sem}
                                    onPress={() => checkChangeColoracao('sem', coloracao.sem)}
                                    texto="Sem Anormalidades"
                                />       
                            </View>
                            <Text style={styles.subtitulo}>Integridade:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={integridade.exulceracao}
                                    onPress={() => checkChangeIntegridade('exulceracao', integridade.exulceracao)}
                                    texto="Exulceração"
                                />
                                <Checkbox2 
                                    checked={integridade.ulceracao}
                                    onPress={() => checkChangeIntegridade('ulceracao', integridade.ulceracao)}
                                    texto="Ulceração"
                                />
                                <Checkbox2 
                                    checked={integridade.fissura}
                                    onPress={() => checkChangeIntegridade('fissura', integridade.fissura)}
                                    texto="Fissura"
                                />
                                <Checkbox2 
                                    checked={integridade.sem}
                                    onPress={() => checkChangeIntegridade('sem', integridade.sem)}
                                    texto="Sem Anormalidades"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Umidade:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={umidade.sem}
                                    onPress={() => checkChangeUmidade('sem', umidade.sem)}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox2 
                                    checked={umidade.seca}
                                    onPress={() => checkChangeUmidade('seca', umidade.seca)}
                                    texto="Seca"
                                />
                                <Checkbox2 
                                    checked={umidade.umida}
                                    onPress={() => checkChangeUmidade('umida', umidade.umida)}
                                    texto="Umida"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Textura:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={textura.sem}
                                    onPress={() => checkChangeTextura('sem', textura.sem)}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox2 
                                    checked={textura.lisa}
                                    onPress={() => checkChangeTextura('lisa', textura.lisa)}
                                    texto="Lisa/fina"
                                />
                                <Checkbox2 
                                    checked={textura.aspera}
                                    onPress={() => checkChangeTextura('aspera', textura.aspera)}
                                    texto="Áspera"
                                />
                                <Checkbox2 
                                    checked={textura.enrugada}
                                    onPress={() => checkChangeTextura('enrugada', textura.enrugada)}
                                    texto="Enrugada"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Espessura:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={espessura.sem}
                                    onPress={() => checkChangeEspessura('espessura', espessura.sem)}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox2 
                                    checked={espessura.atrofica}
                                    onPress={() => checkChangeEspessura('atrofica', espessura.atrofica)}
                                    texto="Atrófica"
                                />
                                <Checkbox2 
                                    checked={espessura.hipertrofica}
                                    onPress={() => checkChangeEspessura('hipertrofica', espessura.hipertrofica)}
                                    texto="Hipertrófica"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Temperatura:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={temperatura.normal}
                                    onPress={() => checkChangeTemperatura('temperatura', temperatura.normal)}
                                    texto="Normal"
                                />
                                <Checkbox2 
                                    checked={temperatura.aumentada}
                                    onPress={() => checkChangeTemperatura('aumentada', temperatura.aumentada)}
                                    texto="Aumentada"
                                />
                                <Checkbox2 
                                    checked={temperatura.diminuida}
                                    onPress={() => checkChangeTemperatura('diminuida', temperatura.diminuida)}
                                    texto="Diminuida"
                                />
                                <Checkbox2 
                                    checked={temperatura.sem}
                                    onPress={() => checkChangeTemperatura('sem', temperatura.sem)}
                                    texto="Sem Anormalidades"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Elasticidade/Mobilidade:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={elasticidade.sem}
                                    onPress={() => checkChangeElasticidade('sem', elasticidade.sem)}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox2 
                                    checked={elasticidade.aumentada}
                                    onPress={() => checkChangeElasticidade('aumentada', elasticidade.aumentada)}
                                    texto="Aumentada"
                                />
                                <Checkbox2 
                                    checked={elasticidade.diminuida}
                                    onPress={() => checkChangeElasticidade('diminuida', elasticidade.diminuida)}
                                    texto="Diminuida"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Turgor:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={turgor.sem}
                                    onPress={() => checkChangeTurgor('sem', turgor.sem)}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox2 
                                    checked={turgor.aumentado}
                                    onPress={() => checkChangeTurgor('aumentado', turgor.aumentado)}
                                    texto="Aumentado"
                                />
                                <Checkbox2 
                                    checked={turgor.diminuido}
                                    onPress={() => checkChangeTurgor('diminuido', turgor.diminuido)}
                                    texto="Diminuido"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Sensibilidade:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={sensibilidade.dolorosa}
                                    onPress={() => checkChangeSensibilidade('dolorosa', sensibilidade.dolorosa)}
                                    texto="Dolorosa (presente ou ausente)"
                                />
                                <Checkbox2 
                                    checked={sensibilidade.tatil}
                                    onPress={() => checkChangeSensibilidade('tatil', sensibilidade.tatil)}
                                    texto="Tátil (presente ou ausente)"
                                />
                                <Checkbox2 
                                    checked={sensibilidade.termica}
                                    onPress={() => checkChangeSensibilidade('termica', sensibilidade.termica)}
                                    texto="Térmica (presente ou ausente)"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Lesões:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={lesoes.nao}
                                    onPress={() => checkChangeLesoes('nao', lesoes.nao)}
                                    texto="Não apresenta"
                                />
                                <Checkbox2 
                                    checked={lesoes.apresenta}
                                    onPress={() => checkChangeLesoes('apresenta', lesoes.apresenta)}
                                    texto="Apresenta"
                                />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Cabeça:</Text>
                    <View style={styles.containerCheckbox}>
                        <Text style={styles.subtitulo}>Tamanho e forma:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={tamanho.sem}
                                    onPress={() => checkChangeTamanho('sem', tamanho.sem)}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox2 
                                    checked={tamanho.macrocefalia}
                                    onPress={() => checkChangeTamanho('macrocefalia', tamanho.macrocefalia)}
                                    texto="Macrocefalia"
                                />
                                <Checkbox2 
                                    checked={tamanho.microcefalia}
                                    onPress={() => checkChangeTamanho('microcefalia', tamanho.microcefalia)}
                                    texto="Microcefalia"
                                />
                                <Checkbox2 
                                    checked={tamanho.acrocefalia}
                                    onPress={() => checkChangeTamanho('acrocefalia', tamanho.acrocefalia)}
                                    texto="Acrocefalia"
                                />
                                <Checkbox2 
                                    checked={tamanho.escalocefalia}
                                    onPress={() => checkChangeTamanho('escalocefalia', tamanho.escalocefalia)}
                                    texto="Escalocefalia"
                                />
                                <Checkbox2 
                                    checked={tamanho.dolicocefalia}
                                    onPress={() => checkChangeTamanho('dolicocefalia', tamanho.dolicocefalia)}
                                    texto="Dolicocefalia"
                                />
                                <Checkbox2 
                                    checked={tamanho.braquicefalia}
                                    onPress={() => checkChangeTamanho('braquicefalia', tamanho.braquicefalia)}
                                    texto="Braquicefalia"
                                />
                                <Checkbox2 
                                    checked={tamanho.plagiocefalia}
                                    onPress={() => checkChangeTamanho('plagiocefalia', tamanho.plagiocefalia)}
                                    texto="Plagiocefalia"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Posição e movimentos:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={posicao.torcicolo}
                                    onPress={() => checkChangePosicao('torcicolo', posicao.torcicolo)}
                                    texto="Torcicolo"
                                />
                                <Checkbox2 
                                    checked={posicao.tiques}
                                    onPress={() => checkChangePosicao('tiques', posicao.tiques)}
                                    texto="Tiques"
                                />
                                <Checkbox2 
                                    checked={posicao.sem}
                                    onPress={() => checkChangePosicao('sem', posicao.sem)}
                                    texto="Sem Alteração"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Superficie e couro cabeludo:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={superficie.tumor}
                                    onPress={() => checkChangeSuperficie('tumor', superficie.tumor)}
                                    texto="Tumor"
                                />
                                <Checkbox2 
                                    checked={superficie.tumefacao}
                                    onPress={() => checkChangeSuperficie('tumefacao', superficie.tumefacao)}
                                    texto="Tumefação"
                                />
                                <Checkbox2 
                                    checked={superficie.bossa}
                                    onPress={() => checkChangeSuperficie('bossa', superficie.bossa)}
                                    texto="Bossa"
                                />
                                <Checkbox2 
                                    checked={superficie.hematoma}
                                    onPress={() => checkChangeSuperficie('hematoma', superficie.hematoma)}
                                    texto="Hematoma"
                                />
                                <Checkbox2 
                                    checked={superficie.depressao}
                                    onPress={() => checkChangeSuperficie('depressao', superficie.depressao)}
                                    texto="Depressão"
                                />
                                <Checkbox2 
                                    checked={superficie.ponto}
                                    onPress={() => checkChangeSuperficie('ponto', superficie.ponto)}
                                    texto="Ponto Doloroso"
                                />
                                <Checkbox2 
                                    checked={superficie.sem}
                                    onPress={() => checkChangeSuperficie('sem', superficie.sem)}
                                    texto="Sem Alterações"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Face:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={face.simetrica}
                                    onPress={() => checkChangeFace('simetrica', face.simetrica)}
                                    texto="Simétrica"
                                />
                                <Checkbox2 
                                    checked={face.assimetrica}
                                    onPress={() => checkChangeFace('assimetrica', face.assimetrica)}
                                    texto="Assimétrica"
                                />
                            </View>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Olhos e supercilios:</Text>
                    <View style={styles.containerCheckbox}>
                        <Text style={styles.subtitulo}>Pálpebras, Cílios e Região Periorbicular:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={palpebras.edema}
                                    onPress={() => checkChangePalpebras('edema', palpebras.edema)}
                                    texto="Edema (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.retracao}
                                    onPress={() => checkChangePalpebras('retracao', palpebras.retracao)}
                                    texto="Retração Palpebral (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.ptose}
                                    onPress={() => checkChangePalpebras('ptose', palpebras.ptose)}
                                    texto="Ptose Palpebral (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.epicanto}
                                    onPress={() => checkChangePalpebras('epicanto', palpebras.epicanto)}
                                    texto="Epicanto (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.equimose}
                                    onPress={() => checkChangePalpebras('equimose', palpebras.equimose)}
                                    texto="Equimose (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.xantelasma}
                                    onPress={() => checkChangePalpebras('xantelasma', palpebras.xantelasma)}
                                    texto="Xantelasma (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.lagoftalmia}
                                    onPress={() => checkChangePalpebras('lagoftalmia', palpebras.lagoftalmia)}
                                    texto="Lagoftalmia (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.triquiase}
                                    onPress={() => checkChangePalpebras('triquiase', palpebras.triquiase)}
                                    texto="Triquíase (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.entropio}
                                    onPress={() => checkChangePalpebras('entropio', palpebras.entropio)}
                                    texto="Entrópio (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.ectropio}
                                    onPress={() => checkChangePalpebras('ectropio', palpebras.ectropio)}
                                    texto="Ectrópio (D/E)"
                                />
                                <Checkbox2 
                                    checked={palpebras.sem}
                                    onPress={() => checkChangePalpebras('sem', palpebras.sem)}
                                    texto="Sem Anormalidade"
                                />
                            </View>

                            <Text style={styles.subtitulo}>Globos Oculares:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={globosOculares.exoftalmia}
                                    onPress={() => checkChangeGlobosOculares('exoftalmia', globosOculares.exoftalmia)}
                                    texto="Exoftalmia (D/E)"
                                />
                                <Checkbox2 
                                    checked={globosOculares.enoftalmia}
                                    onPress={() => checkChangeGlobosOculares('enoftalmia', globosOculares.enoftalmia)}
                                    texto="Enoftalmia (D/E)"
                                />
                                <Checkbox2 
                                    checked={globosOculares.desvio}
                                    onPress={() => checkChangeGlobosOculares('desvio', globosOculares.desvio)}
                                    texto="Desvio (D/E)"
                                />
                                <Checkbox2 
                                    checked={globosOculares.movimento}
                                    onPress={() => checkChangeGlobosOculares('movimento', globosOculares.movimento)}
                                    texto="Movimento Involuntário (D/E)"
                                />
                                <Checkbox2 
                                    checked={globosOculares.paralisia}
                                    onPress={() => checkChangeGlobosOculares('paralisia', globosOculares.paralisia)}
                                    texto="Paralisia Ocular"
                                />
                                <Checkbox2 
                                    checked={globosOculares.sem}
                                    onPress={() => checkChangeGlobosOculares('sem', globosOculares.sem)}
                                    texto="Sem Anormalidade"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Conjutiva:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={conjutiva.conjutivite}
                                    onPress={() => checkChangeConjutiva('conjutivite', conjutiva.conjutivite)}
                                    texto="Conjutivite (D/E)"
                                />
                                <Checkbox2 
                                    checked={conjutiva.irite}
                                    onPress={() => checkChangeConjutiva('irite', conjutiva.irite)}
                                    texto="Irite (D/E)"
                                />
                                <Checkbox2 
                                    checked={conjutiva.hemorragia}
                                    onPress={() => checkChangeConjutiva('hemorragia', conjutiva.hemorragia)}
                                    texto="Hemorragia Subconjuntival (D/E)"
                                />
                                <Checkbox2 
                                    checked={conjutiva.sem}
                                    onPress={() => checkChangeConjutiva('sem', conjutiva.sem)}
                                    texto="Sem Anormalidade"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Esclerótica, Cornea e Cristalino:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={esclerotica.catarata}
                                    onPress={() => checkChangeEsclerotica('catarata', esclerotica.catarata)}
                                    texto="Catarata (D/E)"
                                />
                                <Checkbox2 
                                    checked={esclerotica.pterigio}
                                    onPress={() => checkChangeEsclerotica('pterigio', esclerotica.pterigio)}
                                    texto="Pterígio (D/E)"
                                />
                                <Checkbox2 
                                    checked={esclerotica.sem}
                                    onPress={() => checkChangeEsclerotica('sem', esclerotica.sem)}
                                    texto="Sem Anormalidade"
                                />
                            </View>
                            <Text style={styles.subtitulo}>Reflexos:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox2 
                                    checked={reflexos.fotomotor_dir}
                                    onPress={() => checkChangeReflexos('fotomotor_dir', reflexos.fotomotor_dir)}
                                    texto="Fotomotor Olho Direito"
                                />
                                <Checkbox2 
                                    checked={reflexos.fotomotor_esq}
                                    onPress={() => checkChangeReflexos('fotomotor_esq', reflexos.fotomotor_esq)}
                                    texto="Fotomotor Olho Esquerdo"
                                />
                                <Checkbox2 
                                    checked={reflexos.consensual_dir}
                                    onPress={() => checkChangeReflexos('consensual_dir', reflexos.consensual_dir)}
                                    texto="Consensual Olho Direito"
                                />
                                <Checkbox2 
                                    checked={reflexos.consensual_esq}
                                    onPress={() => checkChangeReflexos('consensual_esq', reflexos.consensual_esq)}
                                    texto="Consensual Olho Esquerdo"
                                />
                                <Checkbox2 
                                    checked={reflexos.acomodacao_dir}
                                    onPress={() => checkChangeReflexos('acomodacao_dir', reflexos.acomodacao_dir)}
                                    texto="Acomodação - Convergência Olho Direito"
                                />
                                <Checkbox2 
                                    checked={reflexos.acomodacao_esq}
                                    onPress={() => checkChangeReflexos('acomodacao_esq', reflexos.acomodacao_esq)}
                                    texto="Acomodação - Convergência Olho Esquerdo"
                                />
                            </View>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Nariz:</Text>
                    <View>
                        <Checkbox2 
                            checked={nariz.hidratado}
                            onPress={() => checkChangeNariz('hidratado', nariz.hidratado)}
                            texto="Hidratado"
                        />
                        <Checkbox2 
                            checked={nariz.ressecado}
                            onPress={() => checkChangeNariz('ressecado', nariz.ressecado)}
                            texto="Ressecado"
                        />
                        <Checkbox2 
                            checked={nariz.pervio}
                            onPress={() => checkChangeNariz('pervio', nariz.pervio)}
                            texto="Pérvio"
                        />
                        <Checkbox2 
                            checked={nariz.obstruido}
                            onPress={() => checkChangeNariz('obstruido', nariz.obstruido)}
                            texto="Obstruído"
                        />
                        <Checkbox2 
                            checked={nariz.sem}
                            onPress={() => checkChangeNariz('sem', nariz.sem)}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Ouvidos:</Text>
                    <View>
                        <Checkbox2 
                            checked={ouvidos.detritos}
                            onPress={() => checkChangeOuvidos('detritos', ouvidos.detritos)}
                            texto="Detritos Ceruminosos"
                        />
                        <Checkbox2 
                            checked={ouvidos.descamacao}
                            onPress={() => checkChangeOuvidos('descamacao', ouvidos.descamacao)}
                            texto="Descamação"
                        />
                        <Checkbox2 
                            checked={ouvidos.sem}
                            onPress={() => checkChangeOuvidos('sem', ouvidos.sem)}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Boca:</Text>
                    <View>
                        <Checkbox2 
                            checked={boca.denticao}
                            onPress={() => checkChangeBoca('denticao', boca.denticao)}
                            texto="Dentição Completa"
                        />
                        <Checkbox2 
                            checked={boca.protese}
                            onPress={() => checkChangeBoca('protese', boca.protese)}
                            texto="Uso de Prótese"
                        />
                        <Checkbox2 
                            checked={boca.arcada}
                            onPress={() => checkChangeBoca('arcada', boca.arcada)}
                            texto="Arcada Dentária Incompleta"
                        />
                        <Checkbox2 
                            checked={boca.saburra}
                            onPress={() => checkChangeBoca('saburra', boca.saburra)}
                            texto="Saburra lingual"
                        />
                        <Checkbox2 
                            checked={boca.seca}
                            onPress={() => checkChangeBoca('seca', boca.seca)}
                            texto="Língua Seca"
                        />
                        <Checkbox2 
                            checked={boca.lisa}
                            onPress={() => checkChangeBoca('lisa', boca.lisa)}
                            texto="Língua Lisa"
                        />
                        <Checkbox2 
                            checked={boca.geografica}
                            onPress={() => checkChangeBoca('geografica', boca.geografica)}
                            texto="Língua Geográfica"
                        />
                        <Checkbox2 
                            checked={boca.fissurada}
                            onPress={() => checkChangeBoca('fissurada', boca.fissurada)}
                            texto="Língua fissurada"
                        />
                        <Checkbox2 
                            checked={boca.macroglossia}
                            onPress={() => checkChangeBoca('macroglossia', boca.macroglossia)}
                            texto="Macroglossia"
                        />
                        <Checkbox2 
                            checked={boca.lesoes}
                            onPress={() => checkChangeBoca('lesoes', boca.lesoes)}
                            texto="Lesões"
                        />
                        <Checkbox2 
                            checked={boca.sem}
                            onPress={() => checkChangeBoca('sem', boca.sem)}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Pescoço:</Text>
                    <View>
                        <Checkbox2 
                            checked={pescoco.desvio}
                            onPress={() => checkChangePescoco('desvio', pescoco.desvio)}
                            texto="Desvio"
                        />
                        <Checkbox2 
                            checked={pescoco.bocio}
                            onPress={() => checkChangePescoco('bocio', pescoco.bocio)}
                            texto="Bócio"
                        />
                        <Checkbox2 
                            checked={pescoco.hipertrofia}
                            onPress={() => checkChangePescoco('hipertrofia', pescoco.hipertrofia)}
                            texto="Hipertrofia de Linfonodo"
                        />
                        <Checkbox2 
                            checked={pescoco.sopro}
                            onPress={() => checkChangePescoco('sopro', pescoco.sopro)}
                            texto="Sopro"
                        />
                        <Checkbox2 
                            checked={pescoco.ingurgitamento}
                            onPress={() => checkChangePescoco('ingurgitamento', pescoco.ingurgitamento)}
                            texto="Ingurgitamento"
                        />
                        <Checkbox2 
                            checked={pescoco.sem}
                            onPress={() => checkChangePescoco('sem', pescoco.sem)}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Toráx:</Text>
                    <Text style={styles.subtitulo}>Forma:</Text>
                    <View>
                        <Checkbox2 
                            checked={forma.chato}
                            onPress={() => checkChangeForma('chato', forma.chato)}
                            texto="Chato"
                        />
                        <Checkbox2 
                            checked={forma.barril}
                            onPress={() => checkChangeForma('barril', forma.barril)}
                            texto="Barril"
                        />
                        <Checkbox2 
                            checked={forma.infundibiliforme}
                            onPress={() => checkChangeForma('infundibiliforme', forma.infundibiliforme)}
                            texto="Infundibiliforme"
                        />
                        <Checkbox2 
                            checked={forma.cifotico}
                            onPress={() => checkChangeForma('cifotico', forma.cifotico)}
                            texto="Cifótico"
                        />
                        <Checkbox2 
                            checked={forma.escoliotico}
                            onPress={() => checkChangeForma('escoliotico', forma.escoliotico)}
                            texto="Escoliótico"
                        />

                        <Checkbox2 
                            checked={forma.cariniforme}
                            onPress={() => checkChangeForma('cariniforme', forma.cariniforme)}
                            texto="Cariniforme"
                        />
                        <Checkbox2 
                            checked={forma.sem}
                            onPress={() => checkChangeForma('sem', forma.sem)}
                            texto="Sem Anormalidades"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Pneumotorax:</Text>
                    <View>
                        <Checkbox2 
                            checked={pneumotorax.ausente}
                            onPress={() => checkChangePneumotorax('ausente', pneumotorax.ausente)}
                            texto="Ausente"
                        />
                        <Checkbox2 
                            checked={pneumotorax.presente}
                            onPress={() => checkChangePneumotorax('presente', pneumotorax.presente)}
                            texto="Presente"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Hemotorax:</Text>
                    <View>
                        <Checkbox2 
                            checked={hemotorax.ausente}
                            onPress={() => checkChangeHemotorax('ausente', hemotorax.ausente)}
                            texto="Ausente"
                        />
                        <Checkbox2 
                            checked={hemotorax.presente}
                            onPress={() => checkChangeHemotorax('presente', hemotorax.presente)}
                            texto="Presente"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Ritmo Respiratório:</Text>
                    <View>
                        <Checkbox2 
                            checked={ritmoRespiratorio.dispneia}
                            onPress={() => checkChangeRitmoRespiratorio('dispneia', ritmoRespiratorio.dispneia)}
                            texto="Dispneia"
                        />

                        <Checkbox2 
                            checked={ritmoRespiratorio.platipneia}
                            onPress={() => checkChangeRitmoRespiratorio('platipneia', ritmoRespiratorio.platipneia)}
                            texto="Platipneia"
                        />
                        <Checkbox2 
                            checked={ritmoRespiratorio.ortopneia}
                            onPress={() => checkChangeRitmoRespiratorio('ortopneia', ritmoRespiratorio.ortopneia)}
                            texto="Ortopneia"
                        />
                        <Checkbox2 
                            checked={ritmoRespiratorio.trepopneia}
                            onPress={() => checkChangeRitmoRespiratorio('trepopneia', ritmoRespiratorio.trepopneia)}
                            texto="Trepopneia"
                        />
                        <Checkbox2 
                            checked={ritmoRespiratorio.cheyne}
                            onPress={() => checkChangeRitmoRespiratorio('cheyne', ritmoRespiratorio.cheyne)}
                            texto="Cheyne - Stokes"
                        />

                        <Checkbox2 
                            checked={ritmoRespiratorio.biot}
                            onPress={() => checkChangeRitmoRespiratorio('biot', ritmoRespiratorio.biot)}
                            texto="Biot"
                        />
                        <Checkbox2 
                            checked={ritmoRespiratorio.kussmaul}
                            onPress={() => checkChangeRitmoRespiratorio('kussmaul', ritmoRespiratorio.kussmaul)}
                            texto="Kussmaul"
                        />
                        <Checkbox2 
                            checked={ritmoRespiratorio.supirosa}
                            onPress={() => checkChangeRitmoRespiratorio('supirosa', ritmoRespiratorio.supirosa)}
                            texto="Supirosa"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Expansibilidade (D/E):</Text>
                    <View>
                        <Checkbox2 
                            checked={expansibilidade.pouco}
                            onPress={() => checkChangeExpansibilidade('pouco', expansibilidade.pouco)}
                            texto="Pouco Expansivo"
                        />
                        <Checkbox2 
                            checked={expansibilidade.sem}
                            onPress={() => checkChangeExpansibilidade('sem', expansibilidade.sem)}
                            texto="Sem Anormalidade"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Sons:</Text>
                    <View>
                        <Checkbox2 
                            checked={sons.fino}
                            onPress={() => checkChangeSons('fino', sons.fino)}
                            texto="Estertor Fino (D/E)"
                        />
                        <Checkbox2 
                            checked={sons.grosso}
                            onPress={() => checkChangeSons('grosso', sons.grosso)}
                            texto="Estertor Grosso (D/E)"
                        />
                        <Checkbox2 
                            checked={sons.roncos}
                            onPress={() => checkChangeSons('roncos', sons.roncos)}
                            texto="Roncos (D/E)"
                        />
                        <Checkbox2 
                            checked={sons.sibilos}
                            onPress={() => checkChangeSons('sibilos', sons.sibilos)}
                            texto="Sibilos (D/E)"
                        />
                        <Checkbox2 
                            checked={sons.estridor}
                            onPress={() => checkChangeSons('estridor', sons.estridor)}
                            texto="Estridor (D/E)"
                        />
                        <Checkbox2 
                            checked={sons.atrito}
                            onPress={() => checkChangeSons('atrito', sons.atrito)}
                            texto="Atrito Pleural (D/E)"
                        />
                        <Checkbox2 
                            checked={sons.sopro}
                            onPress={() => checkChangeSons('sopro', sons.sopro)}
                            texto="Sopro Anfórico (D/E)"
                        />
                        <Checkbox2 
                            checked={sons.murmuros}
                            onPress={() => checkChangeSons('murmuros', sons.murmuros)}
                            texto="Murmúros Vesiculares"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Cardíaco:</Text>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox2 
                                checked={cardiaco.apresenta_sopros}
                                onPress={() => checkChangeCardiaco('apresenta_sopros', cardiaco.apresenta_sopros)}
                                texto="Apresenta sopros"
                            />
                            <Checkbox2 
                                checked={cardiaco.não_apresenta_sopros}
                                onPress={() => checkChangeCardiaco('não_apresenta_sopros', cardiaco.não_apresenta_sopros)}
                                texto="Não apresenta sopros"
                            />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox2 
                                checked={cardiaco.bnf_2t}
                                onPress={() => checkChangeCardiaco('bnf_2t', cardiaco.bnf_2t)}
                                texto="BNF em 2T"
                            />
                            <Checkbox2 
                                checked={cardiaco.bnf_3t}
                                onPress={() => checkChangeCardiaco('bnf_3t', cardiaco.bnf_3t)}
                                texto="BNF em 3T"
                            />
                        </View>
                        <View>
                            <Checkbox2 
                                checked={cardiaco.binario}
                                onPress={() => checkChangeCardiaco('binario', cardiaco.binario)}
                                texto="Ritmo Binário"
                            />
                            <Checkbox2 
                                checked={cardiaco.triplice}
                                onPress={() => checkChangeCardiaco('triplice', cardiaco.triplice)}
                                texto="Ritmo Tríplice"
                            />
                            <Checkbox2 
                                checked={cardiaco.bulhas}
                                onPress={() => checkChangeCardiaco('bulhas', cardiaco.bulhas)}
                                texto="Bulhas Normofonéticas"
                            />
                            <Checkbox2 
                                checked={cardiaco.sopro}
                                onPress={() => checkChangeCardiaco('sopro', cardiaco.sopro)}
                                texto="Sopro (Mitral, Tricúspide, Pulmonar e/ou Aórtico)"
                            />
                    </View>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Abdome:</Text>
                    <View>
                        <Checkbox2 
                            checked={abdome.plano}
                            onPress={() => checkChangeAbdome('plano', abdome.plano)}
                            texto="Plano"
                        />
                        <Checkbox2 
                            checked={abdome.globoso}
                            onPress={() => checkChangeAbdome('globoso', abdome.globoso)}
                            texto="Globoso"
                        />
                        <Checkbox2 
                            checked={abdome.gravidico}
                            onPress={() => checkChangeAbdome('gravidico', abdome.gravidico)}
                            texto="Gravidico"
                        />
                        <Checkbox2 
                            checked={abdome.estrias}
                            onPress={() => checkChangeAbdome('estrias', abdome.estrias)}
                            texto="Estrias"
                        />
                        <Checkbox2 
                            checked={abdome.cicatrizes}
                            onPress={() => checkChangeAbdome('cicatrizes', abdome.cicatrizes)}
                            texto="Cicatrizes"
                        />
                        <Checkbox2 
                            checked={abdome.som_abdominal}
                            onPress={() => checkChangeAbdome('som_abdominal', abdome.som_abdominal)}
                            texto="Som abdominal (timpânico, maciço, sub-maciço)"
                        />
                        <Checkbox2 
                            checked={abdomeRuidos.ruidos_hidroaereos_presente}
                            onPress={() => checkChangeAbdomeRuidos('ruidos_hidroaereos_presente', abdomeRuidos.ruidos_hidroaereos_presente)}
                            texto="Ruídos hidroaéreos presente"
                        />
                        <Checkbox2 
                            checked={abdomeRuidos.ruidos_hidroaereos_ausente}
                            onPress={() => checkChangeAbdomeRuidos('ruidos_hidroaereos_ausente', abdomeRuidos.ruidos_hidroaereos_ausente)}
                            texto="Ruídos hidroaéreos ausente"
                        />
                        <Checkbox2 
                            checked={abdomeReacao.reação_a_palpação_dolorosa}
                            onPress={() => checkChangeAbdomeReacao('reação_a_palpação_dolorosa', abdomeReacao.reação_a_palpação_dolorosa)}
                            texto="Reação a palpação dolorosa"
                        />
                        <Checkbox2 
                            checked={abdomeReacao.reação_a_palpação_indolor}
                            onPress={() => checkChangeAbdomeReacao('reação_a_palpação_indolor', abdomeReacao.reação_a_palpação_indolor)}
                            texto="Reação a palpação indolor"
                        />
                        <Checkbox2 
                            checked={abdome1.peristaltismo}
                            onPress={() => checkChangeAbdome1('peristaltismo', abdome1.peristaltismo)}
                            texto="Peristaltismo Visível"
                        />
                        <Checkbox2 
                            checked={abdome1.escavado}
                            onPress={() => checkChangeAbdome1('escavado', abdome1.escavado)}
                            texto="Escavado"
                        />
                        <Checkbox2 
                            checked={abdome1.hernia}
                            onPress={() => checkChangeAbdome1('hernia', abdome1.hernia)}
                            texto="Hérnia"
                        />
                        <Checkbox2 
                            checked={abdome1.borborigmos}
                            onPress={() => checkChangeAbdome1('borborigmos', abdome1.borborigmos)}
                            texto="Borborigmos"
                        />
                        <Checkbox2 
                            checked={abdome1.hepatomegalia}
                            onPress={() => checkChangeAbdome1('hepatomegalia', abdome1.hepatomegalia)}
                            texto="Hepatomegalia"
                        />
                        <Checkbox2 
                            checked={abdome1.murphy}
                            onPress={() => checkChangeAbdome1('murphy', abdome1.murphy)}
                            texto="Sinal de Murphy +"
                        />
                        <Checkbox2 
                            checked={abdome1.blumberg}
                            onPress={() => checkChangeAbdome1('blumberg', abdome1.blumberg)}
                            texto="Sinal de Blumberg +"
                        />
                        <Checkbox2 
                            checked={abdome1.rovsing}
                            onPress={() => checkChangeAbdome1('rovsing', abdome1.rovsing)}
                            texto="Sinal de Rovsing +"
                        />
                        <Checkbox2 
                            checked={abdome1.massas}
                            onPress={() => checkChangeAbdome1('massas', abdome1.massas)}
                            texto="Massas"
                        />
                        <Checkbox2 
                            checked={abdome1.tumoracao}
                            onPress={() => checkChangeAbdome1('tumoracao', abdome1.tumoracao)}
                            texto="Tumoração"
                        />
                        <Checkbox2 
                            checked={abdome1.piparote}
                            onPress={() => checkChangeAbdome1('piparote', abdome1.piparote)}
                            texto="Sinal de Piparote +"
                        />
                        <Checkbox2 
                            checked={abdome1.pneumoperitonio}
                            onPress={() => checkChangeAbdome1('pneumoperitonio', abdome1.pneumoperitonio)}
                            texto="Pneumoperitônio"
                        />
                        <Checkbox2 
                            checked={abdome1.sem}
                            onPress={() => checkChangeAbdome1('sem', abdome1.sem)}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>    
                    <Text style={styles.subtitulo}>Geniturinário, Reto e Ânus:</Text>
                    <View>
                        <Checkbox2 
                            checked={geniturinarioRetoAnus.mucosa_ressecada}
                            onPress={() => checkChangeGeniturinarioRetoAnus('mucosa_ressecada', geniturinarioRetoAnus.mucosa_ressecada)}
                            texto="Mucosa ressecada"
                        />
                        <Checkbox2 
                            checked={geniturinarioRetoAnus.mucosa_hidratada}
                            onPress={() => checkChangeGeniturinarioRetoAnus('mucosa_hidratada', geniturinarioRetoAnus.mucosa_hidratada)}
                            texto="Mucosa hidratada"
                        />
                        <Checkbox2 
                            checked={geniturinarioRetoAnus.secreções_patogênicas}
                            onPress={() => checkChangeGeniturinarioRetoAnus('secreções_patogênicas', geniturinarioRetoAnus.secreções_patogênicas)}
                            texto="Secreções patogênicas"
                        />
                        <Checkbox2 
                            checked={geniturinarioRetoAnus.prurido}
                            onPress={() => checkChangeGeniturinarioRetoAnus('prurido', geniturinarioRetoAnus.prurido)}
                            texto="Prurido"
                        />
                        <Checkbox2 
                            checked={geniturinarioRetoAnus.dispareunia}
                            onPress={() => checkChangeGeniturinarioRetoAnus('dispareunia', geniturinarioRetoAnus.dispareunia)}
                            texto="Dispareunia"
                        />
                        <Checkbox2 
                            checked={geniturinarioRetoAnus.sem}
                            onPress={() => checkChangeGeniturinarioRetoAnus('sem', geniturinarioRetoAnus.sem)}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>                    
                    <Text style={styles.subtitulo}>MMSSII:</Text>
                    <View>
                        <Checkbox2 
                            checked={mmssii.perfundidos}
                            onPress={() => checkChangeMmssii('perfundidos', mmssii.perfundidos)}
                            texto="Bem Perfundidos"
                        />
                        <Checkbox2 
                            checked={mmssii.aquecidos}
                            onPress={() => checkChangeMmssii('aquecidos', mmssii.aquecidos)}
                            texto="Aquecidos"
                        />
                        <Checkbox2 
                            checked={mmssii.edema}
                            onPress={() => checkChangeMmssii('edema', mmssii.edema)}
                            texto="Edema"
                        />
                        <Checkbox2 
                            checked={mmssMmiiSimetria.simetricos}
                            onPress={() => checkChangeMmssiiSimetria('simetricos', mmssMmiiSimetria.simetricos)}
                            texto="Simétricos"
                        />
                        <Checkbox2 
                            checked={mmssMmiiSimetria.assimetricos}
                            onPress={() => checkChangeMmssiiSimetria('assimetricos', mmssMmiiSimetria.assimetricos)}
                            texto="Assimétricos"
                        />
                        <Checkbox2 
                            checked={mmssMmiiForcaMuscular.força_muscular_preservada}
                            onPress={() => checkChangeMmssiiForcaMuscular('força_muscular_preservada', mmssMmiiForcaMuscular.força_muscular_preservada)}
                            texto="Força muscular preservada"
                        />
                        <Checkbox2 
                            checked={mmssMmiiForcaMuscular.força_muscular_não_preservada}
                            onPress={() => checkChangeMmssiiForcaMuscular('força_muscular_não_preservada', mmssMmiiForcaMuscular.força_muscular_não_preservada)}
                            texto="Força muscular não preservada"
                        />
                        <Checkbox2 
                            checked={mmssii.sem}
                            onPress={() => checkChangeMmssii('sem', mmssii.sem)}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.bg2}>
                <Text style={styles.titulo}>Sinais Vitais</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{alignSelf:'center', paddingRight:15, fontSize:20, marginLeft:15, marginTop:15, paddingBottom:5, color: '#FFFFFF'}}>Temperatura:</Text>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '99,9'
                        }}
                        keyboardType="numeric"
                        style={styles.maskedInput2}
                        value={sinaisVitais.temperatura}
                        onChangeText={temperatura => setSinaisVitais({...sinaisVitais, temperatura})}
                        color='#FFFFFF'
                        maxLength={4}
                    />
                    <Text style={{alignSelf:'center', fontSize:16, paddingTop:12, color:'#FFFFFF'}}>ºC</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.subtitulo2}>Frequencia Cardíaca:</Text>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '9999'
                        }}
                        keyboardType="numeric"
                        style={styles.maskedInput2}
                        value={sinaisVitais.frequenciaCardiaca}
                        onChangeText={frequenciaCardiaca => setSinaisVitais({...sinaisVitais, frequenciaCardiaca})}
                        color='#FFFFFF'
                        maxLength={4}
                    />
                    <Text style={{alignSelf:'center', fontSize:16, paddingTop:12, color:'#FFFFFF'}}>bpm</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.subtitulo2}>Pressão Arterial:</Text>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '999'
                        }}
                        keyboardType="numeric"
                        style={[styles.maskedInput2, {width:35}]}
                        value={sinaisVitais.pressaoArterial1}
                        onChangeText={pressaoArterial1 => setSinaisVitais({...sinaisVitais, pressaoArterial1})}
                        color='#FFFFFF'
                        maxLength={3}
                    />
                    <Text style={{alignSelf:'flex-end', fontSize:16, paddingTop:12, marginLeft:5, marginRight:5, color:'#FFFFFF'}}>-</Text>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '99'
                        }}
                        keyboardType="numeric"
                        style={[styles.maskedInput2, {width:25}]}
                        value={sinaisVitais.pressaoArterial2}
                        onChangeText={pressaoArterial2 => setSinaisVitais({...sinaisVitais, pressaoArterial2})}
                        color='#FFFFFF'
                        maxLength={2}
                    />
                    <Text style={{alignSelf:'center', fontSize:16, paddingTop:12, color: '#FFFFFF'}}>mmHg</Text>
                </View>

                <View>
                    <Text style={styles.subtitulo2}>IMC:</Text>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.subtitulo2}>Peso:</Text>
                        <TextInputMask 
                            type={'custom'}
                            options={{
                                mask: '99***'
                            }}
                            keyboardType="numeric"
                            style={[styles.maskedInput2, {width:50}]}
                            value={sinaisVitais.imcPeso}
                            onChangeText={imcPeso => setSinaisVitais({...sinaisVitais, imcPeso})}
                            color='#FFFFFF'
                            maxLength={5}
                        />
                        <Text style={{alignSelf:'center', fontSize:16, paddingTop:12, color:'#FFFFFF'}}>kg</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.subtitulo2}>Altura:</Text>
                        <TextInputMask 
                            type={'custom'}
                            options={{
                                mask: '99***'
                            }}
                            keyboardType="numeric"
                            style={[styles.maskedInput2, {width:50}]}
                            value={sinaisVitais.imcAltura}
                            onChangeText={imcAltura => setSinaisVitais({...sinaisVitais, imcAltura})}
                            color='#FFFFFF'
                            maxLength={5}
                        />
                        <Text style={{alignSelf:'center', fontSize:16, paddingTop:12, color: '#FFFFFF'}}>cm</Text>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <Text style={styles.subtitulo}>Amplitude da FR:</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox2 
                        checked={amplitudeDaFr.profunda}
                        onPress={() => checkChangeAmplitudeDaFr('profunda', amplitudeDaFr.profunda)}
                        texto="Profunda"
                    />
                    <Checkbox2 
                        checked={amplitudeDaFr.normal}
                        onPress={() => checkChangeAmplitudeDaFr('normal', amplitudeDaFr.normal)}
                        texto="Normal"
                    />
                    <Checkbox2 
                        checked={amplitudeDaFr.superficial}
                        onPress={() => checkChangeAmplitudeDaFr('superficial', amplitudeDaFr.superficial)}
                        texto="Superficial"
                    />
                </View>

                <View style={styles.linhaMenor}></View>

                <Text style={styles.subtitulo}>Ritmo da FR:</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox2 
                        checked={ritmoDaFr.regular}
                        onPress={() => checkChangeRitmoDaFr('regular', ritmoDaFr.regular)}
                        texto="Regular"
                    />
                    <Checkbox2 
                        checked={ritmoDaFr.irregular}
                        onPress={() => checkChangeRitmoDaFr('irregular', ritmoDaFr.irregular)}
                        texto="Irregular"
                    />
                </View>

                <View style={styles.linhaMenor}></View>

                <Text style={styles.subtitulo}>Amplitude da FC:</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox2 
                        checked={amplitudeDaFc.celere}
                        onPress={() => checkChangeAmplitudeDaFc('celere', amplitudeDaFc.celere)}
                        texto="Célere"
                    />
                    <Checkbox2 
                        checked={amplitudeDaFc.filiforme}
                        onPress={() => checkChangeAmplitudeDaFc('filiforme', amplitudeDaFc.filiforme)}
                        texto="Filiforme"
                    />
                </View>

                <View style={styles.linhaMenor}></View>

                <Text style={styles.subtitulo}>Ritmo da FC:</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox2 
                        checked={ritmoDaFC.regular}
                        onPress={() => checkChangeRitmoDaFc('regular', ritmoDaFC.regular)}
                        texto="Regular"
                    />
                    <Checkbox2 
                        checked={ritmoDaFC.irregular}
                        onPress={() => checkChangeRitmoDaFc('irregular', ritmoDaFC.irregular)}
                        texto="Irregular"
                    />
                </View>

                <TouchableOpacity style={{alignSelf:'center', marginTop:30, marginBottom:30}} onPress={gerarRelatorio}>
                    <View style={styles.btn}>
                        <Text style={{fontSize:20}}>Gerar Relatório</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    bg:{
        flex:1,
        paddingTop:50,
        alignItems:'center'
    },
    bg2:{
        flex:1,
        paddingTop:20,
    },
    titulo:{
        fontSize:22,
        fontWeight:'bold',
        alignSelf:'center',
        color: '#FF5757'
    },
    subtitulo:{
        fontSize:20,
        marginTop: 15, 
        marginLeft:15, 
        marginBottom:10,
        color: '#FFFFFF',
        paddingTop: 10
    },
    subtitulo2:{
        // alignSelf:'center', 
        paddingRight:15, 
        fontSize:20, 
        marginLeft:15, 
        marginTop:15, 
        paddingBottom:5,
        color: '#FFFFFF',
        alignSelf:'flex-start'
    },
    textInput:{
        marginTop:30,
        borderWidth: 1
    },
    maskedInput:{
        height:45,
        fontSize:16,
        paddingLeft:5,
        paddingTop: 15,
        width: 125,
        borderBottomColor:"#999",
        borderBottomWidth:1,
        borderStyle:'solid',
        alignSelf:'flex-start',

    },
    maskedInput2:{
        fontSize:16, 
        borderBottomColor:"#999", 
        borderBottomWidth:1, 
        width:50, 
        alignSelf:'flex-end'
    },
    containerMask:{
        flexDirection:'row',
        // flex:1,
        flexWrap:'wrap',
    },
    linha:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:375,
        paddingTop:25,
        marginLeft:10
    },
    linhaMenor: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:300,
        paddingTop:25,
        marginLeft:50
    },
    checkboxContainer: {
        flexDirection: "row",
        marginLeft:15
    },
    checkbox:{
        alignSelf:'center'
    },
    checkboxLabel:{
        alignSelf:'center', 
        fontSize:17
    },
    btn:{
        backgroundColor:'#FFFFFF', 
        color:'black', 
        width:250, 
        height:50, 
        justifyContent:'center', 
        alignItems:'center'
    },
    containerCheckbox:{
        paddingLeft:15,
        paddingTop:10
    }
});