import React from 'react';
import axios from 'axios';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {scale} from '../../util/functions'




export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    };

    
  };

handleSignUp = () => {
  const options = {
    headers: {'Content-Type': 'application/json'},
  };

  axios
    .post(
      'http://52.14.115.8/api/auth/signup',

      {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      },
      options
    )
    .then((response) => response.data)
    .then((json) => {
      this.props.actions.add(
        json.token,
        this.state.username,
        json.roles,
        json.success,
      );
    })
    .then(() => {
      if (
        this.props.verify.jwt.token &&
        this.props.verify.jwt.isAuthenticated
      ) {
        this.props.navigation.navigate('Dashboard');
      }
    })
    .catch((error) => {
    });
};

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: scale(1), justifyContent: 'center',alignItems:'center'}}>
          <Text style={[styles.formLabel, {alignSelf: 'center'}]}>
            {' '}
            Registration Form{' '}
          </Text>
          <TextInput placeholder="Enter First Name" style={styles.inputStyle} 
           value={this.state.firstname}
           onChangeText={(firstname) => this.setState({firstname: firstname})}
          />
          <TextInput placeholder="Enter Last Name" style={styles.inputStyle}
           value={this.state.lastname}
           onChangeText={(lastname) => this.setState({lastname: lastname})}
          />
          <TextInput placeholder="Enter UserName" style={styles.inputStyle}
           value={this.state.username}
           onChangeText={(emailText) => this.setState({username: emailText})}
          />
          <TextInput placeholder="Enter Email" style={styles.inputStyle} 
           value={this.state.email}
           onChangeText={(emailText) => this.setState({email: emailText})}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            style={styles.inputStyle}
            value={this.state.password}
            onChangeText={(password) => this.setState({password: password})}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Please Re-Enter Password"
            style={styles.inputStyle}
            value={this.state.password2}
            onChangeText={(password2) => this.setState({password2: password2})}
          />
            <TouchableOpacity onPress={() => {
                this.handleSignUp();
              }} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(191),alignItems:'center',backgroundColor:'black',padding:scale(5), marginTop:10}}><Text style={{color:'#FEE53B',fontSize:scale(18)}}>Registration Complete</Text></TouchableOpacity>            
              <TouchableOpacity  onPress={() => {
              this.props.navigation.navigate('SignIn');
            }} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(370),alignItems:'center',backgroundColor:'black',padding:scale(5), marginTop: 10}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Already have an account? Sign in here!</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: scale(1),
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    height: scale(50),
  },

  formLabel: {
    fontSize: scale(20),
    color: 'black',
  },
  inputStyle: {
    marginTop: scale(20),
    width: scale(300),
    height: scale(40),
    paddingHorizontal: scale(10),
    borderRadius: scale(50),
    backgroundColor: '#DCDCDC',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: scale(20),
  },
  text: {
    color: 'black',
    fontSize: scale(20),
  },
});
