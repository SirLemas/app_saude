import React from 'react';
import {Image} from 'react-native';

export default function TabBarIcon(props) {
        let imgSource = null;
        switch(props.name){
            case 'inicio': 
                imgSource = require('../assets/images/icone_home.png');
                break;
            case 'estudante':
                imgSource = require('../assets/images/icone_estudante_livro.png');
                break;
            case 'profissional':
                imgSource = require('../assets/images/prancheta.png');
        }

        return <Image source={imgSource} style={{width:24,height:24}}/>
}