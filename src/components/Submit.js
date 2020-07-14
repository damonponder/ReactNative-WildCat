import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Button } from 'react-native';
// import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker'



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

handleObservableInfo = () => {
    console.log('handling observation info');
    console.log(this.state)
    const options = {
      headers: {'Content-Type': 'application/json'},
    };
  
    axios
      .post(
        'http://10.0.2.2:8080/api/auth/observables',
  
        {
          submittedBy: this.state.submittedBy,
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
          this.props.navigation.navigate('ObservationType');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  render() {
      
    const {date} = this.state;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
         Form Submital
        </Text>
        <TextInput style={styles.inputStyle}
        onChangeText={(submittedBy) => this.setState({submittedBy: submittedBy})}></TextInput>
        <Text>To Proceed to the next Screen</Text>
        <Button title={'Submit Form'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    //store
    console.log('this.prop',this.props)
    this.props.actions.addInfo(
       this.state.submittedBy,
       this.state.locationOrArea,
          this.state.observationDate,
          this.state.department,
          this.state.responsibleSupervisor
      );
    //navigate
    this.props.navigation.navigate('Dashboard')
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
    // marginTop: Constants.statusBarHeight,
  },

  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 14,
    color: 'yellow'
  },
});

const mapStateToProps = (state) => ({
    verify: state,
  });

  
  const ActionCreators = Object.assign({}, formActions);
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Submit);