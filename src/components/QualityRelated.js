import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale} from '../../util/functions'
 



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
       
        <CheckBox
        value={this.state.CustomerSat}
          onValueChange={(value) => {
              this.setState({CustomerSat:value})}}
        />
         <Text style={styles.text}>
         Customer Satisfaction
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Design}
          onValueChange={(value) => {
              this.setState({Design:value})}}
        />
         <Text style={styles.text}>
         Design
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Drafting}
          onValueChange={(value) => {
              this.setState({Drafting:value})}}
        />
        <Text style={styles.text}>
         Drafting
         </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Engineering}
          onValueChange={(value) => {
              this.setState({Engineering:value})}}
        />
        <Text style={styles.text}>
         Engineering
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.EquipOperation}
          onValueChange={(value) => {
              this.setState({EquipOperation:value})}}
        />
        <Text style={styles.text}>
         Equipment Operation
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.FieldCommision}
          onValueChange={(value) => {
              this.setState({FieldCommision:value})}}
        />
        <Text style={styles.text}>
         Field Commission
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Manufacturing}
          onValueChange={(value) => {
              this.setState({Manufacturing:value})}}
        />
        <Text style={styles.text}>
         Manufacturing
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.OnTimeDelivery}
          onValueChange={(value) => {
              this.setState({OnTimeDelivery:value})}}
        />
        <Text style={styles.text}>
         On Time Delivery
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>

        <CheckBox
        value={this.state.ProcessandSystem}
          onValueChange={(value) => {
              this.setState({ProcessandSystem:value})}}
        />
        <Text style={styles.text}>
         Process and System
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Sales}
          onValueChange={(value) => {
              this.setState({Sales:value})}}
        />
         <Text style={styles.text}>
         Sales
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Specifications}
          onValueChange={(value) => {
              this.setState({Specifications:value})}}
        />
         <Text style={styles.text}>
         Specifications
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Supplier}
          onValueChange={(value) => {
              this.setState({Supplier:value})}}
        />
         <Text style={styles.text}>
         Supplier
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Vender}
          onValueChange={(value) => {
              this.setState({Vender:value})}}
        />
         <Text style={styles.text}>
         Vender
        </Text>
        </View>
        <View style={{flex: 1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.TestRun}
          onValueChange={(value) => {
              this.setState({TestRun:value})}}
        />
        <Text style={styles.text}>
         Test Run
        </Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{marginTop:scale(40), fontWeight:'bold', fontSize:scale(16)}}>To Proceed to the next Screen</Text>
        </View>
        <View style={{marginTop:scale(15), alignItems:'center'}}>
        <TouchableOpacity onPress={() => {this.storeAndNavigate()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(241),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>SUBMIT FORM USER INFO</Text></TouchableOpacity>
        </View>
        <View style={{marginTop:scale(60), alignItems:'center'}}>
        <TouchableOpacity onPress={() => {this.resetForm()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(135),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>RESET FORM</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

resetForm(){
  this.props.actions.clearForm();
  this.props.navigation.navigate('Dashboard')
}

storeAndNavigate(){
    
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
    this.props.navigation.navigate('Submit')
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
  },

  scrollView: {
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(QualityRelatedCategories);