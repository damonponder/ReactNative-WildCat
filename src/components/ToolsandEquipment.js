import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class ToolandEquipment extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                Condition:null,
                Selection:null,
                Use:null
                
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Condition
        </Text>
        <CheckBox
        value={this.state.Condition}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Condition:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Selection
        </Text>
        <CheckBox
        value={this.state.Selection}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Selection:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Use
         </Text>
        <CheckBox
        value={this.state.Use}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Use:value})}}
        />
        </View>
        <Text style={{marginTop:40}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
  
    console.log('this.props 2',this.props)
    var toolsandEquipmentSelections = []
    if(this.state.Condition===true){
        toolsandEquipmentSelections.push("Condition")
    }
    if(this.state.Selection===true){
        toolsandEquipmentSelections.push('Selection')
    }
    if(this.state.Use===true){
        toolsandEquipmentSelections.push('Use')
    }
    this.props.actions.addToolsAndEquipmentCategories(
      toolsandEquipmentSelections
      );
    //navigate
    this.props.navigation.navigate('Submit')
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ToolandEquipment);