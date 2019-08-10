import React, { Component } from 'react';
import { StyleSheet, View, Button, Text, TextInput } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      randomNumber: '0',
      min: '',
      max: ''
    };
  }

  calculateNumber = () => {
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

      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <Text style={styles.textResult}>{this.state.randomNumber}</Text>
      </View>

      <View style={styles.inputs}>


        <TextInput style={styles.input}
          value={this.state.max}
          placeholder='Até'
          keyboardType="numeric"
          multiline={false}
          numberOfLines={1}
          maxLength={5}
          onChangeText={(max) => this.setState({ max })} />

        <TextInput style={styles.input}
          value={this.state.min}
          placeholder='De'
          keyboardType="numeric"
          multiline={false}
          numberOfLines={1}
          maxLength={5}
          onChangeText={(min) => this.setState({ min })} />
      </View>

      <Button onPress={this.calculateNumber} style={styles.button} title='Gerar número' />

    </View>
  }
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5'
  },
  textResult: {
    fontSize: 50,
    color: '#000',
    fontWeight: "bold",
    paddingBottom: 50
  },
  inputs: {
    justifyContent: 'space-between',

  },
  input: {
    fontSize: 30,
    textAlign: 'center',
    paddingBottom: 5,
    borderBottomColor: '#e0dcd1'
  },
  button: {
    marginTop: 20
  }

});

export default App;
