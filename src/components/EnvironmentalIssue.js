import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class environmentalIssue extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                Air:null,
                Ground:null,
                Water:null,
                Waiste:null
                
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Air}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Air:value})}}
        />
        <Text style={styles.text}>
         Air
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Ground}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Ground:value})}}
        />
        <Text style={styles.text}>
         Ground
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Water}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Water:value})}}
        />
        <Text style={styles.text}>
         Water
         </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Waiste}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Waiste:value})}}
        />
        <Text style={styles.text}>
         Waiste
        </Text>
        </View>
        <Text style={{marginTop:40}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
        <Button title={'Restart Form'} onPress={() => {this.resetForm()}}></Button>

      </ScrollView>
    </SafeAreaView>
  );
}

resetForm(){
  this.props.actions.clearForm();
  this.props.navigation.navigate('Dashboard')
}

storeAndNavigate(){
  
    var environmentalSelections = []
    if(this.state.Air===true){
        environmentalSelections.push("Air")
    }
    if(this.state.Ground===true){
        environmentalSelections.push('Ground')
    }
    if(this.state.Water===true){
        environmentalSelections.push('Water')
    }
    if(this.state.Waiste===true){
        environmentalSelections.push('Waiste')
    }
    console.log('env array on page',environmentalSelections)
    this.props.actions.addEnvironmentalConditions(
      environmentalSelections
      );
    //navigate
    this.props.navigation.navigate('Submit')
}
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: 'yellow',
      },
  container: {
    flex: 1,
    paddingTop:40,
    alignItems:'center'
    // marginTop: Constants.statusBarHeight,
  },

  scrollView: {
   // backgroundColor: 'black',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: 'black'
  },
});

const mapStateToProps = (state) => ({
    verify: state,
  });

  
  const ActionCreators = Object.assign({}, formActions);
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(environmentalIssue);