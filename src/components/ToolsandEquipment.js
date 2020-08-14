import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale} from '../../util/functions'
 


class ToolandEquipment extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                Condition:null,
                Selection:null,
                Use:null
                
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Condition}
          onValueChange={(value) => {
              this.setState({Condition:value})}}
        />
        <Text style={styles.text}>
         Condition
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Selection}
          onValueChange={(value) => {
              this.setState({Selection:value})}}
        />
         <Text style={styles.text}>
         Selection
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
       
        <CheckBox
        value={this.state.Use}
          onValueChange={(value) => {
              this.setState({Use:value})}}
        />
         <Text style={styles.text}>
         Use
         </Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{marginTop:scale(40), fontWeight:'bold', fontSize:scale(16)}}>To Proceed to the next Screen</Text>
        </View>
        <View style={{marginTop:scale(15), alignItems:'center'}}>
        <TouchableOpacity onPress={() => {this.storeAndNavigate()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(241),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>SUBMIT FORM USER INFO</Text></TouchableOpacity>
        </View>
        <View style={{marginTop:scale(60), alignItems:'center'}}>
        <TouchableOpacity onPress={() => {this.resetForm()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(135),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>RESET FORM</Text></TouchableOpacity>
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
  
    var toolsandEquipmentSelections = []
    if(this.state.Condition===true){
        toolsandEquipmentSelections.push("Condition")
    }
    if(this.state.Selection===true){
        toolsandEquipmentSelections.push('Selection')
    }
    if(this.state.Use===true){
        toolsandEquipmentSelections.push('Use')
    }
    this.props.actions.addToolsAndEquipmentCategories(
      toolsandEquipmentSelections
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ToolandEquipment);