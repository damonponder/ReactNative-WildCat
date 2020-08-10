import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {scale} from '../../util/functions'




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
        <View style={{flex:scale(1),flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Air}
          onValueChange={(value) => {
              this.setState({Air:value})}}
        />
        <Text style={styles.text}>
         Air
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Ground}
          onValueChange={(value) => {
              this.setState({Ground:value})}}
        />
        <Text style={styles.text}>
         Ground
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Water}
          onValueChange={(value) => {
              this.setState({Water:value})}}
        />
        <Text style={styles.text}>
         Water
         </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Waiste}
          onValueChange={(value) => {
              this.setState({Waiste:value})}}
        />
        <Text style={styles.text}>
         Waiste
        </Text>
        </View>
        <View style={{alignItems:'center', marginTop:scale(60)}}>
        <Text style={{marginTop:scale(40), fontWeight:'bold', fontSize:scale(16)}}>To Proceed to the next Screen</Text>
        </View>
        <View style={{marginTop:scale(15)}}>
        <TouchableOpacity onPress={() => {this.storeAndNavigate()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>SUBMIT FORM USER INFO</Text></TouchableOpacity>
        </View>
        <View style={{marginTop:scale(60)}}>
        <TouchableOpacity onPress={() => {this.resetForm()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>RESET FORM</Text></TouchableOpacity>
        </View>
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
    this.props.actions.addEnvironmentalConditions(
      environmentalSelections
    );
    //navigate
    this.props.navigation.navigate('Submit')
}
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: scale(20),
        width: scale(300),
        height: scale(40),
        paddingHorizontal: scale(10),
        borderRadius: scale(50),
        backgroundColor: 'yellow',
      },
  container: {
    flex: scale(1),
    paddingTop:scale(40),
    alignItems:'center'
    // marginTop: Constants.statusBarHeight,
  },

  scrollView: {
   // backgroundColor: 'black',
    marginHorizontal: scale(20),
  },
  text: {
    fontSize: scale(14),
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