import React from 'react';
import { StyleSheet, View , TextInput, Button} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'enter username',
      password: null,

     };
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
        // onPress={onPressLearnMore}
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
