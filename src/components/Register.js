import React from 'react';
import axios from 'axios';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

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
  console.log('handling registration');
  console.log(this.state)
  const options = {
    headers: {'Content-Type': 'application/json'},
  };

  axios
    .post(
      'http://localhost:8080/api/auth/signup',

      {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      },
      options,
    )
    .then((response) => response.data)
    .then((json) => {
      console.log(json);
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
      console.log(error);
    });
};

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={[styles.formLabel, {alignSelf: 'center'}]}>
            {' '}
            Register Form{' '}
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
          <Button
            onPress={() => {
              this.handleSignUp()
            }}
            color="blue"
            style={{
              paddingTop: 100,
              height: 30,
              width: 100,
              borderWidth: 2,
              borderColor: 'black',
            }}
            title={'Registration'}></Button>
          <Button
            onPress={() => {
              this.props.navigation.navigate('SignIn');
            }}
            style={{fontSize: 14, color: 'red', backgroundColor: 'red'}}
            title="Already have an account? Sign in here."></Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },

  formLabel: {
    fontSize: 20,
    color: 'black',
  },
  inputStyle: {
    marginTop: 20,
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 50,
    backgroundColor: '#DCDCDC',
  },
  formText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 20,
  },
  text: {
    color: 'black',
    fontSize: 20,
  },
});
