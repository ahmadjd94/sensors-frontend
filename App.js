import React, { Component } from 'react';

import { Container, Text, Button, Content, Input, Item, Header, Left, Body, Right, Title} from 'native-base';
import {host} from './settings';
const axios = require('axios')

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'null',
      password: 'null'

     };
  }

  loginApi= ()=> {
    
    axios.post(`${host}/users/login`, {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response); //todo store token into cache
    })
    .catch(function (error) {
      console.log("Got a freaking error");
      console.log(error);
    });
  }


  render() {
    return (

     <Container>

      <Header>
                <Left/>
                <Body>
                  <Title>Login Page</Title>
                </Body>
                <Right />
      </Header>
       <Content>

          <Item Username>
            <Input placeholder='Username' 
            onChangeText ={(username) =>{
              this.setState({username})
            }}
            
            />
          </Item>

          <Item Password>
            <Input placeholder='Password' 
            onChangeText ={(password) =>{
              this.setState({password})
            }}
            />
          </Item>
         
         
        <Button
          onPress={this.loginApi}
          title="Login"
          color="#841584"
          accessibilityLabel="Login to the service"
        >
                    <Text>Login!</Text>
        </Button>
        </Content>
      </Container>

      
      

      

);
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
