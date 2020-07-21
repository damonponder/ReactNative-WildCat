import React, {useState, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Image, Button, Alert, View } from 'react-native';
import {WOTLOGO} from '../../Images/logoIndex'


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
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

handleSubmit = () => {
    console.log('handling observation info');
    console.log(this.state)
    const options = {
      headers: {'Content-Type': 'application/json'},
    };
  
    axios
      .post(
        'http://10.0.2.2:8080/api/auth/observables',
  
        {
          submittedBy: this.props.verify.form.submittedBy,
          locationOrArea: this.state.locationOrArea,
          observationDate: this.state.observationDate,
          department: this.state.department,
          responsibleSupervisor: this.state.responsibleSupervisor
        },
        options
      )
      .then((response) => response.data)
      .then((json) => {
        console.log(json);
        this.props.actions.add(
          this.state.submittedBy,
          this.state.locationOrArea,
          this.state.department,
          this.state.responsibleSupervisor,
          this.state.date,
          json.roles,
          json.success,
        );
      })
      .then(() => {
        if (
          this.props.verify.jwt.token &&
          this.props.verify.jwt.isAuthenticated
        ) {
          this.props.navigation.navigate('Dashboard');
        }
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
        <Text style={{fontSize: 16}}>Please Verify your Final Submital of this Form</Text>
        </View>
        <View style={{alignItem:'center', marginTop:100}}>
        <Button title={'Submit Form'} onPress={createAlertButton}/>
        </View>
        </ScrollView>
    </SafeAreaView>
    <View style={{backgroundColor:'white'}}>
    <Image style={{width:270, height:200, backgroundColor:'white',marginLeft:75, marginBottom: 20}} source={WOTLOGO}/>
  </View>
  </Fragment>
  );
}

storeAndNavigate(){
  console.log('form data: ',JSON.stringify(this.props.formData.form.useofPPECategories))
    //store
    //console.log('this.prop',this.props)
   // this.props.actions.addInfo(
     //  this.state.submittedBy,
     //  this.state.locationOrArea,
         // this.state.observationDate,
         // this.state.department,
         // this.state.responsibleSupervisor
    //  );
    //navigate
   // this.props.navigation.navigate('Dashboard')
}
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        backgroundColor: 'white',
      },
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
    backgroundColor:'white'
  },

  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
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