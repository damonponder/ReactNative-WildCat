import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as jwtActions from '../redux/jwt/actions';
import {connect} from 'react-redux';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: '',
      password: '',
    };
  }

  handleSignIn = () => {
    console.log('handling sign in');
    const options = {
      headers: {'Content-Type': 'application/json'},
    };

    axios
      .post(
        'http://10.0.2.2:8080/api/auth/signin',

        {
          username: this.state.username,
          password: this.state.password,
        },
        options,
      )
      .then((response) => response.data)
      .then((json) => {
        console.log(json);
        this.props.actions.add(
          json.accessToken,
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
            Login Form{' '}
          </Text>
          <TextInput
            placeholder="Enter Username"
            style={styles.inputStyle}
            value={this.state.username}
            onChangeText={(emailText) => this.setState({username: emailText})}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="Enter Password"
            style={styles.inputStyle}
            value={this.state.password}
            onChangeText={(password) => this.setState({password: password})}
          />
          <Button
            onPress={() => {
              this.handleSignIn();
            }}
            color="blue"
            style={{
              paddingTop: 100,
              height: 30,
              width: 100,
              borderWidth: 2,
              borderColor: 'black',
            }}
            title={'Sign In'}></Button>
          <Button
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}
            style={{fontSize: 14, color: 'red', backgroundColor: 'red'}}
            title="Don't have an account? Register Here."></Button>
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
    color: '#fff',
    fontSize: 20,
  },
});

const mapStateToProps = (state) => ({
  verify: state,
});

const ActionCreators = Object.assign({}, jwtActions);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
