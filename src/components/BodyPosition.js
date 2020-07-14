import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';



 class BodyPosition extends React.Component {
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
         // check_props={check_props}
        //  initial={""}
        value={this.state.selectedType}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({selectedType:value})}}
        />
        </View>
           <Text style={styles.text}>
         Environmental Issue
        </Text>
        <CheckBox
         // check_props={check_props}
        //  initial={""}
        value={this.state.environmentalIssue}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({environmentalIssue:value})}}
        />
        {/* <TextInput style={styles.inputStyle}
        
        onChangeText={(submittedBy) => this.setState({submittedBy: submittedBy})}></TextInput> */}
        
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
        selections.push("Environmental Issue")
    }
    if(this.state.selectedType===true){
        selections.push('Body Position')
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(BodyPosition);