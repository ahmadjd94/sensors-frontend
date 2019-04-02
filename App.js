import React from 'react';
import { StyleSheet, View , TextInput, Button} from 'react-native';
import {host} from './settings';
const axios = require('axios')

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'enter username',
      password: null,

     };
  }

  loginApi() {
    axios.post(`${host}/user`, {
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log("Got a freaking error");
      console.log(error);
    });
  }
  


  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 2, width: 120}}
        onChangeText={(username) => this.setState({username})}
        value={this.state.username}
        
      />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 2, width: 120}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
      />

      <Button
        onPress={this.loginApi}
        title="Login"
        color="#841584"
        accessibilityLabel="Login to the service"
      />
      

      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
