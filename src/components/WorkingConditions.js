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
                AnimalsandInsects:null,
                ElectricalHazard:null,
                ElevatedHeights:null,
                Housekeeping:null,
                LightingandVisibility:null,
                WalkingSurfaces:null,
                HazardousAtmosphere:null,
                WorkingSurfaces:null,
                Weather:null
                
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.BuildingandStructure}
          onValueChange={(value) => {
              this.setState({BuildingandStructure:value})}}
        />
        <Text style={styles.text}>
         Building/Structures
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.AnimalsandInsects}
          onValueChange={(value) => {
              this.setState({AnimalsandInsects:value})}}
        />
        <Text style={styles.text}>
         Animals/Insects
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.ElectricalHazard}
          onValueChange={(value) => {
              this.setState({ElectricalHazard:value})}}
        />
        <Text style={styles.text}>
         Electrical Hazard
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.ElevatedHeights}
          onValueChange={(value) => {
              this.setState({ElevatedHeights:value})}}
        />
        <Text style={styles.text}>
         Elevated Heights
         </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Housekeeping}
          onValueChange={(value) => {
              this.setState({Housekeeping:value})}}
        />
         <Text style={styles.text}>
         Housekeeping
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.LightingandVisibility}
          onValueChange={(value) => {
              this.setState({LightingandVisibility:value})}}
        />
         <Text style={styles.text}>
         Lighting/Visibility
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.WalkingSurfaces}
          onValueChange={(value) => {
              this.setState({WalkingSurfaces:value})}}
        />
        <Text style={styles.text}>
         Walking Surfaces
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.HazardousAtmosphere}
          onValueChange={(value) => {
              this.setState({HazardousAtmosphere:value})}}
        />
         <Text style={styles.text}>
         Hazardous Atmosphere
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.WorkingSurfaces}
          onValueChange={(value) => {
              this.setState({WorkingSurfaces:value})}}
        />
         <Text style={styles.text}>
         Working Surfaces
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.Weather}
          onValueChange={(value) => {
              this.setState({Weather:value})}}
        />
         <Text style={styles.text}>
         Weather
        </Text>
        </View>
        <Text style={{marginTop:40}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    
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
    if(this.state.Weather===true){
      workingConditionselections.push('Weather')
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