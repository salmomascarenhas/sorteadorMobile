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

      <View style={{ flexDirection: "row", justifyContent: 'center' }}>
        <Text style={styles.textResult}>{this.state.randomNumber}</Text>
      </View>


      <View style={styles.button}>
        <Button onPress={this.randomNumber} title='Sortear' />
      </View>

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
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  inputDe: {
    fontSize: 30,
    textAlign: 'center',
    borderBottomColor: '#e0dcd1',
    borderBottomWidth: 1,
    marginRight: 10,
    maxWidth: 80
  },
  inputAte: {
    fontSize: 30,
    textAlign: 'center',
    borderBottomColor: '#e0dcd1',
    borderBottomWidth: 1,
    maxWidth: 80
  },
  button: {
    marginTop: 20
  }

});

export default App;
