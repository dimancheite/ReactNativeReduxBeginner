import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: '0'
    };

    this.initCounter = this.initCounter.bind(this);
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  initCounter(sign) {
    this.setState({
      counter: '0'
    })
  }

  increaseCounter(sign) {
    this.setState({
      counter: '' + (parseInt(this.state.counter) + 1)
    })
  }

  decreaseCounter(sign) {
    this.setState({
      counter: '' + (parseInt(this.state.counter) - 1)
    })
  }

  onChangeText(number) {
    const counter = number;
    this.setState({counter});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native with Redux Counter
        </Text>

        <Button
          style={styles.button}
          title="-"
          onPress={this.decreaseCounter}
        />

        <TextInput
          style={styles.input}
          placeholder="0"
          onChangeText={this.onChangeText}
          value={this.state.counter}
        />

        <Button
          style={styles.button}
          title="+"
          onPress={this.increaseCounter}
        />
        
        <Button
          style={styles.button}
          title="Clear"
          onPress={this.initCounter}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    backgroundColor: '#d2d2d2',
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    width: 50,
  },
  button: {
    padding: 5,
    backgroundColor: '#f2f2f2',
  },
});
