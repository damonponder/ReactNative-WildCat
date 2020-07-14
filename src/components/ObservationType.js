import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Button } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';



 class ObservationType extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                ImprovementSuggestion:null,
                AcceptableBehvior:null,
                AcceptableCondition:null,
                UnacceptableBehavior:null,
                UnacceptableCondition:null,
                selectedType:null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};
  
  render() {
    var radio_props = [
        {label: 'Improvement Suggestion', value:'Improvement Suggestion'},
        {label: 'Acceptable Behavior', value:'Acceptable Behavior' },
        {label: 'Acceptable Condition', value: 'Acceptable Condition' },
        {label: 'Unacceptable Behavior', value: 'Unacceptable Behavior' },
        {label: 'Unacceptable Condition', value: 'Unacceptable Condition'  }

      ];

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
         Observation Type
        </Text>
        <RadioForm
          radio_props={radio_props}
          initial={""}
          onPress={(value) => {this.setState({selectedType:value})}}
        />
        <TextInput
        style={{ height: 100 , borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(submittedBy) => this.setState({submittedBy: submittedBy})}
        />
        
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
        height: 100,
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ObservationType);