import React, { Component } from 'react';
import { View, Button, Text, TextInput, ToastAndroid, TouchableHighlight } from 'react-native';

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
    headerRight: (
      <View style={{ paddingRight: 10 }}>
        <Button
          onPress={() => navigation.navigate('About')}
          color={'#2591be'}
          title="..." />
      </View>)
  })

  randomNumber = () => {
    let { min, max } = this.state;
    let randomNumber;

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

    randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.round(randomNumber).toString();

    this.setState({ randomNumber });
  }



  render() {
    return <View style={styles.container}>

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


      <TouchableHighlight onPress={this.randomNumber} style={styles.button}>

        <Text style={styles.textButton}>Sortear</Text>

      </TouchableHighlight>

    </View>
  }
}
