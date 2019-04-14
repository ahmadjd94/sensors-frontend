import React, { Component } from 'react';

import  {Alert, AsyncStorage, createStackNavigator, View} from 'react-native';

import { Container, Text, Button, Content, Input, Item, Header, Left, Body, Right, Title, Card, CardItem} from 'native-base';
import {host} from './settings';
const axios = require('axios')


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'null',
      password: 'null',
      token: `null`,
      currentState: []

     };
  }

  // loginApi= ()=> {
    
  //   axios.post(`${host}/users/login`, {
  //     username: this.state.username,
  //     password: this.state.password
  //   })
  //   .then(function (response) {
  //     console.log(response); //todo store token into cache
  //   })
  //   .catch(function (error) {
  //     console.log("Got a freaking error");
  //     console.log(error);
  //   });
  // }
  render(){
    // this.renderBusinessInfo();
    elements = []
    // console.log(this.state.onCall)
    // if (this.state.onCall){
    this.state.currentState.forEach(element => {
        console.log(element.name)
        elements.push(
                <CardItem header>
                <Text>
                  {element.name} tempreture : {element.temperature} tempreture : {element.humidity * 100} 
                </Text> 
                </CardItem>
  //          </Card>
    //     )
    )}
    )
    return( <View>
                  <Card>

                {elements}
                    </Card>
            </View>
    )}




// componentDidMount =async()=>{
// renderBusinessInfo=()=>{
  //   var currentState = [];
  //   axios.get(host+`/sensors`, {
  //       headers: {
  //           "Content-Type": "application/json",
  //           // "Authorization": "POS "+ await AsyncStorage.getItem("@token")
  //       }
  //   })  
  //     .then(response=> {
  //       var k = 1
  //       console.log(k)
  //       console.log(response)
  //       console.log("response")

  //       response.data.data.forEach(element => {
  //           console.log(element)
  //           element.key = k
  //           k++;
  //           currentState.push(element);
  //           console.log("pass");

  //   })}).catch(function(error){
  //         console.log(error)
  //         console.log("error.response")
  //     });
  //   }
  // }



  UNSAFE_componentWillMount =async () => {
  var currentState = [];
  let res = await axios.get(host+'/sensors-list');
  let data  = await res.data;
  var k = 1

  res.data.forEach(element => {
              console.log(element)
              element.key = k
              k++;
              currentState.push(element);
              console.log("pass");})
    console.log(currentState)
  this.setState({ currentState: currentState });
};

//   render() {
//     return (

//      <Container>

//       <Header>
//                 <Left/>
//                 <Body>
//                   <Title>Login Page</Title>
//                 </Body>
//                 <Right />
//       </Header>
//        <Content>

//           <Item Username>
//             <Input placeholder='Username' 
//             onChangeText ={(username) =>{
//               this.setState({username})
//             }}
            
//             />
//           </Item>

//           <Item Password>
//             <Input placeholder='Password' 
//             onChangeText ={(password) =>{
//               this.setState({password})
//             }}
//             />
//           </Item>
         
         
//         <Button
//           onPress={this.loginApi}
//           title="Login"
//           color="#841584"
//           accessibilityLabel="Login to the service"
//         >
//                     <Text>Login!</Text>
//         </Button>
//         </Content>
//       </Container>


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

}