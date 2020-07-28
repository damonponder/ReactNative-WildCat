import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';

 class UseofPPE extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                Clothing:null,
                Body:null,
                Eye:null,
                Face:null,
                Fall:null,
                Foot:null,
                Hand:null,
                Head:null,
                Hearing:null,
                Respiratory:null,
                MulitpleHead:null,
                MulitpleTorso:null,
                MultipleLegsFeet:null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.scrollView}>
        <View style={{flex:1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Clothing}
          onValueChange={(value) => {
              this.setState({Clothing:value})}}
        />
        <Text style={styles.text}>
         Clothing
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Body}
          onValueChange={(value) => {
              this.setState({Body:value})}}
        />
         <Text style={styles.text}>
         Body
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Eye}
          onValueChange={(value) => {
              this.setState({Eye:value})}}
        />
        <Text style={styles.text}>
         Eye
         </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Face}
          onValueChange={(value) => {
              this.setState({Face:value})}}
        />
        <Text style={styles.text}>
         Face
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Fall}
          onValueChange={(value) => {
              this.setState({Fall:value})}}
        />
        <Text style={styles.text}>
         Fall
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Foot}
          onValueChange={(value) => {
              this.setState({Foot:value})}}
        />
         <Text style={styles.text}>
         Foot
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Hand}
          onValueChange={(value) => {
              this.setState({Hand:value})}}
        />
         <Text style={styles.text}>
         Hand
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.Head}
          onValueChange={(value) => {
              this.setState({Head:value})}}
        />
         <Text style={styles.text}>
         Head
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.Hearing}
          onValueChange={(value) => {
              this.setState({Hearing:value})}}
        />
         <Text style={styles.text}>
         Hearing
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.Respiratory}
          onValueChange={(value) => {
              this.setState({Respiratory:value})}}
        />
         <Text style={styles.text}>
         Respiratory
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.MulitpleHead}
          onValueChange={(value) => {
              this.setState({MulitpleHead:value})}}
        />
         <Text style={styles.text}>
         Mulitple - Head
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.MulitpleTorso}
          onValueChange={(value) => {
              this.setState({MulitpleTorso:value})}}

        />
         <Text style={styles.text}>
         Multiple - Torso
        </Text>
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
        <CheckBox
        value={this.state.MultipleLegsFeet}
          onValueChange={(value) => {
              this.setState({MultipleLegsFeet:value})}}
        />
         <Text style={styles.text}>
         Multiple - Legs/Feet
        </Text>
        </View>
        </View>

        <Text style={{marginTop:40}}>To Proceed to the next Screen</Text>
        <Button title={'Submit Form User Info'} onPress={() => {this.storeAndNavigate()}}></Button>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    //store
   // if(this.state.selectedType===''){
   //    Alert.alert('Missing Field','Please fill in all fields');
   // }else{

    //}
    var useofPPESelections = []
    if(this.state.Clothing===true){
        useofPPESelections.push("Clothing")
    }
    if(this.state.Body===true){
        useofPPESelections.push('Body')
    }
    if(this.state.Eye===true){
        useofPPESelections.push('Eye')
    }
    if(this.state.Face===true){
        useofPPESelections.push('Face')
    }
    if(this.state.Fall===true){
        useofPPESelections.push('Fall')
    }
    if(this.state.Foot===true){
        useofPPESelections.push('Foot')
    }
    if(this.state.Hand===true){
        useofPPESelections.push('Hand')
    }
    if(this.state.Head===true){
        useofPPESelections.push('Head')
    }
    if(this.state.Hearing===true){
        useofPPESelections.push('Hearing')
    }
    if(this.state.Respiratory===true){
        useofPPESelections.push('Respiratory')
    }
    if(this.state.MulitpleHead===true){
      useofPPESelections.push('Multiple-Head')
  }
  if(this.state.MulitpleTorso===true){
    useofPPESelections.push('Multiple-Torse')
}
if(this.state.MultipleLegsFeet===true){
  useofPPESelections.push('Multiple-Legs/Feet')
}
    this.props.actions.addUseofPPECategories(
      useofPPESelections
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(UseofPPE);