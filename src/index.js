import React, { Component } from 'react';
import { View, Button, Text, TextInput } from 'react-native';

import styles from './styles';
import ButtonRight from './components/ButtonRight';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      randomNumber: '0',
      min: '',
      max: ''
    };
  }

  static navigationOptions = {
    headerTitle: 'Sorteador',
    headerRight: <ButtonRight />
  }

  randomNumber = () => {
    let { min, max } = this.state;
    let randomNumber;

    min = parseInt(min);
    max = parseInt(max);


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


      <View style={styles.button}>

        <Button onPress={this.randomNumber} title='Sortear' />

      </View>

    </View>
  }
}
