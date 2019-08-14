import React, { Component } from 'react';
import { SafeAreaView, View, Text, TextInput, ToastAndroid, TouchableOpacity, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      randomNumber: '0',
      min: '',
      max: ''
    };
  }


  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Sorteador',
    headerTitleStyle: {
      fontWeight: 'bold'
    },
    headerRight: (
      <View style={{ paddingRight: 10 }}>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>

          <Icon name='dots-vertical' size={30} color='#2591be' />

        </TouchableOpacity>
      </View>)
  })

  randomNumber = () => {

    let { min, max } = this.state;
    let randomNumber;

    min = parseInt(min);
    max = parseInt(max);

    randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.round(randomNumber).toString();

    this.setState({ randomNumber });
  }

  setIntervalLimit = (func, time, limit) => {

    let { min, max } = this.state;

    min = parseInt(min);
    max = parseInt(max);

    if (isNaN(min) || isNaN(max)) {
      ToastAndroid.show('Preencha todos os campos', ToastAndroid.SHORT);

      return
    }
    if (min >= max) {
      ToastAndroid.show('Valor inválido', ToastAndroid.SHORT);

      return
    }

    let n = 0; // CRIA UM CONTADOR INTERNO
    let f = function () { // CRIA UM FUNCAO INTERNA
      func();
      n++;
      if (n < limit) { // VEFIFICA CONTAGEM
        setTimeout(f, time); // REALIZA LOOP
      }
    }
    f(); // CHAMA A FUNÇÃO INTERNA 1ª VEZ
  }



  render() {
    return <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#f5f5f5' barStyle='dark-content' />

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>

        <Text style={styles.textResult}>{this.state.randomNumber}</Text>

      </View>

      <View style={styles.inputs}>

        <TextInput style={styles.inputDe}
          value={this.state.min}
          placeholder='De'
          keyboardType="numeric"
          multiline={false}
          numberOfLines={1}
          maxLength={5}
          onChangeText={(min) => this.setState({ min })} />

        <TextInput style={styles.inputAte}
          value={this.state.max}
          placeholder='Até'
          keyboardType="numeric"
          multiline={false}
          numberOfLines={1}
          maxLength={5}
          onChangeText={(max) => this.setState({ max })} />

      </View>


      <TouchableOpacity onPress={() => this.setIntervalLimit(this.randomNumber, 10, 25)} style={styles.button}>
        <Text style={styles.textButton}>Sortear</Text>
      </TouchableOpacity>

    </SafeAreaView>
  }
}
