import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class WorkingConditions extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                BuildingandStructure:null,
                ElectricalHazard:null,
                ElevatedHeights:null,
                Housekeeping:null,
                Lighting:null,
                WalkingSurfaces:null,
                WorkingSurfaces:null
                
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Building/Structures
        </Text>
        <CheckBox
        value={this.state.BuildingandStructure}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({BuildingandStructure:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Electrical Hazard
        </Text>
        <CheckBox
        value={this.state.ElectricalHazard}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({ElectricalHazard:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Elevated Heights
         </Text>
        <CheckBox
        value={this.state.ElevatedHeights}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({ElevatedHeights:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Housekeeping
        </Text>
        <CheckBox
        value={this.state.Housekeeping}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Housekeeping:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Lighting
        </Text>
        <CheckBox
        value={this.state.Lighting}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Lighting:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Walking Surfaces
        </Text>
        <CheckBox
        value={this.state.WalkingSurfaces}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({WalkingSurfaces:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Working Surfaces
        </Text>
        <CheckBox
        value={this.state.WorkingSurfaces}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({WorkingSurfaces:value})}}
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
    var workingConditionselections = []
    if(this.state.BuildingandStructure===true){
        workingConditionselections.push("Building and Structure")
    }
    if(this.state.ElectricalHazard===true){
        workingConditionselections.push('Electrical Hazard')
    }
    if(this.state.ElevatedHeights===true){
        workingConditionselections.push('Elevated Heights')
    }
    if(this.state.Housekeeping===true){
        workingConditionselections.push('HouseKeeping')
    }
    if(this.state.Lighting===true){
        workingConditionselections.push('Lighting')
    }
    if(this.state.WalkingSurfaces===true){
        workingConditionselections.push('Walking Surfaces')
    }
    if(this.state.WorkingSurfaces===true){
        workingConditionselections.push('Working Surfaces')
    }
    
    this.props.actions.addWorkingConditionsCategories(
      workingConditionselections
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(WorkingConditions);