import React from 'react';
import {bindActionCreators} from 'redux';
import * as formActions from '../redux/form/action';
import {connect} from 'react-redux';
import { StyleSheet, Text, TextInput, SafeAreaView, ScrollView, Alert,Button, View } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { TouchableOpacity } from 'react-native-gesture-handler';



 class ObservationType extends React.Component {
    constructor(props){
        super(props)

            this.state = {
              description:null,
                selectedType:null
            
    }
    this.storeAndNavigate = this.storeAndNavigate.bind(this)
};
  
  render() {
    var radio_props = [
        {label: 'Improvement Suggestion', value:'Improvement Suggestion'},
        {label: 'Acceptable Behavior', value:'Acceptable Behavior' },
        {label: 'Acceptable Condition', value: 'Acceptable Condition' },
        {label: 'Unacceptable Behavior', value: 'Unacceptable Behavior' },
        {label: 'Unacceptable Condition', value: 'Unacceptable Condition'  }

      ];

  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View>
        <Text style={{fontWeight:'bold',fontSize:scale(16), color:'black'}}>
         Observation Type:
        </Text>
        </View>
        <View style={{marginTop:scale(25)}}>
        <RadioForm
          radio_props={radio_props}
          initial={""}
          onPress={(value) => {this.setState({selectedType:value})}}
        />
        </View>
        <View style={{marginTop:scale(25)}}>
        <TextInput
        style={{ height: scale(100) , borderColor: 'gray', borderWidth: scale(1) }}
        onChangeText={(description) => this.setState({description: description})}
        />
        </View>
        <View style={{alignItems:'center'}}>
        <Text style={{marginTop:scale(40), fontSize:scale(16), fontWeight:'bold'}}>To Proceed to the next Screen</Text>
        </View>
        <View style={{marginTop:scale(15)}}>
        <TouchableOpacity onPress={() => {this.storeAndNavigate()}} style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Submit Form User Info</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

storeAndNavigate(){
  if(  this.state.selectedType === null || this.state.description === null ){
        Alert.alert("Missing Fields","Please fill in all fields.")
       }else{
   
    this.props.actions.addObservationType(
       this.state.selectedType,
       this.state.description
      );
   
    this.props.navigation.navigate('ObservationCategory')
}
}
 }

const styles = StyleSheet.create({
    inputStyle: {
        marginTop: scale(20),
        width: scale(300),
        height: scale(100),
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ObservationType);