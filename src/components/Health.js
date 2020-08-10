import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {scale} from '../../util/functions'



 class Health extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                ColdTemps:null,
                HotTemps:null,
                Ingestion:null,
                Inhalation:null,
                Noise:null,
                Radiation:null,
                SkinContact:null,
                Illness:null
                
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.ColdTemps}
          onValueChange={(value) => {
              this.setState({ColdTemps:value})}}
        />
        <Text style={styles.text}>
         Cold Temps
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.HotTemps}
          onValueChange={(value) => {
              this.setState({HotTemps:value})}}
        />
        <Text style={styles.text}>
         Hot Temps
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Ingestion}
          onValueChange={(value) => {
              this.setState({Ingestion:value})}}
        />
         <Text style={styles.text}>
         Fatigue
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Ingestion}
          onValueChange={(value) => {
              this.setState({Ingestion:value})}}
        />
        <Text style={styles.text}>
         Ingestion
         </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Inhalation}
          onValueChange={(value) => {
              this.setState({Inhalation:value})}}
        />
        <Text style={styles.text}>
         Inhalation
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Noise}
          onValueChange={(value) => {
              this.setState({Noise:value})}}
        />
        <Text style={styles.text}>
         Noise
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Radiation}
          onValueChange={(value) => {
              this.setState({Radiation:value})}}
        />
        <Text style={styles.text}>
         Radiation
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.SkinContact}
          onValueChange={(value) => {
              this.setState({SkinContact:value})}}
        />
        <Text style={styles.text}>
        Skin Contact
        </Text>
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{marginTop:scale(40), fontWeight:'bold', fontSize:scale(16)}}>To Proceed to the next Screen</Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Illness}
          onValueChange={(value) => {
              this.setState({Illness:value})}}
        />
        <Text style={styles.text}>
         Illness
        </Text>
        </View>
        <View style={{marginTop:scale(15)}}>
        <TouchableOpacity onPress={() => {this.storeAndNavigate()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>SUBMIT FORM USER INFO</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
   
    var healthSelections = []
    if(this.state.ColdTemps===true){
        healthSelections.push("Cold Temps")
    }
    if(this.state.HotTemps===true){
        healthSelections.push('Hot Temps')
    }
    if(this.state.Ingestion===true){
        healthSelections.push('Ingestion')
    }
    if(this.state.Inhalation===true){
        healthSelections.push('Inhalation')
    }
    if(this.state.Noise===true){
        healthSelections.push('Noise')
    }
    if(this.state.Radiation===true){
        healthSelections.push('Radiation')
    }
    if(this.state.SkinContact===true){
        healthSelections.push('Skin Contact')
    }
    if(this.state.Illness===true) {
      healthSelections.push('Illness')
    }
    
    this.props.actions.addHealthCategories(
      healthSelections
      );
    //navigate
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
    // marginTop: Constants.statusBarHeight,
  },

  scrollView: {
   // backgroundColor: 'black',
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Health);