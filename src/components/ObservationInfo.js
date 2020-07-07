import React from 'react';

import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView } from 'react-native';
// import Constants from 'expo-constants';

export default class Dashboard extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                submittedBy:null
            
    }
}
  
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

