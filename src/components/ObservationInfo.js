import React, {useState} from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text,View, TextInput, SafeAreaView, ScrollView,FlatList, Button, Alert } from 'react-native';
import DatePicker from 'react-native-datepicker'
import DropDownPicker from 'react-native-dropdown-picker';



 class ObservationInfo extends React.Component {
    constructor(props){
        super(props) 

            this.state = {
                submittedBy:null,
                locationOrArea:null,
                department:null,
                responsibleSupervisor:null,
                date: "January 20th 2020"//new Date()
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};




  render() {
      
    const {date} = this.state;

    return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
         Submitted By
        </Text>
        <TextInput style={styles.inputStyle}
        
        onChangeText={(submittedBy) => this.setState({submittedBy: submittedBy})}></TextInput>
        
         
 
         <Text style={styles.text}>
         Locations:
        </Text>
  
 <DropDownPicker
     items={[
         
         {label: 'Corporate', value: 'Corporate' },
         {label: 'Sales', value: 'Sales' },
         {label: 'Carlsbad', value: 'Carlsbad' },
         {label: 'Odessa', value: 'Odessa' },
         {label: 'Odessa Pipe Yard', value: 'Odessa Pipe Yard' },
         {label: 'Midland', value: 'Midland' },
         {label: 'Pleasanton', value: 'Pleasanton' },
         {label: 'Kiowa', value: 'Kiowa' },
         {label: 'Oklahoma City', value: 'Oklahoma City' },
         {label: 'Waynesburg', value: 'Waynesburg' },
         {label: '3rd Party Location', value: '3rd Party Location' }
     ]}
     defaultValue={"Corporate"}
     containerStyle={{width: 250, height: 40}}
     style={{backgroundColor: '#fafafa'}}
     itemStyle={{
         justifyContent: 'flex-start'
     }}
     dropDownStyle={{backgroundColor: '#fafafa'}}
     onChangeItem={item => this.setState({
         locationOrArea: item.value
     })}
 />
        <Text style={styles.text}>Observation Date</Text>

      <DatePicker
        style={{width: 200}}
        date={new Date()}
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
          //var dateString = date.toString()
          this.setState({ date: "January 20th 2020"});
        } } 

        /> 
          <Text style={styles.text}>
          Departments:
          </Text>       
         <DropDownPicker
            items={[
                {label: 'Shop', value: 'Shop'},
                {label: 'Fishing and Rental', value: 'Fishing and Rental' },
                {label: 'Wireline', value: 'Wireline' },
                {label: 'Thru Tubing', value: 'Thru Tubing' },
                {label: 'Admin', value: 'Admin' },
                {label: 'Pipe & Inspection', value: 'Pipe and Inspection' },
                {label: 'Sales', value: 'Sales' }
            ]}
     defaultValue={"Shop"}
     containerStyle={{width: 250, height: 40}}
     style={{backgroundColor: '#fafafa'}}
     itemStyle={{
         justifyContent: 'flex-start'
     }}
     dropDownStyle={{backgroundColor: '#fafafa'}}
     onChangeItem={item => this.setState({
         department: item.value
     })}
 />
        <Text style={styles.text}>
         Responsible Supervisor
        </Text>
        <TextInput style={styles.inputStyle}
        
        onChangeText={(responsibleSupervisor) => this.setState({responsibleSupervisor: responsibleSupervisor})}></TextInput>
        <View style={styles.submitButton}>
        <Text style={{fontSize: 16, textAlign: 'center'}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
        </View>
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
  submitButton: {
   // position: 'absolute',
   marginTop:20,
    alignItems: 'center',
   // marginLeft: 100,
   // bottom:100,
  }
});

const mapStateToProps = (state) => ({
    verify: state,
  });

  
  const ActionCreators = Object.assign({}, formActions);
  
  const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(ActionCreators, dispatch),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(ObservationInfo);