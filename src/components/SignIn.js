import React, {Fragment} from 'react';
import {View, Text, TextInput, Button,Image, StyleSheet} from 'react-native';
import axios from 'axios';
import {bindActionCreators} from 'redux';
import * as jwtActions from '../redux/jwt/actions';
import {connect} from 'react-redux';
import {WOTLOGO} from '../../Images/logoIndex'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {scale} from '../../util/functions'



class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Username: '',
      password: '',
    };
  }

  handleSignIn = () => {
    const options = {
      headers: {'Content-Type': 'application/json'},
    };

    axios
      .post(
        'http://52.14.115.8/api/auth/signin',

        {
          username: this.state.username,
          password: this.state.password,

        },
        options,
      )
      .then((response) => response.data)
      .then((json) => {
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
      });
  };

  render() {
    return (
      <Fragment>
      <View style={{backgroundColor:'white'}}>
        <Image style={{width:scale(330), height:scale(250),marginLeft:scale(12), alignItems:'center', backgroundColor:'white'}} source={WOTLOGO}/>
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
            }} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(150),alignItems:'center',backgroundColor:'black',padding:scale(5), marginTop:scale(10)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Sign In</Text></TouchableOpacity>
            
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('Register');
            }} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5), marginTop:scale(10)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Don't have an account? Register Here!</Text></TouchableOpacity>
        </View>
      </Fragment>
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
    color: '#fff',
    fontSize: scale(20),
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
