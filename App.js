//import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import SignIn from './src/components/SignIn';
import Dashboard from './src/components/Dashboard';
import {Register} from './src/components/Register';
import ObservationInfo from './src/components/ObservationInfo';
import ObservationType from './src/components/ObservationType';
import ObservationCategory from './src/components/ObservationCategory';
import BodyPosition from './src/components/BodyPosition';
import EnvironmentalIssue from './src/components/EnvironmentalIssue';
import Health from './src/components/Health';
import ProcedureandStandars from './src/components/ProceduresandStandards';
import ToolsandEquipment from './src/components/ToolsandEquipment';
import QualityRelated from './src/components/QualityRelated';
import UseofPPE from './src/components/UseofPPE';
import WorkingConditions from './src/components/WorkingConditions';
import Submit from './src/components/Submit';
import { WOTLOGO } from './Images/logoIndex'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {scale} from './util/functions'






function HomeScreen({navigation}) {
  //navigation param is passed to every screen component
  return (
    <View style={{flex: scale(1), alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <Image style={{height:scale(200), width:scale(270), marginBottom:scale(50)}} source={ WOTLOGO }/>
      <Text style={{color: 'black',fontSize: scale(18), marginBottom: scale(20)}}>WildCat Safety Tools - Safety Always!</Text>
      <TouchableOpacity  onPress={() => {
              navigation.navigate('SignIn');
            }}
           style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(150),alignItems:'center',backgroundColor:'black',padding:scale(5)}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Get Started</Text></TouchableOpacity>
          <TouchableOpacity  onPress={() => {
              navigation.navigate('Register');
            }}
           style={{borderRadius:scale(10),borderWidth:scale(1),borderColor:'black',width:scale(350),alignItems:'center',backgroundColor:'black',padding:scale(5), marginTop: 10}}><Text style={{color:'#FEE53B',fontSize:scale(20)}}>Don't have an account? Register Here!</Text></TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="SignIn" component={SignIn} />

          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen options={{headerLeft:null}} name="ObservationInfo" component={ObservationInfo} />
          <Stack.Screen options={{headerLeft:null}} name="ObservationType" component={ObservationType} />
          <Stack.Screen options={{headerLeft:null}} name="ObservationCategory" component={ObservationCategory} />
          <Stack.Screen options={{headerLeft:null}} name="BodyPosition" component={BodyPosition} />
          <Stack.Screen options={{headerLeft:null}} name="EnvironmentalIssue" component={EnvironmentalIssue} />
          <Stack.Screen options={{headerLeft:null}} name="Health" component={Health} />
          <Stack.Screen options={{headerLeft:null}} name="ProceduresandStandards" component={ProcedureandStandars} />
          <Stack.Screen options={{headerLeft:null}} name="ToolsandEquipment" component={ToolsandEquipment} />
          <Stack.Screen options={{headerLeft:null}} name="QualityRelated" component={QualityRelated} />
          <Stack.Screen options={{headerLeft:null}} name="UseofPPE" component={UseofPPE} />
          <Stack.Screen options={{headerLeft:null}} name="WorkingConditions" component={WorkingConditions} />
          <Stack.Screen options={{headerLeft:null}} name="Submit" component={Submit} />











        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
  },
  engine: {
    position: 'absolute',
    right: scale(0),
  },
  body: {
    backgroundColor: 'black',
  },
  sectionContainer: {
    marginTop: scale(32),
    paddingHorizontal: scale(24),
  },
  sectionTitle: {
    fontSize: scale(24),
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: scale(8),
    fontSize: scale(18),
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: scale(12),
    fontWeight: '600',
    padding: scale(4),
    paddingRight: scale(12),
    textAlign: 'right',
  },
});

export default App;
