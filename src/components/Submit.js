import React, {useState, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Image, Button, Alert, View } from 'react-native';
import {WOTLOGO} from '../../Images/logoIndex'
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';




 class Submit extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                submittedBy:null,
                locationOrArea:null,
                department:null,
                responsibleSupervisor:null,
                date: new Date()
            
    }
};

handleSubmit = () => {
    const options = {
      headers: {'Content-Type': 'application/json'},
    };

    axios
      .post(
        'http://10.0.2.2:8080/api/auth/observables',
  
        {
          submittedBy: this.props.formData.form.submittedBy ? this.props.formData.form.submittedBy : "",
          locationOrArea: this.props.formData.form.locationOrArea,
          observationDate: this.props.formData.form.date,
          department: this.props.formData.form.department,
          responsibleSupervisor: this.props.formData.form.responsibleSupervisor,
          categoryType: this.props.formData.form.categoryType,
          bodyPositionCategories: this.props.formData.form.bodyPositionCategories,
          environmentalConditions: this.props.formData.form.environmentalConditions,
          healthCategories: this.props.formData.form.healthCategories,
          toolsAndEquipmentCategories: this.props.formData.form.toolsAndEquipmentCategories,
          procedureAndStandardsCategories: this.props.formData.form.procedureAndStandardsCategories,
          qualityRelatedCategories: this.props.formData.form.qualityRelatedCategories,
          useofPPECategories: this.props.formData.form.useofPPECategories,
          workingConditionsCategories: this.props.formData.form.workingConditionsCategories
        },
        options
      )
      .then((response) => response.data)
      .then((json) => {
        console.log(json);
      })
      .then(() => {
        this.props.actions.clearForm();
          this.props.navigation.navigate('Dashboard');
      
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  render() {
      
    const {date} = this.state;
      const createAlertButton = () =>
        Alert.alert(
          "Submission Successful",
          "Thank you for your Submission",
          [
            {
              text: "Submit",
              onPress: () => console.log("Submission Pressed"),
              style: "cancel"
            }
          ],
          { cancelable: false }
        );

  return (
    <Fragment>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{alignItems:'center', fontSize:20, marginTop:50}}>
        <Text style={{fontSize: scale(16), fontWeight:'bold'}}>Please Verify your Final Submital of this Form</Text>
        </View>
        <View style={{alignItem:'center', marginTop:scale(100)}}>
        <TouchableOpacity onPress={this.handleSubmit} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>SUBMIT FORM</Text></TouchableOpacity>
        </View>
        </ScrollView>
    </SafeAreaView>
    <View style={{backgroundColor:'white'}}>
    <Image style={{width:scale(270), height:scale(200), backgroundColor:'white',marginLeft:scale(75), marginBottom: scale(20)}} source={WOTLOGO}/>
  </View>
  </Fragment>
  );
}
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: scale(20),
        width: scale(300),
        height: scale(40),
        paddingHorizontal: scale(10),
        borderRadius: scale(50),
        backgroundColor: 'white',
      },
  container: {
    flex: scale(1),
    // marginTop: Constants.statusBarHeight,
    backgroundColor:'white'
  },

  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: scale(20),
  },
  text: {
    fontSize: scale(14),
    color: 'black'
  },
});

//======== GRAB STORED DATA FROM STATE, AVAILABLE IN this.props.formData.form.xxx.....
const mapStateToProps = (state) => ({
    formData: state,
  });

  
  const ActionCreators = Object.assign({}, formActions);
  
  //======= PUT DATA IN REDUX STATE
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Submit);