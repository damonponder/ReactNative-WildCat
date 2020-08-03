import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,View, Button } from 'react-native';
// import Constants from 'expo-constants';
import {bindActionCreators} from 'redux';
import * as jwtActions from '../redux/jwt/actions';
import {connect} from 'react-redux';
import {scale} from '../../util/functions'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Dashboard extends React.Component {
  render() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Forms Dashboard
        </Text>
        <View style={{justifyContent:'space-between',flexDirection:'column',height:scale(100),marginTop:scale(20)}}>
        <TouchableOpacity onPress={() => {this.props.navigation.navigate('ObservationInfo')}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(200),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Observation Card</Text></TouchableOpacity>
            
        <TouchableOpacity onPress={() => {this.logout()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(200),alignItems:'center',backgroundColor:'black',padding:scale(5),marginTop:scale(15)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Logout</Text></TouchableOpacity>

        
        </View>
    </SafeAreaView>
  );
}
check(){
}
logout(){
  this.props.actions.remove()
  this.props.navigation.navigate('Home')
}
}

const styles = StyleSheet.create({
  buttonSpacing:{
   // flex:1,
    marginTop:scale(15)
  },
  container: {
    flex: scale(1),
    alignItems:'center'
    // marginTop: Constants.statusBarHeight,
  },

  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: scale(40),
  },
  text: {
    fontSize: scale(26),
    marginTop:scale(20),
    color:'black',
    fontWeight:'bold'
  },
});

const mapStateToProps = (state) => ({
  verify: state,
});

const ActionCreators = Object.assign({}, jwtActions);

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
