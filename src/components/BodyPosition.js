import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, View,Text, SafeAreaView, ScrollView, Button, CheckBox, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {scale} from '../../util/functions'




 class BodyPosition extends React.Component {
    constructor(props){
        super(props)

            this.state = {
                AscendingDescinding:null,
                Bending:null,
                Carrying:null,
                EyesOnTask:null,
                Force:null,
                Grip:null,
                Lifting:null,
                LineOfFire:null,
                PinchPoints:null,
                Posture:null,
                PullingPushing:null,
                Repetitive:null,
                Stooping:null,
                Twisting:null,
                Suspended:null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};

  
  render() {
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      
       
        <View style={{flex:scale(1),flexDirection:'row'}}>
        <CheckBox
        value={this.state.AscendingDescinding}
          onValueChange={(value) => {
              this.setState({AscendingDescinding:value})}}
        />
         <Text style={styles.text}>
         Ascending/Descending
        </Text>
        </View>

       
        <View style={{flex:scale(1),flexDirection:'row'}}>
        <CheckBox
        value={this.state.Bending}
          onValueChange={(value) => {
              this.setState({Bending:value})}}
        />
         <Text style={styles.text}>
         Bending
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
        <CheckBox
        value={this.state.Carrying}
          onValueChange={(value) => {
              this.setState({Carrying:value})}}
        />
         <Text style={styles.text}>
         Carrying
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Carrying}
          onValueChange={(value) => {
              this.setState({Carrying:value})}}
        />
        <Text style={styles.text}>
         Eyes on Task/Hands
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.EyesOnTask}
          onValueChange={(value) => {
              this.setState({EyesOnTask:value})}}
        />
        <Text style={styles.text}>
         Force
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Force}
          onValueChange={(value) => {
              this.setState({Force:value})}}
        />
        <Text style={styles.text}>
         Grip
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
          
        <CheckBox
        value={this.state.Grip}
          onValueChange={(value) => {
              this.setState({Grip:value})}}
        />
         <Text style={styles.text}>
         Lifting 
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Lifting}
          onValueChange={(value) => {
              this.setState({Lifting:value})}}
        />
        <Text style={styles.text}>
         Line of Fire
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.LineOfFire}
          onValueChange={(value) => {
              this.setState({LineOfFire:value})}}
        />
        <Text style={styles.text}>
         Pinch Points
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.PinchPoints}
          onValueChange={(value) => {
              this.setState({PinchPoints:value})}}
        />
        <Text style={styles.text}>
         Posture
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Posture}
          onValueChange={(value) => {
              this.setState({Posture:value})}}
        />
        <Text style={styles.text}>
         Pulling/Pushing
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.PullingPushing}
          onValueChange={(value) => {
              this.setState({PullingPushing:value})}}
        />
        <Text style={styles.text}>
         Repetitive Motion
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Repetitive}
          onValueChange={(value) => {
              this.setState({Repetitive:value})}}
        />
        <Text style={styles.text}>
         Stooping
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Stooping}
          onValueChange={(value) => {
              this.setState({Stooping:value})}}
        />
        <Text style={styles.text}>
         Twisting
        </Text>
        </View>
        <View style={{flex:scale(1),flexDirection:'row'}}>
           
        <CheckBox
        value={this.state.Twisting}
          onValueChange={(value) => {
              this.setState({Twisting:value})}}
        />
        <Text style={styles.text}>
         Under Suspended Load
        </Text>
        </View>
       <View style={{alignItems:'center'}}>
        <Text style={{marginTop:scale(25), fontWeight:'bold', fontSize:scale(16)}}>To Proceed to the next Screen</Text>
        </View>
        <TouchableOpacity onPress={() => {this.storeAndNavigate()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scael(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Submit Form User Info</Text></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
    var bodySelections = []
    if(this.state.AscendingDescinding===true){
        bodySelections.push("Ascending/Descinding")
    }
    if(this.state.Bending===true){
        bodySelections.push('Bending')
    }
    if(this.state.Carrying===true){
        bodySelections.push('Carrying')
    }
    if(this.state.EyesOnTask===true){
        bodySelections.push('Eyes on Task/Hands')
    }
    
    if(this.state.Force===true){
        bodySelections.push('Force')
    }
    if(this.state.Grip===true){
        bodySelections.push('Grip')
    }
    if(this.state.Lifting===true){
        bodySelections.push('Lifting')
    }
    if(this.state.LineOfFire===true){
        bodySelections.push('Line of Fire')
    }
    if(this.state.PinchPoints===true){
        bodySelections.push('Pinch Points')
    }
    if(this.state.Posture===true){
      bodySelections.push('Posture')
  }
  if(this.state.PullingPushing===true){
    bodySelections.push('Pulling/Pushing')
}
if(this.state.Repetitive===true){
  bodySelections.push('Repetitive Motion')
}
if(this.state.Repetitive===true){
  bodySelections.push('Repetitive Motion')
}
if(this.state.Stooping===true){
  bodySelections.push('Stooping')
}
if(this.state.Twisting===true){
  bodySelections.push('Twisting')
} 
if(this.state.Suspended===true){
  bodySelections.push('Under Suspended Load')
}
    this.props.actions.addBodyPositions(
      bodySelections
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
    marginTop:scale(5),
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(BodyPosition);