import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

import { connect } from 'react-redux';

import {
  counterIncrement,
  counterDecrement,
  counterClear,
  counterInput
} from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(number) {
    this.props.counterInput(number);
  }

  render() {
    console.log('log from react native');
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          React Native with Redux Counter
        </Text>

        <Button
          style={styles.button}
          title="-"
          onPress={this.props.counterDecrement}
        />

        <TextInput
          style={styles.input}
          placeholder="0"
          onChangeText={this.onChangeText}
          value={this.props.counter.toString()}
        />

        <Button
          style={styles.button}
          title="+"
          onPress={this.props.counterIncrement}
        />

        <Text>
          Last count number: {this.props.counter}
        </Text>
        
        <Button
          style={styles.button}
          title="Clear"
          onPress={this.props.counterClear}
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
    width: 60,
  },
  button: {
    padding: 5,
    backgroundColor: '#f2f2f2',
  },
});

function mapStateToProps(state) {
  return {
    counter: state
  }
}

const counterActions = {
  counterIncrement,
  counterDecrement,
  counterClear,
  counterInput
};

export default connect(mapStateToProps, counterActions)(App);