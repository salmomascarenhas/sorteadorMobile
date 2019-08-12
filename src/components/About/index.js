import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';


export default About = () => {

    return <View style={styles.container}>
        <Text style={{ fontSize: 20 }}>Autor: Salmo Mascarenhas</Text>
        <Text style={{ fontSize: 20 }}>Email: salmo.cruz@gmail.com</Text>

    </View>;
};