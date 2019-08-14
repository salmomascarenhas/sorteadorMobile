import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import styles from './styles';


export default About = () => {

    return <SafeAreaView style={styles.container}>
        <Text style={{ fontSize: 16 }}>Autor: Salmo Mascarenhas</Text>
        <Text style={{ fontSize: 16 }}>Email: salmo.cruz@gmail.com</Text>

        <Text style={{ fontSize: 14, marginTop: 5 }}>Aplicativo feito apenas para aprendizado do React Native</Text>

    </SafeAreaView>;
};