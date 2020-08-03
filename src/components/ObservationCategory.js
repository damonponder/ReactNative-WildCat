import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Alert, Button, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { TouchableOpacity } from 'react-native-gesture-handler';



 class ObservationCategory extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                selectedType: null,
                description: null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};
  
  render() {
    var radio_props = [
        {label: 'Body Position', value:'BodyPosition'},
        {label: 'Environmental Issue', value:'EnvironmentalIssue' },
        {label: 'Health', value: 'Health' },
        {label: 'Procedures and Standards', value: 'ProceduresandStandards' },
        {label: 'Qaulity Related', value: 'QualityRelated'  },
        {label: 'Tools and Equipment', value: 'ToolsandEquipment'  },
        {label: 'Use of PPE', value: 'UseofPPE'  },
        {label: 'Working Conditions', value: 'WorkingConditions'  },
        {label: 'Comment of Suggestion', value: 'CommentofSuggestion'  },
        {label: 'Other', value: 'Other'}
      ];

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View >
        <Text style={{fontWeight:'bold', fontSize:scale(16), color:'black'}}>
         Observation Category:
        </Text>
        </View>
        <View style={{marginTop:scale(25)}}>
        <RadioForm
          radio_props={radio_props}
          initial={""}
          onPress={(value) => {this.setState({selectedType:value})}}
        />
        </View>
        <View style={{marginTop:scale(20)}}>
         <TextInput
        style={{ height: scale(100) , borderColor: 'gray', borderWidth: scale(1) }}
        onChangeText={(description) => this.setState({description:description})}
        />
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{marginTop:scale(25), fontSize:scale(16),fontWeight:'bold'}}>To Proceed to the next Screen</Text>
        </View>
        <TouchableOpacity onPress={() => {this.storeAndNavigate()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Submit Form User Info</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(index){
  if(  this.state.selectedType === null || this.state.description === null ){
    Alert.alert("Missing Fields","Please fill in all fields.")
   }else{
    this.props.actions.addCategoryType(
       this.state.selectedType,
       this.state.description
    );
    //navigate to page chosen
    this.props.navigation.navigate(this.state.selectedType)
    
}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ObservationCategory);