import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';

export default class ConfirmationAlertWithYesNo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Basic Alert confirmation dialog
        </Text>
        <Button title="Hello World" onPress={() => {
          console.log("Button Pressed");
          Alert.alert(
  'Delete Confirmation',
  'Are you sure to delete?',
  [
    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ],
  { cancelable: false }
)
        }
        }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
    
