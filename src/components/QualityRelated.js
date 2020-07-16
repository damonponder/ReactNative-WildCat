import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class QualityRelatedCategories extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                CustomerSat:null,
                Design:null,
                Drafting:null,
                Engineering:null,
                EquipOperation:null,
                FieldCommision:null,
                Manufacturing:null,
                OnTimeDelivery:null,
                ProcessandSystem:null,
                Sales:null,
                Specifications:null,
                Supplier:null,
                Vender:null,
                TestRun:null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Customer Satisfaction
        </Text>
        <CheckBox
        value={this.state.CustomerSat}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({CustomerSat:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Design
        </Text>
        <CheckBox
        value={this.state.Design}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Design:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <Text style={styles.text}>
         Drafting
         </Text>
        <CheckBox
        value={this.state.Drafting}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Drafting:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Engineering
        </Text>
        <CheckBox
        value={this.state.Engineering}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Engineering:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Equipment Operation
        </Text>
        <CheckBox
        value={this.state.EquipOperation}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({EquipOperation:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Field Commission
        </Text>
        <CheckBox
        value={this.state.FieldCommision}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({FieldCommision:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Manufacturing
        </Text>
        <CheckBox
        value={this.state.Manufacturing}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Manufacturing:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         On Time Delivery
        </Text>
        <CheckBox
        value={this.state.OnTimeDelivery}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({OnTimeDelivery:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Process and System
        </Text>
        <CheckBox
        value={this.state.ProcessandSystem}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({ProcessandSystem:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Sales
        </Text>
        <CheckBox
        value={this.state.Sales}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Sales:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Specifications
        </Text>
        <CheckBox
        value={this.state.Specifications}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Specifications:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Supplier
        </Text>
        <CheckBox
        value={this.state.Supplier}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Supplier:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Vender
        </Text>
        <CheckBox
        value={this.state.Vender}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({Vender:value})}}
        />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           <Text style={styles.text}>
         Test Run
        </Text>
        <CheckBox
        value={this.state.TestRun}
          onValueChange={(value) => {
              console.log('value: ', value)
              this.setState({TestRun:value})}}
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
    var qualityRelatedSelections = []
    if(this.state.CustomerSat===true){
        qualityRelatedSelections.push('Customer Satisfaction')
    }
    if(this.state.Design===true){
        qualityRelatedSelections.push('Design')
    }
    if(this.state.Drafting===true){
        qualityRelatedSelections.push('Drafting')
    }
    if(this.state.Engineering===true){
        qualityRelatedSelections.push('Engineering')
    }
    if(this.state.EquipOperation===true){
        qualityRelatedSelections.push('Equipment Operation')
    }
    if(this.state.FieldCommision===true){
        qualityRelatedSelections.push('Field Commission')
    }
    if(this.state.Manufacturing===true){
        qualityRelatedSelections.push('Manufacturing')
    }
    if(this.state.OnTimeDelivery===true){
        qualityRelatedSelections.push('On Time Delivery')
    }
    if(this.state.ProcessandSystem===true){
        qualityRelatedSelections.push('Process and System')
    }
    if(this.state.Sales===true){
        qualityRelatedSelections.push('Sales')
    }
    if(this.state.Specifications===true){
        qualityRelatedSelections.push('Specifications')
    }
    if(this.state.Supplier===true){
        qualityRelatedSelections.push('Supplier')
    }
    if(this.state.Vender===true){
        qualityRelatedSelections.push('Vender')
    }
    if(this.state.TestRun===true){
        qualityRelatedSelections.push('Test Run')
    }
    this.props.actions.addQualityRelatedCategories(
      qualityRelatedSelections
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(QualityRelatedCategories);