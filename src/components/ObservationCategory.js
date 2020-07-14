import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Button } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



 class ObservationCategory extends React.Component {
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
    var radio_props = [
        {label: 'BodyPosition', value:'BodyPosition'},
        {label: 'EnvironmentalIssue', value:'EnvironmentalIssue' },
        {label: 'Health', value: 'Health' },
        {label: 'ProceduresandStandards', value: 'ProceduresandStandards' },
        {label: 'QaulityRelated', value: 'QualityRelated'  },
        {label: 'ToolsandEquipment', value: 'ToolsandEquipment'  },
        {label: 'UseofPPE', value: 'UseofPPE'  },
        {label: 'WorkingConditions', value: 'WorkingConditions'  },
        {label: 'CommentoSuggestion', value: 'CommentonSuggestion'  },
        {label: 'Other', value: 'Other'}
      ];

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
         Observation Category
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={""}
          onPress={(value) => {this.setState({selectedType:value})}}
        />
        {/* <TextInput style={styles.inputStyle}
        
        onChangeText={(submittedBy) => this.setState({submittedBy: submittedBy})}></TextInput> */}
        
        <Text style={{marginTop:40}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(index){
    //store
    this.props.actions.addType(
       this.state.selectedType
    );
    //navigate to page chosen
    this.props.navigation.navigate(this.state.selectedType)
    
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ObservationCategory);