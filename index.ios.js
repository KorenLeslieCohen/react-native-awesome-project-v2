// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */

import React, { Component } from 'react';
// import { AppRegistry, Image } from 'react-native';

import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

class AwesomeProject extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return ( 
      <View style={styles.container}>
      <Image source={pic} style={{width: 193, height: 110}}/>
        <Text style={styles.welcome}>
          Koren Leslie Cohen
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return ( 
      <Image source={pic} style={{width: 193, height: 110}}/>
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
    color: 'hotpink',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    color: 'hotpink',
  },
});


AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

