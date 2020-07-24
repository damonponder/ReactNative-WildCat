import React, {Fragment} from 'react';
import {View, Text, TextInput, Button,Image, StyleSheet} from 'react-native';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as jwtActions from '../redux/jwt/actions';
import {connect} from 'react-redux';
import {WOTLOGO} from '../../Images/logoIndex'
import { TouchableOpacity } from 'react-native-gesture-handler';



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
      <Fragment>
      <View style={{backgroundColor:'white'}}>
        <Image style={{width:335, height:250,marginLeft:30, alignItems:'center', backgroundColor:'white'}} source={WOTLOGO}/>
      </View>
      <View style={styles.container}>
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
         
            <TouchableOpacity onPress={() => {
              this.handleSignIn();
            }} style={{borderRadius:10,borderWidth:1,borderColor:'black',width:150,alignItems:'center',backgroundColor:'black',padding:5}}><Text style={{color:'#FEE53B',fontSize:20}}>Sign In</Text></TouchableOpacity>
          <Button
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}
            style={{fontSize: 14, color: 'red', backgroundColor: 'red'}}
            title="Don't have an account? Register Here."/>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
