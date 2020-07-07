import React from 'react';

import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Button } from 'react-native';
// import Constants from 'expo-constants';

export default class ObservatonCategory extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                submittedBy:null,
                locationOrArea:null,
                observationDate:null,
                department:null,
                responsibleSupervisor:null
            
    }
};

handleSignUp = () => {
    console.log('handling registration');
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
          this.state.observationDate,
          this.state.department,
          this.state.responsibleSupervisor,
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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
         Submitted By
        </Text>
        <TextInput style={styles.inputStyle}
        
        onChangeText={(submittedBy) => this.setState({submittedBy: submittedBy})}></TextInput>
        <Button title={'Next'} onPress={() => {this.storeAndNavigate}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    //store
    this.props.actions.add(
        submittedBy=this.state.submittedBy
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
    fontSize: 42,
  },
});