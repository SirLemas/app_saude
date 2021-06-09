import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, TouchableOpacity,} from 'react-native';
import {Input} from 'react-native-elements';
import {TextInputMask} from 'react-native-masked-text';
import {useNavigation} from '@react-navigation/native';


import Checkbox from '../../components/Checkbox';

export default function ProfissionalData() {

    const navigation = useNavigation();

    const [dadosGerais, setDadosGerais] = useState({});

    const [estadoPaciente1, setEstadoPaciente1] = useState({});
    const [estadoPaciente2, setEstadoPaciente2] = useState({});
    const [estadoPaciente3, setEstadoPaciente3] = useState({});

    //relacionado a pele agora:
    const [coloracao, setColoracao] = useState({});
    const [integridade, setIntegridade] = useState({});
    const [umidade, setUmidade] = useState({});
    const [textura, setTextura] = useState({});
    const [espessura, setEspessura] = useState({});
    const [temperatura, setTemperatura] = useState({});
    const [elasticidade, setElasticidade] = useState({});
    const [turgor, setTurgor] = useState({});
    const [sensibilidade, setSensibilidade] = useState({});
    const [lesoes, setLesoes] = useState({});
    //

    // relacionado a cabeça agora:
    const [tamanho, setTamanho] = useState({});
    const [posicao, setPosicao] = useState({});
    const [superficie, setSuperficie] = useState({});
    const [face, setFace] = useState({});
    //

    // Olhos:
    const [palpebras, setPalpebras] = useState({});
    const [globosOculares, setGlobosOculares] = useState({});
    const [conjutiva, setConjutiva] = useState({});
    const [esclerotica, setEsclerotica] = useState({});
    const [reflexos, setReflexos] = useState({});
    // 

    const [boca, setBoca] = useState({});

    const [nariz, setNariz] = useState({});
    const [ouvidos, setOuvidos] = useState({});
    const [pescoco, setPescoco] = useState({});

    const [torax, setTorax] = useState({}); 
    const [torax1, setTorax1] = useState({});
    const [torax2, setTorax2] = useState({});
    const [torax3, setTorax3] = useState({});

    const [forma, setForma] = useState({});
    const [pneumotorax, setPneumotorax] = useState({});
    const [hemotorax, setHemotorax] = useState({});
    const [ritmoRespiratorio, setRitmoRespiratorio] = useState({});
    const [expansibilidade, setExpansibilidade] = useState({});
    const [sons, setSons] = useState({});

    const [cardiaco, setCardiaco] = useState({});

    const [abdome, setAbdome] = useState({});
    const [abdome1, setAbdome1] = useState({});
    const [abdomeRuidos, setAbdomeRuidos] = useState({});
    const [abdomeReacao, setAbdomeReacao] = useState({});


    const [geniturinarioRetoAnus, setGeniturinarioRetoAnus] = useState({});

    const [mmssii, setMmssii] = useState({});
    const [mmssMmiiSimetria, setMmssMmiiSimetria] = useState({});
    const [mmssMmiiForcaMuscular, setMmssMmiiForcaMuscular] = useState({});

    const [sinaisVitais, setSinaisVitais] = useState({});

    const [amplitudeDaFr, setAmplitudeDaFr] = useState({});
    const [ritmoDaFr, setRitmoDaFr] = useState({});
    const [amplitudeDaFc, setAmplitudeDaFC] = useState({});
    const [ritmoDaFC, setRitmoDaFC] = useState({});

    function gerarRelatorio(){

        let resp = verificarObjetos();
        if(resp['value'] == true){
            return alert(resp['message']);
        }else{
            let estadoTorax = check(torax);
            navigation.navigate('profissional_view_relatorio', {
                estadoTorax,
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
                torax1,
                torax2,
                torax3,
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

    function check(obj){
        let retorno = [];

        Object.keys(obj).forEach(function(valor){
            if(obj[valor] == true){

                if(valor.includes('_')){
                    let arr = valor.split('_');
                    let newString = '';
                    for(let i = 0; i < arr.length; i++){
                        newString += arr[i]+' ';
                    }
                    let ajs = newString[0].toUpperCase() + newString.substr(1);
                    retorno.push(ajs);
                }else{
                    let ajuste = valor[0].toUpperCase() + valor.substr(1);
                    retorno.push(ajuste);
                }

            }
        });

        return retorno;
    }

    return(
        <ScrollView>
            <View style={styles.bg}>
                <Text style={styles.titulo}>Dados Gerais</Text>
                <Input 
                    style={{paddingTop:30}}
                    placeholder="Iniciais do Paciente"
                    onChangeText={iniciais_paciente => setDadosGerais({...dadosGerais, iniciais_paciente})}
                />
                <View style={styles.containerMask}>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '99/99/9999'
                        }}
                        keyboardType="numeric"
                        style={[styles.maskedInput, {marginRight:10}]}
                        placeholder="Data"
                        value={dadosGerais.data}
                        onChangeText={data => setDadosGerais({...dadosGerais, data})}
                    />
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '99:99'
                        }}
                        keyboardType="numeric"
                        style={styles.maskedInput}
                        placeholder="Hora"
                        value={dadosGerais.hora}
                        onChangeText={hora => setDadosGerais({...dadosGerais, hora})}
                    />
                </View>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.bg2}>
                <Text style={[styles.titulo]}>Estado Físico Geral do Paciente</Text>
                <View style={{paddingTop:15}}>
                    <View style={{flexDirection:'row'}}>
                        <Checkbox 
                            nome={estadoPaciente1.acamado}
                            onValueChange={(acamado) => setEstadoPaciente1({...estadoPaciente1, acamado})}
                            texto="Acamado"
                        />
                        <Checkbox 
                            nome={estadoPaciente1.deambulando}
                            onValueChange={(deambulando) => setEstadoPaciente1({...estadoPaciente1, deambulando})}
                            texto="Deambulando"
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Checkbox 
                            nome={estadoPaciente2.orientado}
                            onValueChange={(orientado) => setEstadoPaciente2({...estadoPaciente2, orientado})}
                            texto="Orientado"
                        />
                        <Checkbox 
                            nome={estadoPaciente2.desorientado}
                            onValueChange={(desorientado) => setEstadoPaciente2({...estadoPaciente2, desorientado})}
                            texto="Desorientado"
                        />
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Checkbox 
                            nome={estadoPaciente3.colaborativo}
                            onValueChange={(colaborativo) => setEstadoPaciente3({...estadoPaciente3, colaborativo})}
                            texto="Colaborativo"
                        />
                        <Checkbox 
                            nome={estadoPaciente3.nao_colaborativo}
                            onValueChange={(nao_colaborativo) => setEstadoPaciente3({...estadoPaciente3, nao_colaborativo})}
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
                            <Text style={{fontSize:18}}>Coloração:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={coloracao.palidez} 
                                    onValueChange={(palidez) => setColoracao({...coloracao, palidez})}
                                    texto="Palidez"
                                />
                                <Checkbox 
                                    nome={coloracao.eritrose} 
                                    onValueChange={(eritrose) => setColoracao({...coloracao, eritrose})}
                                    texto="Eritrose"
                                />
                                <Checkbox 
                                    nome={coloracao.cianose} 
                                    onValueChange={(cianose) => setColoracao({...coloracao, cianose})}
                                    texto="Cianose"
                                />
                                <Checkbox 
                                    nome={coloracao.ictericia} 
                                    onValueChange={(ictericia) => setColoracao({...coloracao, ictericia})}
                                    texto="Icterícia"
                                />
                                <Checkbox 
                                    nome={coloracao.albinismo} 
                                    onValueChange={(albinismo) => setColoracao({...coloracao, albinismo})}
                                    texto="Albinismo"
                                />
                                <Checkbox 
                                    nome={coloracao.sem} 
                                    onValueChange={(sem) => setColoracao({...coloracao, sem})}
                                    texto="Sem Anormalidades"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Integridade:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={integridade.exulceracao} 
                                    onValueChange={(exulceracao) => setIntegridade({...integridade, exulceracao})}
                                    texto="Exulceração"
                                />
                                <Checkbox 
                                    nome={integridade.ulceracao} 
                                    onValueChange={(ulceracao) => setIntegridade({...integridade, ulceracao})}
                                    texto="Ulceração"
                                />
                                <Checkbox 
                                    nome={integridade.fissura} 
                                    onValueChange={(fissura) => setIntegridade({...integridade, fissura})}
                                    texto="Fissura"
                                />
                                <Checkbox 
                                    nome={integridade.sem} 
                                    onValueChange={(sem) => setIntegridade({...integridade, sem})}
                                    texto="Sem Anormalidades"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Umidade:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={umidade.sem} 
                                    onValueChange={(sem) => setUmidade({...umidade, sem})}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox 
                                    nome={umidade.seca} 
                                    onValueChange={(seca) => setUmidade({...umidade, seca})}
                                    texto="Seca"
                                />
                                <Checkbox 
                                    nome={umidade.umida} 
                                    onValueChange={(umida) => setUmidade({...umidade, umida})}
                                    texto="Umida"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Textura:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={textura.sem} 
                                    onValueChange={(sem) => setTextura({...textura, sem})}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox 
                                    nome={textura.lisa} 
                                    onValueChange={(lisa) => setTextura({...textura, lisa})}
                                    texto="Lisa/fina"
                                />
                                <Checkbox 
                                    nome={textura.aspera} 
                                    onValueChange={(aspera) => setTextura({...textura, aspera})}
                                    texto="Áspera"
                                />
                                <Checkbox 
                                    nome={textura.enrugada} 
                                    onValueChange={(enrugada) => setTextura({...textura, enrugada})}
                                    texto="Enrugada"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Espessura:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={espessura.sem} 
                                    onValueChange={(sem) => setEspessura({...espessura, sem})}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox 
                                    nome={espessura.atrofica} 
                                    onValueChange={(atrofica) => setEspessura({...espessura, atrofica})}
                                    texto="Atrófica"
                                />
                                <Checkbox 
                                    nome={espessura.hipertrofica} 
                                    onValueChange={(hipertrofica) => setEspessura({...espessura, hipertrofica})}
                                    texto="Hipertrófica"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Temperatura:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={temperatura.normal} 
                                    onValueChange={(normal) => setTemperatura({...temperatura, normal})}
                                    texto="Normal"
                                />
                                <Checkbox 
                                    nome={temperatura.aumentada} 
                                    onValueChange={(aumentada) => setTemperatura({...temperatura, aumentada})}
                                    texto="Aumentada"
                                />
                                <Checkbox 
                                    nome={temperatura.diminuida} 
                                    onValueChange={(diminuida) => setTemperatura({...temperatura, diminuida})}
                                    texto="Diminuida"
                                />
                                <Checkbox 
                                    nome={temperatura.sem} 
                                    onValueChange={(sem) => setTemperatura({...temperatura, sem})}
                                    texto="Sem Anormalidades"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Elasticidade/Mobilidade:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={elasticidade.sem} 
                                    onValueChange={(sem) => setElasticidade({...elasticidade, sem})}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox 
                                    nome={elasticidade.aumentada} 
                                    onValueChange={(aumentada) => setElasticidade({...elasticidade, aumentada})}
                                    texto="Aumentada"
                                />
                                <Checkbox 
                                    nome={elasticidade.diminuida} 
                                    onValueChange={(diminuida) => setElasticidade({...elasticidade, diminuida})}
                                    texto="Diminuida"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Turgor:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={turgor.sem} 
                                    onValueChange={(sem) => setTurgor({...turgor, sem})}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox 
                                    nome={turgor.aumentado} 
                                    onValueChange={(aumentado) => setTurgor({...turgor, aumentado})}
                                    texto="Aumentado"
                                />
                                <Checkbox 
                                    nome={turgor.diminuido} 
                                    onValueChange={(diminuido) => setTurgor({...turgor, diminuido})}
                                    texto="Diminuido"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Sensibilidade:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={sensibilidade.dolorosa} 
                                    onValueChange={(dolorosa) => setSensibilidade({...sensibilidade, dolorosa})}
                                    texto="Dolorosa (presente ou ausente)"
                                />
                                <Checkbox 
                                    nome={sensibilidade.tatil} 
                                    onValueChange={(tatil) => setSensibilidade({...sensibilidade, tatil})}
                                    texto="Tátil (presente ou ausente)"
                                />
                                <Checkbox 
                                    nome={sensibilidade.termica} 
                                    onValueChange={(termica) => setSensibilidade({...sensibilidade, termica})}
                                    texto="Térmica (presente ou ausente)"
                                />
                            </View>
                            <Text style={{fontSize:18, paddingTop:10}}>Lesões:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={lesoes.nao} 
                                    onValueChange={(nao) => setLesoes({...lesoes, nao})}
                                    texto="Não apresenta"
                                />
                                <Checkbox 
                                    nome={lesoes.apresenta} 
                                    onValueChange={(apresenta) => setLesoes({...lesoes, apresenta})}
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
                        <Text style={{fontSize:18}}>Tamanho e forma:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={tamanho.sem} 
                                    onValueChange={(sem) => setTamanho({...tamanho, sem})}
                                    texto="Sem Anormalidades"
                                />
                                <Checkbox 
                                    nome={tamanho.macrocefalia} 
                                    onValueChange={(macrocefalia) => setTamanho({...tamanho, macrocefalia})}
                                    texto="Macrocefalia"
                                />
                                <Checkbox 
                                    nome={tamanho.microcefalia} 
                                    onValueChange={(microcefalia) => setTamanho({...tamanho, microcefalia})}
                                    texto="Microcefalia"
                                />
                                <Checkbox 
                                    nome={tamanho.acrocefalia} 
                                    onValueChange={(acrocefalia) => setTamanho({...tamanho, acrocefalia})}
                                    texto="Acrocefalia"
                                />
                                <Checkbox 
                                    nome={tamanho.escalocefalia} 
                                    onValueChange={(escalocefalia) => setTamanho({...tamanho, escalocefalia})}
                                    texto="Escalocefalia"
                                />
                                <Checkbox 
                                    nome={tamanho.dolicocefalia} 
                                    onValueChange={(dolicocefalia) => setTamanho({...tamanho, dolicocefalia})}
                                    texto="Dolicocefalia"
                                />
                                <Checkbox 
                                    nome={tamanho.braquicefalia} 
                                    onValueChange={(braquicefalia) => setTamanho({...tamanho, braquicefalia})}
                                    texto="Braquicefalia"
                                />
                                <Checkbox 
                                    nome={tamanho.plagiocefalia} 
                                    onValueChange={(plagiocefalia) => setTamanho({...tamanho, plagiocefalia})}
                                    texto="Plagiocefalia"
                                />
                            </View>
                            <Text style={{fontSize:18}}>Posição e movimentos:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={posicao.torcicolo} 
                                    onValueChange={(torcicolo) => setPosicao({...posicao, torcicolo})}
                                    texto="Torcicolo"
                                />
                                <Checkbox 
                                    nome={posicao.tiques} 
                                    onValueChange={(tiques) => setPosicao({...posicao, tiques})}
                                    texto="Tiques"
                                />
                                <Checkbox 
                                    nome={posicao.sem} 
                                    onValueChange={(sem) => setPosicao({...posicao, sem})}
                                    texto="Sem Alteração"
                                />
                            </View>
                            <Text style={{fontSize:18}}>Superficie e couro cabeludo:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={superficie.tumor} 
                                    onValueChange={(tumor) => setSuperficie({...superficie, tumor})}
                                    texto="Tumor"
                                />
                                <Checkbox 
                                    nome={superficie.tumefacao} 
                                    onValueChange={(tumefacao) => setSuperficie({...superficie, tumefacao})}
                                    texto="Tumefação"
                                />
                                <Checkbox 
                                    nome={superficie.bossa} 
                                    onValueChange={(bossa) => setSuperficie({...superficie, bossa})}
                                    texto="Bossa"
                                />
                                <Checkbox 
                                    nome={superficie.hematoma} 
                                    onValueChange={(hematoma) => setSuperficie({...superficie, hematoma})}
                                    texto="Hematoma"
                                />
                                <Checkbox 
                                    nome={superficie.depressao} 
                                    onValueChange={(depressao) => setSuperficie({...superficie, depressao})}
                                    texto="Depressão"
                                />
                                <Checkbox 
                                    nome={superficie.ponto} 
                                    onValueChange={(ponto) => setSuperficie({...superficie, ponto})}
                                    texto="Ponto Doloroso"
                                />
                                <Checkbox 
                                    nome={superficie.sem} 
                                    onValueChange={(sem) => setSuperficie({...superficie, sem})}
                                    texto="Sem Alterações"
                                />
                            </View>
                            <Text style={{fontSize:18}}>Face:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={face.simetrica} 
                                    onValueChange={(simetrica) => setFace({...face, simetrica})}
                                    texto="Simétrica"
                                />
                                <Checkbox 
                                    nome={face.assimetrica} 
                                    onValueChange={(assimetrica) => setFace({...face, assimetrica})}
                                    texto="Assimétrica"
                                />
                            </View>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Olhos e supercilios:</Text>
                    <View style={styles.containerCheckbox}>
                        <Text style={{fontSize:18}}>Pálpebras, Cílios e Região Periorbicular:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={palpebras.edema} 
                                    onValueChange={(edema) => setPalpebras({...palpebras, edema})}
                                    texto="Edema (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.retracao} 
                                    onValueChange={(retracao) => setPalpebras({...palpebras, retracao})}
                                    texto="Retração Palpebral (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.ptose} 
                                    onValueChange={(ptose) => setPalpebras({...palpebras, ptose})}
                                    texto="Ptose Palpebral (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.epicanto} 
                                    onValueChange={(epicanto) => setPalpebras({...palpebras, epicanto})}
                                    texto="Epicanto (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.equimose} 
                                    onValueChange={(equimose) => setPalpebras({...palpebras, equimose})}
                                    texto="Equimose (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.xantelasma} 
                                    onValueChange={(xantelasma) => setPalpebras({...palpebras, xantelasma})}
                                    texto="Xantelasma (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.lagoftalmia} 
                                    onValueChange={(lagoftalmia) => setPalpebras({...palpebras, lagoftalmia})}
                                    texto="Lagoftalmia (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.triquiase} 
                                    onValueChange={(triquiase) => setPalpebras({...palpebras, triquiase})}
                                    texto="Triquíase (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.entropio} 
                                    onValueChange={(entropio) => setPalpebras({...palpebras, entropio})}
                                    texto="Entrópio (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.ectropio} 
                                    onValueChange={(ectropio) => setPalpebras({...palpebras, ectropio})}
                                    texto="Ectrópio (D/E)"
                                />
                                <Checkbox 
                                    nome={palpebras.sem} 
                                    onValueChange={(sem) => setPalpebras({...palpebras, sem})}
                                    texto="Sem Anormalidade"
                                />
                            </View>

                            <Text style={{fontSize:18}}>Globos Oculares:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={globosOculares.exoftalmia} 
                                    onValueChange={(exoftalmia) => setGlobosOculares({...globosOculares, exoftalmia})}
                                    texto="Exoftalmia (D/E)"
                                />
                                <Checkbox 
                                    nome={globosOculares.enoftalmia} 
                                    onValueChange={(enoftalmia) => setGlobosOculares({...globosOculares, enoftalmia})}
                                    texto="Enoftalmia (D/E)"
                                />
                                <Checkbox 
                                    nome={globosOculares.desvio} 
                                    onValueChange={(desvio) => setGlobosOculares({...globosOculares, desvio})}
                                    texto="Desvio (D/E)"
                                />
                                <Checkbox 
                                    nome={globosOculares.movimento} 
                                    onValueChange={(movimento) => setGlobosOculares({...globosOculares, movimento})}
                                    texto="Movimento Involuntário (D/E)"
                                />
                                <Checkbox 
                                    nome={globosOculares.paralisia} 
                                    onValueChange={(paralisia) => setGlobosOculares({...globosOculares, paralisia})}
                                    texto="Paralisia Ocular"
                                />
                                <Checkbox 
                                    nome={globosOculares.sem} 
                                    onValueChange={(sem) => setGlobosOculares({...globosOculares, sem})}
                                    texto="Sem Anormalidade"
                                />
                            </View>
                            <Text style={{fontSize:18}}>Conjutiva:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={conjutiva.conjutivite} 
                                    onValueChange={(conjutivite) => setConjutiva({...conjutiva, conjutivite})}
                                    texto="Conjutivite (D/E)"
                                />
                                <Checkbox 
                                    nome={conjutiva.irite} 
                                    onValueChange={(irite) => setConjutiva({...conjutiva, irite})}
                                    texto="Irite (D/E)"
                                />
                                <Checkbox 
                                    nome={conjutiva.hemorragia} 
                                    onValueChange={(hemorragia) => setConjutiva({...conjutiva, hemorragia})}
                                    texto="Hemorragia Subconjuntival (D/E)"
                                />
                                <Checkbox 
                                    nome={conjutiva.sem} 
                                    onValueChange={(sem) => setConjutiva({...conjutiva, sem})}
                                    texto="Sem Anormalidade"
                                />
                            </View>
                            <Text style={{fontSize:18}}>Esclerótica, Cornea e Cristalino:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={esclerotica.catarata} 
                                    onValueChange={(catarata) => setEsclerotica({...esclerotica, catarata})}
                                    texto="Catarata (D/E)"
                                />
                                <Checkbox 
                                    nome={esclerotica.pterigio} 
                                    onValueChange={(pterigio) => setEsclerotica({...esclerotica, pterigio})}
                                    texto="Pterígio (D/E)"
                                />
                                <Checkbox 
                                    nome={esclerotica.sem} 
                                    onValueChange={(sem) => setEsclerotica({...esclerotica, sem})}
                                    texto="Sem Anormalidade"
                                />
                            </View>
                            <Text style={{fontSize:18}}>Reflexos:</Text>
                            <View style={{paddingTop:10}}>
                                <Checkbox 
                                    nome={reflexos.fotomotor} 
                                    onValueChange={(fotomotor) => setReflexos({...reflexos, fotomotor})}
                                    texto="Fotomotor"
                                />
                                <Checkbox 
                                    nome={reflexos.consensual} 
                                    onValueChange={(consensual) => setReflexos({...reflexos, consensual})}
                                    texto="Consensual"
                                />
                                <Checkbox 
                                    nome={reflexos.acomodacao} 
                                    onValueChange={(acomodacao) => setReflexos({...reflexos, acomodacao})}
                                    texto="Acomodação"
                                />
                                <Checkbox 
                                    nome={reflexos.convergencia} 
                                    onValueChange={(convergencia) => setReflexos({...reflexos, convergencia})}
                                    texto="Convergência"
                                />
                            </View>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Nariz:</Text>
                    <View>
                        <Checkbox 
                            nome={nariz.hidratado} 
                            onValueChange={(hidratado) => setNariz({...nariz, hidratado})}
                            texto="Hidratado"
                        />
                        <Checkbox 
                            nome={nariz.ressecado} 
                            onValueChange={(ressecado) => setNariz({...nariz, ressecado})}
                            texto="Ressecado"
                        />
                        <Checkbox 
                            nome={nariz.pervio} 
                            onValueChange={(pervio) => setNariz({...nariz, pervio})}
                            texto="Pérvio"
                        />
                        <Checkbox 
                            nome={nariz.obstruido} 
                            onValueChange={(obstruido) => setNariz({...nariz, obstruido})}
                            texto="Obstruído"
                        />
                        <Checkbox 
                            nome={nariz.sem} 
                            onValueChange={(sem) => setNariz({...nariz, sem})}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Ouvidos:</Text>
                    <View>
                        <Checkbox 
                            nome={ouvidos.detritos} 
                            onValueChange={(detritos) => setOuvidos({...ouvidos, detritos})}
                            texto="Detritos Ceruminosos"
                        />
                        <Checkbox 
                            nome={ouvidos.descamacao} 
                            onValueChange={(descamacao) => setOuvidos({...ouvidos, descamacao})}
                            texto="Descamação"
                        />
                        <Checkbox 
                            nome={ouvidos.sem} 
                            onValueChange={(sem) => setOuvidos({...ouvidos, sem})}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Boca:</Text>
                    <View>
                        <Checkbox 
                            nome={boca.denticao} 
                            onValueChange={(denticao) => setBoca({...boca, denticao})}
                            texto="Dentição Completa"
                        />
                        <Checkbox 
                            nome={boca.protese} 
                            onValueChange={(protese) => setBoca({...boca, protese})}
                            texto="Uso de Prótese"
                        />
                        <Checkbox 
                            nome={boca.arcada} 
                            onValueChange={(arcada) => setBoca({...boca, arcada})}
                            texto="Arcada Dentária Incompleta"
                        />
                        <Checkbox 
                            nome={boca.saburra} 
                            onValueChange={(saburra) => setBoca({...boca, saburra})}
                            texto="Saburra lingual"
                        />
                        <Checkbox 
                            nome={boca.seca} 
                            onValueChange={(seca) => setBoca({...boca, seca})}
                            texto="Língua Seca"
                        />
                        <Checkbox 
                            nome={boca.lisa} 
                            onValueChange={(lisa) => setBoca({...boca, lisa})}
                            texto="Língua Lisa"
                        />
                        <Checkbox 
                            nome={boca.geografica} 
                            onValueChange={(geografica) => setBoca({...boca, geografica})}
                            texto="Língua Geográfica"
                        />
                        <Checkbox 
                            nome={boca.fissurada} 
                            onValueChange={(fissurada) => setBoca({...boca, fissurada})}
                            texto="Língua fissurada"
                        />
                        <Checkbox 
                            nome={boca.macroglossia} 
                            onValueChange={(macroglossia) => setBoca({...boca, macroglossia})}
                            texto="Macroglossia"
                        />
                        <Checkbox 
                            nome={boca.lesoes} 
                            onValueChange={(lesoes) => setBoca({...boca, lesoes})}
                            texto="Lesões"
                        />
                        <Checkbox 
                            nome={boca.sem} 
                            onValueChange={(sem) => setBoca({...boca, sem})}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Pescoço:</Text>
                    <View>
                        <Checkbox 
                            nome={pescoco.desvio}
                            onValueChange={(desvio) => setPescoco({...pescoco, desvio})}
                            texto="Desvio"
                        />
                        <Checkbox 
                            nome={pescoco.bocio}
                            onValueChange={(bocio) => setPescoco({...pescoco, bocio})}
                            texto="Bócio"
                        />
                        <Checkbox 
                            nome={pescoco.hipertrofia}
                            onValueChange={(hipertrofia) => setPescoco({...pescoco, hipertrofia})}
                            texto="Hipertrofia de Linfonodo"
                        />
                        <Checkbox 
                            nome={pescoco.sopro}
                            onValueChange={(sopro) => setPescoco({...pescoco, sopro})}
                            texto="Sopro"
                        />
                        <Checkbox 
                            nome={pescoco.ingurgitamento}
                            onValueChange={(ingurgitamento) => setPescoco({...pescoco, ingurgitamento})}
                            texto="Ingurgitamento"
                        />
                        <Checkbox 
                            nome={pescoco.sem}
                            onValueChange={(sem) => setPescoco({...pescoco, sem})}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Toráx:</Text>
                    <View>
                        {/* <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={torax1.enfisematoso}
                                onValueChange={(enfisematoso) => setTorax1({...torax1, enfisematoso})}
                                texto="Enfisematoso"
                            />
                            <Checkbox 
                                nome={torax1.escavado}
                                onValueChange={(escavado) => setTorax1({...torax1, escavado})}
                                texto="Escavado"
                            />
                        </View> */}
                        {/* <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={torax2.peitoDePombo}
                                onValueChange={(peitoDePombo) => setTorax2({...torax2, peitoDePombo})}
                                texto="Peito de Pombo"
                            />
                            <Checkbox 
                                nome={torax2.normal}
                                onValueChange={(normal) => setTorax2({...torax2, normal})}
                                texto="Normal"
                            />
                        </View> */}
                        {/* <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={torax3.simetrico}
                                onValueChange={(simetrico) => setTorax3({...torax3, simetrico})}
                                texto="Simetrico"
                            />
                            <Checkbox 
                                nome={torax3.não_simetrico}
                                onValueChange={(não_simetrico) => setTorax3({...torax3, não_simetrico})}
                                texto="Não simetrico"
                            />
                        </View> */}
                        {/* <Checkbox 
                            nome={torax.expansividade_toracica}
                            onValueChange={(expansividade_toracica) => setTorax({...torax, expansividade_toracica})}
                            texto="Expansividade torácica"
                        />
                        <Checkbox 
                            nome={torax.mv}
                            onValueChange={(mv) => setTorax({...torax, mv})}
                            texto="MV (murmúrios vesiculares)"
                        />
                        <Checkbox 
                            nome={torax.som_claro}
                            onValueChange={(som_claro) => setTorax({...torax, som_claro})}
                            texto="Som claro"
                        />
                        <Checkbox 
                            nome={torax.som_timpanico}
                            onValueChange={(som_timpanico) => setTorax({...torax, som_timpanico})}
                            texto="Som timpânico"
                        />
                        <Checkbox 
                            nome={torax.som_macico}
                            onValueChange={(som_macico) => setTorax({...torax, som_macico})}
                            texto="Som maciço"
                        />
                        <Checkbox 
                            nome={torax.som_submacico}
                            onValueChange={(som_submacico) => setTorax({...torax, som_submacico})}
                            texto="Som submaciço"
                        /> */}
                    </View>
                    <Text style={styles.subtitulo}>Forma:</Text>
                    <View>
                        <Checkbox 
                            nome={forma.chato}
                            onValueChange={(chato) => setForma({...forma, chato})}
                            texto="Chato"
                        />
                        <Checkbox 
                            nome={forma.barril}
                            onValueChange={(barril) => setForma({...forma, barril})}
                            texto="Barril"
                        />
                        <Checkbox 
                            nome={forma.infundibiliforme}
                            onValueChange={(infundibiliforme) => setForma({...forma, infundibiliforme})}
                            texto="Infundibiliforme"
                        />
                        <Checkbox 
                            nome={forma.cifotico}
                            onValueChange={(cifotico) => setForma({...forma, cifotico})}
                            texto="Cifótico"
                        />
                        <Checkbox 
                            nome={forma.escoliotico}
                            onValueChange={(escoliotico) => setForma({...forma, escoliotico})}
                            texto="Escoliótico"
                        />
                        <Checkbox 
                            nome={forma.cariniforme}
                            onValueChange={(cariniforme) => setForma({...forma, cariniforme})}
                            texto="Cariniforme"
                        />
                        <Checkbox 
                            nome={forma.sem}
                            onValueChange={(sem) => setForma({...forma, sem})}
                            texto="Sem Anormalidades"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Pneumotorax:</Text>
                    <View>
                        <Checkbox 
                            nome={pneumotorax.ausente}
                            onValueChange={(ausente) => setPneumotorax({...pneumotorax, ausente})}
                            texto="Ausente"
                        />
                        <Checkbox 
                            nome={pneumotorax.presente}
                            onValueChange={(presente) => setPneumotorax({...pneumotorax, presente})}
                            texto="Presente"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Hemotorax:</Text>
                    <View>
                        <Checkbox 
                            nome={hemotorax.ausente}
                            onValueChange={(ausente) => setHemotorax({...hemotorax, ausente})}
                            texto="Ausente"
                        />
                        <Checkbox 
                            nome={hemotorax.presente}
                            onValueChange={(presente) => setHemotorax({...hemotorax, presente})}
                            texto="Presente"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Ritmo Respiratório:</Text>
                    <View>
                        <Checkbox 
                            nome={ritmoRespiratorio.dispneia}
                            onValueChange={(dispneia) => setRitmoRespiratorio({...ritmoRespiratorio, dispneia})}
                            texto="Dispneia"
                        />
                        <Checkbox 
                            nome={ritmoRespiratorio.platipneia}
                            onValueChange={(platipneia) => setRitmoRespiratorio({...ritmoRespiratorio, platipneia})}
                            texto="Platipneia"
                        />
                        <Checkbox 
                            nome={ritmoRespiratorio.ortopneia}
                            onValueChange={(ortopneia) => setRitmoRespiratorio({...ritmoRespiratorio, ortopneia})}
                            texto="Ortopneia"
                        />
                        <Checkbox 
                            nome={ritmoRespiratorio.trepopneia}
                            onValueChange={(trepopneia) => setRitmoRespiratorio({...ritmoRespiratorio, trepopneia})}
                            texto="Trepopneia"
                        />
                        <Checkbox 
                            nome={ritmoRespiratorio.cheyne}
                            onValueChange={(cheyne) => setRitmoRespiratorio({...ritmoRespiratorio, cheyne})}
                            texto="Cheyne"
                        />
                        <Checkbox 
                            nome={ritmoRespiratorio.stokes}
                            onValueChange={(stokes) => setRitmoRespiratorio({...ritmoRespiratorio, stokes})}
                            texto="Stokes"
                        />
                        <Checkbox 
                            nome={ritmoRespiratorio.biot}
                            onValueChange={(biot) => setRitmoRespiratorio({...ritmoRespiratorio, biot})}
                            texto="Biot"
                        />
                        <Checkbox 
                            nome={ritmoRespiratorio.kussmaul}
                            onValueChange={(kussmaul) => setRitmoRespiratorio({...ritmoRespiratorio, kussmaul})}
                            texto="Kussmaul"
                        />
                        <Checkbox 
                            nome={ritmoRespiratorio.supirosa}
                            onValueChange={(supirosa) => setRitmoRespiratorio({...ritmoRespiratorio, supirosa})}
                            texto="Supirosa"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Expansibilidade (D/E):</Text>
                    <View>
                        <Checkbox 
                            nome={expansibilidade.pouco}
                            onValueChange={(pouco) => setExpansibilidade({...expansibilidade, pouco})}
                            texto="Pouco Expansivo"
                        />
                        <Checkbox 
                            nome={expansibilidade.sem}
                            onValueChange={(sem) => setExpansibilidade({...expansibilidade, sem})}
                            texto="Sem Anormalidade"
                        />
                    </View>
                    <Text style={styles.subtitulo}>Sons:</Text>
                    <View>
                        <Checkbox 
                            nome={sons.fino}
                            onValueChange={(fino) => setSons({...sons, fino})}
                            texto="Estertor Fino (D/E)"
                        />
                        <Checkbox 
                            nome={sons.grosso}
                            onValueChange={(grosso) => setSons({...sons, grosso})}
                            texto="Estertor Grosso (D/E)"
                        />
                        <Checkbox 
                            nome={sons.roncos}
                            onValueChange={(roncos) => setSons({...sons, roncos})}
                            texto="Roncos (D/E)"
                        />
                        <Checkbox 
                            nome={sons.sibilos}
                            onValueChange={(sibilos) => setSons({...sons, sibilos})}
                            texto="Sibilos (D/E)"
                        />
                        <Checkbox 
                            nome={sons.estridor}
                            onValueChange={(estridor) => setSons({...sons, estridor})}
                            texto="Estridor (D/E)"
                        />
                        <Checkbox 
                            nome={sons.atrito}
                            onValueChange={(atrito) => setSons({...sons, atrito})}
                            texto="Atrito Pleural (D/E)"
                        />
                        <Checkbox 
                            nome={sons.sopro}
                            onValueChange={(sopro) => setSons({...sons, sopro})}
                            texto="Sopro Anfórico (D/E)"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Cardíaco:</Text>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={cardiaco.apresenta_sopros}
                                onValueChange={(apresenta_sopros) => setCardiaco({...cardiaco, apresenta_sopros})}
                                texto="Apresenta sopros"
                            />
                            <Checkbox 
                                nome={cardiaco.não_apresenta_sopros}
                                onValueChange={(não_apresenta_sopros) => setCardiaco({...cardiaco, não_apresenta_sopros})}
                                texto="Não apresenta sopros"
                            />
                        </View>
                        <View>
                            <Checkbox 
                                nome={cardiaco.binario}
                                onValueChange={(binario) => setCardiaco({...cardiaco, binario})}
                                texto="Ritmo Binário"
                            />
                            <Checkbox 
                                nome={cardiaco.triplice}
                                onValueChange={(triplice) => setCardiaco({...cardiaco, triplice})}
                                texto="Ritmo Tríplice"
                            />
                            <Checkbox 
                                nome={cardiaco.bulhas}
                                onValueChange={(bulhas) => setCardiaco({...cardiaco, bulhas})}
                                texto="Bulhas Normofonéticas"
                            />
                            <Checkbox 
                                nome={cardiaco.sopro}
                                onValueChange={(sopro) => setCardiaco({...cardiaco, sopro})}
                                texto="Sopro (Mitral, Tricúspide, Pulmonar e/ou Aórtico)"
                            />
                    </View>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Abdome:</Text>
                    <View>
                        <Checkbox 
                            nome={abdome.plano}
                            onValueChange={(plano) => setAbdome({...abdome, plano})}
                            texto="Plano"
                        />
                        <Checkbox 
                            nome={abdome.globoso}
                            onValueChange={(globoso) => setAbdome({...abdome, globoso})}
                            texto="Globoso"
                        />
                        <Checkbox 
                            nome={abdome.gravidico}
                            onValueChange={(gravidico) => setAbdome({...abdome, gravidico})}
                            texto="Gravidico"
                        />
                        <Checkbox 
                            nome={abdome.estrias}
                            onValueChange={(estrias) => setAbdome({...abdome, estrias})}
                            texto="Estrias"
                        />
                        <Checkbox 
                            nome={abdome.cicatrizes}
                            onValueChange={(cicatrizes) => setAbdome({...abdome, cicatrizes})}
                            texto="Cicatrizes"
                        />   
                        <Checkbox 
                            nome={abdome.som_abdominal}
                            onValueChange={(som_abdominal) => setAbdome({...abdome, som_abdominal})}
                            texto="Som abdominal (timpânico, maciço, sub-maciço)"
                        />  
                        <Checkbox 
                            nome={abdomeRuidos.ruidos_hidroaereos_presente}
                            onValueChange={(ruidos_hidroaereos_presente) => setAbdomeRuidos({...abdomeRuidos, ruidos_hidroaereos_presente})}
                            texto="Ruídos hidroaéreos presente"
                        />   
                        <Checkbox 
                            nome={abdomeRuidos.ruidos_hidroaereos_ausente}
                            onValueChange={(ruidos_hidroaereos_ausente) => setAbdomeRuidos({...abdomeRuidos, ruidos_hidroaereos_ausente})}
                            texto="Ruídos hidroaéreos ausente"
                        />   
                        <Checkbox 
                            nome={abdomeReacao.reação_a_palpação_dolorosa}
                            onValueChange={(reação_a_palpação_dolorosa) => setAbdomeReacao({...abdomeReacao, reação_a_palpação_dolorosa})}
                            texto="Reação a palpação dolorosa"
                        />   
                        <Checkbox 
                            nome={abdomeReacao.reação_a_palpação_indolor}
                            onValueChange={(reação_a_palpação_indolor) => setAbdomeReacao({...abdomeReacao, reação_a_palpação_indolor})}
                            texto="Reação a palpação indolor"
                        /> 
                        <Checkbox 
                            nome={abdome1.peristaltismo}
                            onValueChange={(peristaltismo) => setAbdome1({...abdome1, peristaltismo})}
                            texto="Peristaltismo Visível"
                        />
                        <Checkbox 
                            nome={abdome1.escavado}
                            onValueChange={(escavado) => setAbdome1({...abdome1, escavado})}
                            texto="Escavado"
                        />
                        <Checkbox 
                            nome={abdome1.hernia}
                            onValueChange={(hernia) => setAbdome1({...abdome1, hernia})}
                            texto="Hérnia"
                        />
                        <Checkbox 
                            nome={abdome1.borborigmos}
                            onValueChange={(borborigmos) => setAbdome1({...abdome1, borborigmos})}
                            texto="Borborigmos"
                        />
                        <Checkbox 
                            nome={abdome1.hepatomegalia}
                            onValueChange={(hepatomegalia) => setAbdome1({...abdome1, hepatomegalia})}
                            texto="Hepatomegalia"
                        />
                        <Checkbox 
                            nome={abdome1.murphy}
                            onValueChange={(murphy) => setAbdome1({...abdome1, murphy})}
                            texto="Sinal de Murphy +"
                        />
                        <Checkbox 
                            nome={abdome1.blumberg}
                            onValueChange={(blumberg) => setAbdome1({...abdome1, blumberg})}
                            texto="Sinal de Blumberg +"
                        />
                        <Checkbox 
                            nome={abdome1.rovsing}
                            onValueChange={(rovsing) => setAbdome1({...abdome1, rovsing})}
                            texto="Sinal de Rovsing +"
                        />
                        <Checkbox 
                            nome={abdome1.massas}
                            onValueChange={(massas) => setAbdome1({...abdome1, massas})}
                            texto="Massas"
                        />
                        <Checkbox 
                            nome={abdome1.tumoracao}
                            onValueChange={(tumoracao) => setAbdome1({...abdome1, tumoracao})}
                            texto="Tumoração"
                        />
                        <Checkbox 
                            nome={abdome1.piparote}
                            onValueChange={(piparote) => setAbdome1({...abdome1, piparote})}
                            texto="Sinal de Piparote +"
                        />
                        <Checkbox 
                            nome={abdome1.pneumoperitonio}
                            onValueChange={(pneumoperitonio) => setAbdome1({...abdome1, pneumoperitonio})}
                            texto="Pneumoperitônio"
                        />
                        <Checkbox 
                            nome={abdome1.sem}
                            onValueChange={(sem) => setAbdome1({...abdome1, sem})}
                            texto="Sem Anormalidades"
                        />  
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>    
                    <Text style={styles.subtitulo}>Geniturinário, Reto e Ânus:</Text>
                    <View>
                        <Checkbox 
                            nome={geniturinarioRetoAnus.mucosa_ressecada}
                            onValueChange={(mucosa_ressecada) => setGeniturinarioRetoAnus({...geniturinarioRetoAnus, mucosa_ressecada})}
                            texto="Mucosa ressecada"
                        />
                        <Checkbox 
                            nome={geniturinarioRetoAnus.mucosa_hidratada}
                            onValueChange={(mucosa_hidratada) => setGeniturinarioRetoAnus({...geniturinarioRetoAnus, mucosa_hidratada})}
                            texto="Mucosa hidratada"
                        />
                        <Checkbox 
                            nome={geniturinarioRetoAnus.secreções_patogênicas}
                            onValueChange={(secreções_patogênicas) => setGeniturinarioRetoAnus({...geniturinarioRetoAnus, secreções_patogênicas})}
                            texto="Secreções patogênicas"
                        />
                        <Checkbox 
                            nome={geniturinarioRetoAnus.prurido}
                            onValueChange={(prurido) => setGeniturinarioRetoAnus({...geniturinarioRetoAnus, prurido})}
                            texto="Prurido"
                        />
                        <Checkbox 
                            nome={geniturinarioRetoAnus.dispareunia}
                            onValueChange={(dispareunia) => setGeniturinarioRetoAnus({...geniturinarioRetoAnus, dispareunia})}
                            texto="Dispareunia"
                        />
                        <Checkbox 
                            nome={geniturinarioRetoAnus.sem}
                            onValueChange={(sem) => setGeniturinarioRetoAnus({...geniturinarioRetoAnus, sem})}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>                    
                    <Text style={styles.subtitulo}>MMSSII:</Text>
                    <View>
                        <Checkbox 
                            nome={mmssii.perfundidos}
                            onValueChange={(perfundidos) => setMmssii({...mmssii, perfundidos})}
                            texto="Bem Perfundidos"
                        />
                        <Checkbox 
                            nome={mmssii.aquecidos}
                            onValueChange={(aquecidos) => setMmssii({...mmssii, aquecidos})}
                            texto="Aquecidos"
                        />
                        <Checkbox 
                            nome={mmssii.edema}
                            onValueChange={(edema) => setMmssii({...mmssii, edema})}
                            texto="Edema"
                        />
                        <Checkbox 
                            nome={mmssMmiiSimetria.simetricos}
                            onValueChange={(simetricos) => setMmssMmiiSimetria({...mmssMmiiSimetria, simetricos})}
                            texto="Simétricos"
                        />
                        <Checkbox 
                            nome={mmssMmiiSimetria.assimetricos}
                            onValueChange={(assimetricos) => setMmssMmiiSimetria({...mmssMmiiSimetria, assimetricos})}
                            texto="Assimétricos"
                        />
                        <Checkbox 
                            nome={mmssMmiiForcaMuscular.força_muscular_preservada}
                            onValueChange={(força_muscular_preservada) => setMmssMmiiForcaMuscular({...mmssMmiiForcaMuscular, força_muscular_preservada})}
                            texto="Força muscular preservada"
                        />
                        <Checkbox 
                            nome={mmssMmiiForcaMuscular.força_muscular_não_preservada}
                            onValueChange={(força_muscular_não_preservada) => setMmssMmiiForcaMuscular({...mmssMmiiForcaMuscular, força_muscular_não_preservada})}
                            texto="Força muscular não preservada"
                        />
                        <Checkbox 
                            nome={mmssii.sem}
                            onValueChange={(sem) => setMmssii({...mmssii, sem})}
                            texto="Sem Anormalidades"
                        />
                    </View>
                </View>
            </View>

            <View style={styles.linha}></View>

            <View style={styles.bg2}>
                <Text style={styles.titulo}>Sinais Vitais</Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={{alignSelf:'center', paddingRight:15, fontSize:20, marginLeft:15, marginTop:15, paddingBottom:5}}>Temperatura:</Text>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '99,9'
                        }}
                        keyboardType="numeric"
                        style={styles.maskedInput2}
                        value={sinaisVitais.temperatura}
                        onChangeText={temperatura => setSinaisVitais({...sinaisVitais, temperatura})}
                    />
                    <Text style={{alignSelf:'center', fontSize:16, paddingTop:12}}>ºC</Text>
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
                    />
                    <Text style={{alignSelf:'center', fontSize:16, paddingTop:12}}>bpm</Text>
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
                    />
                    <Text style={{alignSelf:'flex-end', fontSize:16, paddingTop:12, marginLeft:5, marginRight:5}}>-</Text>
                    <TextInputMask 
                        type={'custom'}
                        options={{
                            mask: '99'
                        }}
                        keyboardType="numeric"
                        style={[styles.maskedInput2, {width:25}]}
                        value={sinaisVitais.pressaoArterial2}
                        onChangeText={pressaoArterial2 => setSinaisVitais({...sinaisVitais, pressaoArterial2})}
                    />
                    <Text style={{alignSelf:'center', fontSize:16, paddingTop:12}}>mmHg</Text>
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
                        />
                        <Text style={{alignSelf:'center', fontSize:16, paddingTop:12}}>kg</Text>
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
                        />
                        <Text style={{alignSelf:'center', fontSize:16, paddingTop:12}}>cm</Text>
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <Text style={styles.subtitulo}>Amplitude da FR:</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox 
                        nome={amplitudeDaFr.profunda}
                        onValueChange={(profunda) => setAmplitudeDaFr({...amplitudeDaFr, profunda})}
                        texto="Profunda"
                    />
                    <Checkbox 
                        nome={amplitudeDaFr.normal}
                        onValueChange={(normal) => setAmplitudeDaFr({...amplitudeDaFr, normal})}
                        texto="Normal"
                    />
                    <Checkbox 
                        nome={amplitudeDaFr.superficial}
                        onValueChange={(superficial) => setAmplitudeDaFr({...amplitudeDaFr, superficial})}
                        texto="Superficial"
                    />
                </View>

                <View style={styles.linhaMenor}></View>

                <Text style={styles.subtitulo}>Ritmo da FR:</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox 
                        nome={ritmoDaFr.regular}
                        onValueChange={(regular) => setRitmoDaFr({...ritmoDaFr, regular})}
                        texto="Regular"
                    />
                    <Checkbox 
                        nome={ritmoDaFr.irregular}
                        onValueChange={(irregular) => setRitmoDaFr({...ritmoDaFr, irregular})}
                        texto="Irregular"
                    />
                </View>

                <View style={styles.linhaMenor}></View>

                <Text style={styles.subtitulo}>Amplitude da FC:</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox 
                        nome={amplitudeDaFc.celere}
                        onValueChange={(celere) => setAmplitudeDaFC({...amplitudeDaFc, celere})}
                        texto="Célere"
                    />
                    <Checkbox 
                        nome={amplitudeDaFc.filiforme}
                        onValueChange={(filiforme) => setAmplitudeDaFC({...amplitudeDaFc, filiforme})}
                        texto="Filiforme"
                    />
                </View>

                <View style={styles.linhaMenor}></View>

                <Text style={styles.subtitulo}>Ritmo da FC:</Text>
                <View style={{flexDirection:'row'}}>
                    <Checkbox 
                        nome={ritmoDaFC.regular}
                        onValueChange={(regular) => setRitmoDaFC({...ritmoDaFC, regular})}
                        texto="Regular"
                    />
                    <Checkbox 
                        nome={ritmoDaFC.irregular}
                        onValueChange={(irregular) => setRitmoDaFC({...ritmoDaFC, irregular})}
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
        alignSelf:'center'
    },
    subtitulo:{
        fontSize:20,
        marginTop: 15, 
        marginLeft:15, 
        marginBottom:10
    },
    subtitulo2:{
        alignSelf:'center', 
        paddingRight:15, 
        fontSize:20, 
        marginLeft:15, 
        marginTop:15, 
        paddingBottom:5
    },
    maskedInput:{
        flexGrow:1,
        height:40,
        fontSize:16,
        paddingLeft:5,
        borderBottomColor:"#999",
        borderBottomWidth:1,
        borderStyle:'solid',
        alignSelf:'flex-start'

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
        marginBottom:20,
        marginLeft:10,
        marginRight:10
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
        backgroundColor:'#2E8B57', 
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