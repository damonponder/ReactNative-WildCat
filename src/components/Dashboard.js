import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView,View, Button } from 'react-native';
// import Constants from 'expo-constants';
import {bindActionCreators} from 'redux';
import * as jwtActions from '../redux/jwt/actions';
import {connect} from 'react-redux';
import {scale} from '../../util/functions'
class Dashboard extends React.Component {
  render() {
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Form Dashboard
        </Text>
        <View style={{justifyContent:'space-between',flexDirection:'column',height:scale(100),marginTop:scale(20)}}>
        <Button style={{marginBottom:scale(20)}} color={'black'} textColor={'#FEE53B'} title={'Observation Card'} onPress={() => {this.props.navigation.navigate('ObservationInfo')}}/>
        <Button style={styles.buttonSpacing} color={'black'} title={'Logout'} onPress={() => {this.logout()}}><Text style={[{color:'#FEE53B'},]}>Logout</Text></Button>
        
        </View>
    </SafeAreaView>
  );
}
check(){
  console.log('props check: ',this.props.verify)
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
    flex: 1,
    alignItems:'center'
    // marginTop: Constants.statusBarHeight,
  },

  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: scale(40),
  },
  text: {
    fontSize: scale(22),
    marginTop:scale(20)
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
