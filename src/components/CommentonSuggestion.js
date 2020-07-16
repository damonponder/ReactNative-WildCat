import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class CommentonSuggestion extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                BodyPosition:null,
                EnvironmentalIssue:null,
                Health:null,
                ProceduresandStandards:null,
                QualityRelated:null,
                ToolsandEquipment:null,
                UseofPPE:null,
                WorkingConditions:null,
                CommentonSuggestion:null,
                Other:null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Body Position
        </Text>
        <CheckBox
        value={this.state.selectedType}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({selectedType:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Environmental Issue
        </Text>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Health
         </Text>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Procedures and Standards
        </Text>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Quality Related
        </Text>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Tools and Equipment
        </Text>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Use of PPE 
        </Text>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Working Conditions
        </Text>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Comment Suggestions 
        </Text>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        </View>
        <Text style={{marginTop:40}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    //store
   // if(this.state.selectedType===''){
   //    Alert.alert('Missing Field','Please fill in all fields');
   // }else{

    //}
    console.log('this.props 2',this.props)
    var selections = []
    if(this.state.environmentalIssue===true){
        selections.push("Body Position")
    }
    if(this.state.selectedType===true){
        selections.push('Environmental Issue')
    }
    if(this.state.selectedType===true){
        selections.push('Health')
    }
    if(this.state.selectedType===true){
        selections.push('ProceduresandStandards')
    }
    if(this.state.selectedType===true){
        selections.push('QualityRelated')
    }
    if(this.state.selectedType===true){
        selections.push('ToolsandEquipment')
    }
    if(this.state.selectedType===true){
        selections.push('UseofPPE')
    }
    if(this.state.selectedType===true){
        selections.push('WorkingConditions')
    }
    if(this.state.selectedType===true){
        selections.push('CommentonSuggestions')
    }
    this.props.actions.addBodyPositions(
      selections
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(CommentonSuggestion);