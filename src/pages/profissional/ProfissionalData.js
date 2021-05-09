import React, {useState} from 'react';
import {Text, View, StyleSheet, ScrollView, CheckBox, TouchableOpacity, Button} from 'react-native';
import {Input} from 'react-native-elements';
import {TextInputMask} from 'react-native-masked-text';
import {useNavigation} from '@react-navigation/native';


import Checkbox from '../../components/Checkbox';

export default function ProfissionalData(){

    const navigation = useNavigation();

    const [dadosGerais, setDadosGerais] = useState({});

    const [estadoPaciente1, setEstadoPaciente1] = useState({});
    const [estadoPaciente2, setEstadoPaciente2] = useState({});
    const [estadoPaciente3, setEstadoPaciente3] = useState({});

    const [pele1, setPele1] = useState({});
    const [pele2, setPele2] = useState({});
    const [pele3, setPele3] = useState({});
    const [pele4, setPele4] = useState({});

    const [tamanhoCranio, setTamanhoCranio] = useState({});
    const [cabeca, setCabeca] = useState({});

    const [boca, setBoca] = useState({});
    const [olhos, setOlhos] = useState({});
    const [nariz, setNariz] = useState({});
    const [ouvidos, setOuvidos] = useState({});
    const [pescoco, setPescoco] = useState({});

    const [torax, setTorax] = useState({}); 
    const [torax1, setTorax1] = useState({});
    const [torax2, setTorax2] = useState({});
    const [torax3, setTorax3] = useState({});

    const [cardiaco, setCardiaco] = useState({});
    const [cardiaco1, setCardiaco1] = useState({});

    const [abdome, setAbdome] = useState({});
    const [abdomeRuidos, setAbdomeRuidos] = useState({});
    const [abdomeReacao, setAbdomeReacao] = useState({});


    const [geniturinarioRetoAnus, setGeniturinarioRetoAnus] = useState({});

    const [mmssMmiiSimetria, setMmssMmiiSimetria] = useState({});
    const [mmssMmiiForcaMuscular, setMmssMmiiForcaMuscular] = useState({});

    const [sinaisVitais, setSinaisVitais] = useState({});

    const [amplitudeDaFr, setAmplitudeDaFr] = useState({});
    const [ritmoDaFr, setRitmoDaFr] = useState({});
    const [amplitudeDaFc, setAmplitudeDaFC] = useState({});
    const [ritmoDaFC, setRitmoDaFC] = useState({});

    function gerarRelatorio(){


        if(verificarObjetos()){
            return alert('Por favor preencher todos os dados!');
        }else{
            let estadoTorax = check(torax);
            navigation.navigate('profissional_view_relatorio', {
                estadoTorax,
                dadosGerais,
                estadoPaciente1,
                estadoPaciente2,
                estadoPaciente3,
                pele1,
                pele2,
                pele3,
                pele4,
                tamanhoCranio,
                cabeca,
                boca,
                olhos,
                ouvidos,
                nariz,
                pescoco,
                torax1,
                torax2,
                torax3,
                cardiaco,
                cardiaco1,
                abdome,
                abdomeRuidos,
                abdomeReacao,
                geniturinarioRetoAnus,
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
        if(objetoVazio(dadosGerais)) return true;
        if(objetoVazio(estadoPaciente1)) return true;
        if(objetoVazio(estadoPaciente2)) return true;
        if(objetoVazio(estadoPaciente3)) return true;
        if(objetoVazio(pele1)) return true;
        if(objetoVazio(pele2)) return true;
        if(objetoVazio(pele3)) return true;
        if(objetoVazio(pele4)) return true;
        if(objetoVazio(tamanhoCranio)) return true;
        if(objetoVazio(cabeca)) return true;

        if(objetoVazio(boca)) return true;
        if(objetoVazio(olhos)) return true;
        if(objetoVazio(nariz)) return true;
        if(objetoVazio(ouvidos)) return true;

        if(objetoVazio(pescoco)) return true;
        if(objetoVazio(torax)) return true;

        if(objetoVazio(torax1)) return true;
        if(objetoVazio(torax2)) return true;
        if(objetoVazio(torax3)) return true;

        if(objetoVazio(cardiaco)) return true;
        if(objetoVazio(cardiaco1)) return true;
        if(objetoVazio(abdome)) return true;
        if(objetoVazio(abdomeRuidos)) return true;
        if(objetoVazio(abdomeReacao)) return true;
        if(objetoVazio(geniturinarioRetoAnus)) return true;

        if(objetoVazio(mmssMmiiSimetria)) return true;
        if(objetoVazio(mmssMmiiForcaMuscular)) return true;
        if(objetoVazio(sinaisVitais)) return true;
        
        if(objetoVazio(amplitudeDaFr)) return true;v
        if(objetoVazio(ritmoDaFr)) return true;
        if(objetoVazio(amplitudeDaFc)) return true;
        if(objetoVazio(ritmoDaFC)) return true;
        

        return false;
    }

    function objetoVazio(obj){
        if(Object.keys(obj).length === 0){
            return true;
        }
        return false;
    }

    function check(obj){
        let retorno = [];
        //verifica se o valor é verdadeiro e seta dentro do array

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
                    <Text style={[styles.subtitulo]}>Pele:</Text>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={pele1.anicterico}
                                onValueChange={(anicterico) => setPele1({...pele1, anicterico})}
                                texto="Anictérico"
                            />
                            <Checkbox 
                                nome={pele1.icterico}
                                onValueChange={(icterico) => setPele1({...pele1, icterico})}
                                texto="Ictérico"
                            />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={pele2.cianotico}
                                onValueChange={(cianotico) => setPele2({...pele2, cianotico})}
                                texto="Cianótico"
                            />
                            <Checkbox 
                                nome={pele2.acianotico}
                                onValueChange={(acianotico) => setPele2({...pele2, acianotico})}
                                texto="Acianótico"
                            />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={pele3.integra}
                                onValueChange={(integra) => setPele3({...pele3, integra})}
                                texto="Integra"
                            />
                            <Checkbox 
                                nome={pele3.hidratada}
                                onValueChange={(hidratada) => setPele3({...pele3, hidratada})}
                                texto="Hidratada"
                            />
                            <Checkbox 
                                nome={pele3.ressecada}
                                onValueChange={(ressecada) => setPele3({...pele3, ressecada})}
                                texto="Ressecada"
                            />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={pele4.hipocorado}
                                onValueChange={(hipocorado) => setPele4({...pele4, hipocorado})}
                                texto="Hipocorado"
                            />
                            <Checkbox 
                                nome={pele4.normocorado}
                                onValueChange={(normocorado) => setPele4({...pele4, normocorado})}
                                texto="Normocorado"
                            />
                        </View>



                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Cabeça:</Text>
                    <View>
                        <View style={{flexDirection:'row', paddingBottom:20}}>
                            <Checkbox 
                                nome={tamanhoCranio.normal} 
                                onValueChange={(normal) => setTamanhoCranio({...tamanhoCranio, normal})}
                                texto="Normal"
                            />
                            <Checkbox 
                                nome={tamanhoCranio.expandido} 
                                onValueChange={(expandido) => setTamanhoCranio({...tamanhoCranio, expandido})}
                                texto="Expandido"
                            />
                        </View>
                        <Checkbox 
                            nome={cabeca.tumoracoes} 
                            onValueChange={(tumoracoes) => setCabeca({...cabeca, tumoracoes})}
                            texto="Tumorações"
                        />
                        <Checkbox 
                            nome={cabeca.lesoes_no_couro_cabeludo} 
                            onValueChange={(lesoes_no_couro_cabeludo) => setCabeca({...cabeca, lesoes_no_couro_cabeludo})}
                            texto="Lesões no couro cabeludo"
                        />
                        <Checkbox 
                            nome={cabeca.pontos_dolorosos} 
                            onValueChange={(pontos_dolorosos) => setCabeca({...cabeca, pontos_dolorosos})}
                            texto="Pontos dolorosos"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Boca:</Text>
                    <View>
                        <Checkbox 
                            nome={boca.presenca_dos_dentes_na_boca} 
                            onValueChange={(presenca_dos_dentes_na_boca) => setBoca({...boca, presenca_dos_dentes_na_boca})}
                            texto="Presença de/dos dentes na boca"
                        />
                        <Checkbox 
                            nome={boca.saburra_lingual}
                            onValueChange={(saburra_lingual) => setBoca({...boca, saburra_lingual})}
                            texto="Saburra lingual"
                        />
                        <Checkbox 
                            nome={boca.feridas_ou_fissuras_labiais}
                            onValueChange={(feridas_ou_fissuras_labiais) => setBoca({...boca, feridas_ou_fissuras_labiais})}
                            texto="Feridas e/ou fissuras labiais"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Olhos:</Text>
                    <View>
                        <Checkbox 
                            nome={olhos.reflexo_pupilares_presentes}
                            onValueChange={(reflexo_pupilares_presentes) => setOlhos({...olhos, reflexo_pupilares_presentes})}
                            texto="Reflexo pupilares presentes"
                        />
                        <Checkbox 
                            name={olhos.pupilas_em_miose}
                            onValueChange={(pupilas_em_miose) => setOlhos({...olhos, pupilas_em_miose})}
                            texto="Pupilas em miose"
                        />
                        <Checkbox 
                            name={olhos.pupilas_em_midriase}
                            onValueChange={(pupilas_em_midriase) => setOlhos({...olhos, pupilas_em_midriase})}
                            texto="Pupilas em midriase"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>
         
                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Nariz:</Text>
                    <View>
                        <Checkbox 
                            name={nariz.nariz_hidratado}
                            onValueChange={(nariz_hidratado) => setNariz({...nariz, nariz_hidratado})}
                            texto="Nariz hidratado"
                        />
                        <Checkbox 
                            name={nariz.nariz_ressecado}
                            onValueChange={(nariz_ressecado) => setNariz({...nariz, nariz_ressecado})}
                            texto="Nariz ressecado"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Ouvidos:</Text>
                    <View>
                        <Checkbox 
                            name={ouvidos.ouvidos_limpos}
                            onValueChange={(ouvidos_limpos) => setOuvidos({...ouvidos, ouvidos_limpos})}
                            texto="Ouvidos limpos"
                        />
                        <Checkbox 
                            name={ouvidos.ouvidos_com_presenca_de_cerumen}
                            onValueChange={(ouvidos_com_presenca_de_cerumen) => setOuvidos({...ouvidos, ouvidos_com_presenca_de_cerumen})}
                            texto="Ouvidos com presença de cerúmen"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Pescoço:</Text>
                    <View>
                        <Checkbox 
                                nome={pescoco.alteracao_da_traqueia}
                                onValueChange={(alteracao_da_traqueia) => setPescoco({...pescoco, alteracao_da_traqueia})}
                                texto="Alterações da traqueia"
                        />
                        <Checkbox 
                            nome={pescoco.tamanho_dos_linfonodos}
                            onValueChange={(tamanho_dos_linfonodos) => setPescoco({...pescoco, tamanho_dos_linfonodos})}
                            texto="Tamanho dos linfonodos"
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Toráx:</Text>
                    <View>
                        <View style={{flexDirection:'row'}}>
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
                        </View>
                        <View style={{flexDirection:'row'}}>
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
                        </View>
                        <View style={{flexDirection:'row'}}>
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
                        </View>
                        <Checkbox 
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
                            nome={torax.ra}
                            onValueChange={(ra) => setTorax({...torax, ra})}
                            texto="RA (ruídos adventícios)"
                        />
                        <Checkbox 
                            nome={torax.ap}
                            onValueChange={(ap) => setTorax({...torax, ap})}
                            texto="AP (ausculta pulmonar)"
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
                        />
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>
                    <Text style={styles.subtitulo}>Cardíaco:</Text>
                    <View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={cardiaco.pulso_celere}
                                onValueChange={(pulso_celere) => setCardiaco({...cardiaco, pulso_celere})}
                                texto="Pulso celere"
                            />
                            <Checkbox 
                                nome={cardiaco.pulso_filiforme}
                                onValueChange={(pulso_filiforme) => setCardiaco({...cardiaco, pulso_filiforme})}
                                texto="Pulso filiforme"
                            />
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Checkbox 
                                nome={cardiaco1.apresenta_sopros}
                                onValueChange={(apresenta_sopros) => setCardiaco1({...cardiaco1, apresenta_sopros})}
                                texto="Apresenta sopros"
                            />
                            <Checkbox 
                                nome={cardiaco1.não_apresenta_sopros}
                                onValueChange={(não_apresenta_sopros) => setCardiaco1({...cardiaco1, não_apresenta_sopros})}
                                texto="Não apresenta sopros"
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
                    </View>
                </View>

                <View style={styles.linhaMenor}></View>

                <View style={{paddingBottom:20}}>                    
                    <Text style={styles.subtitulo}>MMSS MMII:</Text>
                    <View>
                        <Checkbox 
                            nome={mmssMmiiSimetria.mmii_e_mmss_simetricos}
                            onValueChange={(mmii_e_mmss_simetricos) => setMmssMmiiSimetria({...mmssMmiiSimetria, mmii_e_mmss_simetricos})}
                            texto="MMII e MMSS simétricos"
                        />
                        <Checkbox 
                            nome={mmssMmiiSimetria.mmii_e_mmss_não_simetricos}
                            onValueChange={(mmii_e_mmss_não_simetricos) => setMmssMmiiSimetria({...mmssMmiiSimetria, mmii_e_mmss_não_simetricos})}
                            texto="MMII e MMSS não simétricos"
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
                            mask: '99'
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
                            mask: '99'
                        }}
                        keyboardType="numeric"
                        style={[styles.maskedInput2, {width:25}]}
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
                                mask: '999'
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
                                mask: '999'
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
    }
});