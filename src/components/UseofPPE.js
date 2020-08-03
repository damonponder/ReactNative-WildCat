import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
        <View style={{flex:scale(1),flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Clothing}
          onValueChange={(value) => {
              this.setState({Clothing:value})}}
        />
        <Text style={styles.text}>
         Clothing
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Body}
          onValueChange={(value) => {
              this.setState({Body:value})}}
        />
         <Text style={styles.text}>
         Body
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        
        <CheckBox
        value={this.state.Eye}
          onValueChange={(value) => {
              this.setState({Eye:value})}}
        />
        <Text style={styles.text}>
         Eye
         </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Face}
          onValueChange={(value) => {
              this.setState({Face:value})}}
        />
        <Text style={styles.text}>
         Face
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Fall}
          onValueChange={(value) => {
              this.setState({Fall:value})}}
        />
        <Text style={styles.text}>
         Fall
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Foot}
          onValueChange={(value) => {
              this.setState({Foot:value})}}
        />
         <Text style={styles.text}>
         Foot
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Hand}
          onValueChange={(value) => {
              this.setState({Hand:value})}}
        />
         <Text style={styles.text}>
         Hand
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        <CheckBox
        value={this.state.Head}
          onValueChange={(value) => {
              this.setState({Head:value})}}
        />
         <Text style={styles.text}>
         Head
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        <CheckBox
        value={this.state.Hearing}
          onValueChange={(value) => {
              this.setState({Hearing:value})}}
        />
         <Text style={styles.text}>
         Hearing
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        <CheckBox
        value={this.state.Respiratory}
          onValueChange={(value) => {
              this.setState({Respiratory:value})}}
        />
         <Text style={styles.text}>
         Respiratory
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        <CheckBox
        value={this.state.MulitpleHead}
          onValueChange={(value) => {
              this.setState({MulitpleHead:value})}}
        />
         <Text style={styles.text}>
         Mulitple - Head
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        <CheckBox
        value={this.state.MulitpleTorso}
          onValueChange={(value) => {
              this.setState({MulitpleTorso:value})}}

        />
         <Text style={styles.text}>
         Multiple - Torso
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
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

        <View style={{alignItems:'center'}}>
        <Text style={{marginTop:scale(40), fontWeight:'bold', fontSize:scale(16)}}>To Proceed to the next Screen</Text>
        </View>
        <View style={{marginTop:scale(15)}}>
        <TouchableOpacity onPress={() => {this.storeAndNavigate()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>SUBMIT FORM USER INFO</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
  
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(UseofPPE);