import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class BodyPosition extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                AscendingDescinding:null,
                Bending:null,
                Carrying:null,
                EyesOnTask:null,
                Force:null,
                Grip:null,
                Lifting:null,
                LineOfFire:null,
                PinchPoints:null,
                Posture:null,
                PullingPushing:null,
                Repetitive:null,
                Stooping:null,
                Twisting:null,
                Suspended:null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Ascending/Descending
        </Text>
      
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.AscendingDescinding}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({AscendingDescinding:value})}}
        />
        <Text style={styles.text}>
         Bending
        </Text>
       
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Bending}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Bending:value})}}
        />
        <Text style={styles.text}>
         Carrying
         </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Carrying}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Carrying:value})}}
        />
        <Text style={styles.text}>
         Eyes on Task/Hands
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.EyesOnTask}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({EyesOnTask:value})}}
        />
        <Text style={styles.text}>
         Force
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Force}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Force:value})}}
        />
        <Text style={styles.text}>
         Grip
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Grip}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Grip:value})}}
        />
         <Text style={styles.text}>
         Lifting 
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Lifting}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Lifting:value})}}
        />
        <Text style={styles.text}>
         Line of Fire
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.LineOfFire}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({LineOfFire:value})}}
        />
        <Text style={styles.text}>
         Pinch Points
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.PinchPoints}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({PinchPoints:value})}}
        />
        <Text style={styles.text}>
         Posture
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Posture}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Posture:value})}}
        />
        <Text style={styles.text}>
         Pulling/Pushing
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.PullingPushing}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({PullingPushing:value})}}
        />
        <Text style={styles.text}>
         Repetitive Motion
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Repetitive}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Repetitive:value})}}
        />
        <Text style={styles.text}>
         Stooping
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Stooping}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Stooping:value})}}
        />
        <Text style={styles.text}>
         Twisting
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Twisting}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Twisting:value})}}
        />
        <Text style={styles.text}>
         Under Suspended Load
        </Text>
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