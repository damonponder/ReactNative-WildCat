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
        {label: 'Body Position', value:'Body Position'},
        {label: 'Environmental Issue', value:'Environmental Issue' },
        {label: 'Health', value: 'Health' },
        {label: 'Procedures and Standards', value: 'Procedures and Standards' },
        {label: 'Qaulity Related', value: 'Quality Related'  },
        {label: 'Tools and Equipment', value: 'Tools and Equipment'  },
        {label: 'Use of PPE', value: 'Use of PPE'  },
        {label: 'Working Conditions', value: 'Working Conditions'  },
        {label: 'Comment on Suggestion', value: 'Comment on Suggestion'  },
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

storeAndNavigate(){
    //store
    console.log('this.props 2',this.props)
    this.props.actions.addType(
       this.state.selectedType
      );
    //navigate
    this.props.navigation.navigate('ObservationCategory')
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