import React, { Component } from 'react';

import  {Alert, Icon, AsyncStorage, View, Button, Text , Image, StyleSheet, TextInput,TouchableHighlight, ScrollView} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import { Container, Content, Input, Item, Header, Left, Body, Right, Title, Card, CardItem} from 'native-base';
import {host} from './settings';
const axios = require('axios');

let formatTime=(dateTaken)=>{
  console.log(dateTaken);

  var event2 = new Date(dateTaken);
  console.log(event2);

  console.log(event2.getFullYear())

 return `${event2.getFullYear()}-${event2.getMonth()+1}-${event2.getDate()}, ${event2.getHours()}:${event2.getMinutes()}`

}

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      token: ''
    };
  }
  

  getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('@token')
      if(value != null) {
        return true
      }
    } catch(e) {
      return false
    }
  }
  
    
  
  render() {
    loginApi= () =>{
    
      axios.post(`${host}/users-api/login`, {
        username: this.state.username,
        password: this.state.password
      })
      .then( function(response) {
         return true
        })
      .catch(function (error) {
        console.log(error.toString())
  
        return false;
      });
    }


    let pic = {
      uri: 'data:image/jpeg;base64,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'
    };
   
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
     

<Image source={pic} style={{width: 193, height: 110}}/>
        <Text>Temperature Measurement System</Text>

        <View style={styles.inputContainer}>
          <Image  style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/3498db'}}/>
          <TextInput //style={[styles.input,!this.state.nameValidate? styles.error : null ]}
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}

          placeholder={'Username'}
          
        />
        </View>

     
        <View 
        style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
      

       <TouchableHighlight
            style={[styles.buttonContainer, styles.loginButton]} 
            onPress={ () => {
              // const result =   loginApi ()
                  // console.log(result)
                  this.props.navigation.navigate('Rooms')

                
                {
                  Alert.alert("wrong username or password")
                }
                }
            } 
          
               >
            <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

      
        <TouchableHighlight style={styles.buttonContainer} 
        onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Register</Text>
        </TouchableHighlight>


      </View>
      

      
    );
  }
}

class RegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      Email:'',
      username: '',
      password: '',
    };
  }
  
  // onLogin() {
  //   const { username, password } = this.state;
  //   Alert.alert('Credentials', `${username} + ${password}`);
   
    
  // }

  registerApi=()=>{
    
    axios.post(`${host}/users-api/signup`, {
      email: this.state.Email,
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
    
      console.log("response"); //todo store token into cache
    })
    .catch(function (error) {
      console.log("Got a freaking error");
      console.log(error);
    });
  }


  render() {
   
    return (
      
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         
     
        <Text>   </Text>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/3498db'}}/>
          <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        </View>

        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>
      

         <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} 
                 onPress={() =>{this.registerApi();
                 this.props.navigation.navigate('Home')}}>
          <Text style={styles.loginText}>Register</Text>
        </TouchableHighlight>

          </View>
      

      
    );
  }
}


class RoomsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'null',
      password: 'null',
      token: `null`,
      currentState: []

     };
  }
  render() {
    elements = []
    
    this.state.currentState.forEach(element => {
        console.log(element.name)
        elements.push(
                <CardItem header key={element.id}>
                  <Button
                  title = {element.name} 
                  onPress={ () =>{
                    // await AsyncStorage.setItem("@currentRoom",element.id.toString())

                    this.props.navigation.navigate('RoomView',{"sensorId":element.id})
                  }}
                  />
                 
                </CardItem>
                  
    )
    }    )
    return (
    <View>
       <View>
         <Text>Rooms: </Text>
         <Button 
                   color="#00b5ec"
                   onPress={async () => {
                     

                  }
                }
                   title="Back to Rooms"/>

     </View>
     
   <View>
        <Card> 
        <ScrollView>                  
           {elements}
           </ScrollView>
           
         </Card>
       
    </View>

    
  </View>
)}

UNSAFE_componentWillMount =async () => {
var currentState = [];
let res = await axios.get(host+'/sensors');
let data  = await res.data;
var k = 1

res.data.forEach(element => {
    console.log(element)
    element.key = k
    k++;
    currentState.push(element);
    console.log("pass");})

    this.setState({ currentState: currentState });
};



}


class RoomView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: 'null',
      password: 'null',
      token: `null`,
      currentState: []

     };
  }
  render() {
    elements = []
    
    this.state.currentState.forEach(element => {
        console.log(element.name)
        elements.push(
                <CardItem header>
                  <Text>
                      Temperature : {element.temperature} 
                  </Text> 
                 
                </CardItem>
                  
    )
    }    )
    return (
    <View>
       <View>
         <Text>Room 1: </Text>
         <Button 
                   color="#00b5ec"
                   onPress={ () => {
                     this.props.navigation.navigate('Rooms')}}
                   title="Back to Rooms"/>

     </View>
     
   <View>
        <Card> 
        <ScrollView>                  
           {elements}
           </ScrollView>
           
         </Card>
       
    </View>

    
  </View>
)}

UNSAFE_componentWillMount =async () => {
var currentState = [];
console.log(this.props.navigation.state.params.sensorId)
let res = await axios.get(`${host}/sensors/${this.props.navigation.state.params.sensorId}/records`);
let data  = await res.data;
var k = 1

res.data.forEach(element => {
    console.log(element)
    element.key = k
    k++;
    currentState.push(element);
    console.log("pass");})

    this.setState({ currentState: currentState });
};



}


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Rooms: RoomsView,
    RoomView: RoomView,
    Register: RegisterScreen,

  },
  {
    initialRouteName: "Home"
  }
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
  },
  inputContainer: {
      borderBottomColor: '#d6f1fc',
      backgroundColor: '#d6f1fc',
      borderRadius:25,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  
 
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
},
error: {
  borderWidth:3,
  borderColor: 'red'
}
});
 

export default createAppContainer(AppNavigator);

