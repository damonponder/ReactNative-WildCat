import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class BodyPosition extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                BodyPositionCat:null,
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
        <CheckBox
        value={this.state.BodyPositionCat}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({BodyPositionCat:value})}}
        />
        <Text style={styles.text}>
         Body Position
        </Text>
      
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
           <Text style={styles.text}>
         Environmental Issue
        </Text>
       
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Health
         </Text>
        <CheckBox
        value={this.state.Health}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Health:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Procedures and Standards
        </Text>
        <CheckBox
        value={this.state.ProceduresandStandards}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({ProceduresandStandards:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Quality Related
        </Text>
        <CheckBox
        value={this.state.QualityRelated}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({QualityRelated:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Tools and Equipment
        </Text>
        <CheckBox
        value={this.state.ToolsandEquipment}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({ToolsandEquipment:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Use of PPE 
        </Text>
        <CheckBox
        value={this.state.UseofPPE}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({UseofPPE:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Working Conditions
        </Text>
        <CheckBox
        value={this.state.WorkingConditions}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({WorkingConditions:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Comment Suggestions 
        </Text>
        <CheckBox
        value={this.state.CommentonSuggestion}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({CommentonSuggestion:value})}}
        />
        </View>
        <Text style={{marginTop:40}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    console.log('this.props 2',this.props)
    var bodySelections = []
    if(this.state.BodyPositionCat===true){
        bodySelections.push("Body Position")
    }
    if(this.state.EnvironmentalIssue===true){
        bodySelections.push('Environmental Issue')
    }
    if(this.state.Health===true){
        bodySelections.push('Health')
    }
    if(this.state.ProceduresandStandards===true){
        bodySelections.push('ProceduresandStandards')
    }
    if(this.state.QualityRelated===true){
        bodySelections.push('QualityRelated')
    }
    if(this.state.ToolsandEquipment===true){
        bodySelections.push('ToolsandEquipment')
    }
    if(this.state.UseofPPE===true){
        bodySelections.push('UseofPPE')
    }
    if(this.state.WorkingConditions===true){
        bodySelections.push('WorkingConditions')
    }
    if(this.state.CommentonSuggestion===true){
        bodySelections.push('CommentonSuggestions')
    }
    this.props.actions.addBodyPositions(
      bodySelections
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
    marginTop:5,
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(BodyPosition);