import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Button, Alert } from 'react-native';
// import Constants from 'expo-constants';
import DatePicker from 'react-native-datepicker'



 class ObservationInfo extends React.Component {
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

// handleObservableInfo = () => {
//     console.log('handling observation info');
//     console.log(this.state)
//     const options = {
//       headers: {'Content-Type': 'application/json'},
//     };
  
//     axios
//       .post(
//         'http://10.0.2.2:8080/api/auth/observables',
  
//         {
//           submittedBy: this.state.submittedBy,
//           locationOrArea: this.state.locationOrArea,
//           observationDate: this.state.observationDate,
//           department: this.state.department,
//           responsibleSupervisor: this.state.responsibleSupervisor
//         },
//         options
//       )
//       .then((response) => response.data)
//       .then((json) => {
//         console.log(json);
//         this.props.actions.add(
//           this.state.submittedBy,
//           this.state.locationOrArea,
//           this.state.department,
//           this.state.responsibleSupervisor,
//           this.state.date,
//           json.roles,
//           json.success,
//         );
//       })
//       .then(() => {
//         if (
        
//             this.props.actions.submittedBy&&
//             this.props.actions.locationOrArea&&
//             this.props.actions.department&&
//             this.props.actions.responsibleSupervisor&&
//             this.props.actions.date
          
//         ) {
//           this.props.navigation.navigate('ObservationType');
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
  
  
  render() {
      
    const {date} = this.state;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
         Submitted By
        </Text>
        <TextInput style={styles.inputStyle}
        
        onChangeText={(submittedBy) => this.setState({submittedBy: submittedBy})}></TextInput>
         <Text style={styles.text}>
         Location or Area
        </Text>
        <TextInput style={styles.inputStyle}
        
        onChangeText={(locationOrArea) => this.setState({locationOrArea: locationOrArea})}></TextInput>
        
        <Text style={styles.text}>Observation Date</Text>

      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onChange={ (date) => {
            return this.setState({ date: date });
        } } 

        />        
        <Text style={styles.text}>
         Department
        </Text>
        <TextInput style={styles.inputStyle}
        
        onChangeText={(department) => this.setState({department: department})}></TextInput>
        <Text style={styles.text}>
         Responsible Supervisor
        </Text>
        <TextInput style={styles.inputStyle}
        
        onChangeText={(responsibleSupervisor) => this.setState({responsibleSupervisor: responsibleSupervisor})}></TextInput>
        <Text>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    if(  this.state.submittedBy === null ||
        this.state.locationOrArea === null ||
           this.state.department === null ||
           this.state.responsibleSupervisor === null ||
           this.state.date === null ){
            Alert.alert("Missing Fields","Please fill in all fields.")
           }else{
            this.props.actions.addInfo(
                this.state.submittedBy,
                this.state.locationOrArea,
                this.state.date,
                   this.state.department,
                   this.state.responsibleSupervisor,
                  
               );
             
             this.props.navigation.navigate('ObservationType')
           }
   
    
}
}

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: 20,
        width: 300,
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 50,
        borderWidth: 1,
        backgroundColor: 'white',
      },
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
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

const mapStateToProps = (state) => ({
    verify: state,
  });

  
  const ActionCreators = Object.assign({}, formActions);
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ObservationInfo);