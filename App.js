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






function HomeScreen({navigation}) {
  //navigation param is passed to every screen component
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
      <Image style={{height:200, width:270, marginBottom:50}} source={ WOTLOGO }/>
      <Text style={{color: 'black',fontSize: 18, marginBottom: 20}}>WildCat Safety Tools - Safety Always!</Text>
      <TouchableOpacity  onPress={() => {
              navigation.navigate('SignIn');
            }}
           style={{borderRadius:10,borderWidth:1,borderColor:'black',width:150,alignItems:'center',backgroundColor:'black',padding:5}}><Text style={{color:'#FEE53B',fontSize:20}}>Get Started</Text></TouchableOpacity>
          <TouchableOpacity  onPress={() => {
              navigation.navigate('Register');
            }}
           style={{borderRadius:10,borderWidth:1,borderColor:'black',width:350,alignItems:'center',backgroundColor:'black',padding:5}}><Text style={{color:'#FEE53B',fontSize:20}}>Don't have an account? Register Here!</Text></TouchableOpacity>
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
          <Stack.Screen name="ObservationType" component={ObservationType} />
          <Stack.Screen name="ObservationCategory" component={ObservationCategory} />
          <Stack.Screen name="BodyPosition" component={BodyPosition} />
          <Stack.Screen name="EnvironmentalIssue" component={EnvironmentalIssue} />
          <Stack.Screen name="Health" component={Health} />
          <Stack.Screen name="ProceduresandStandards" component={ProcedureandStandars} />
          <Stack.Screen name="ToolsandEquipment" component={ToolsandEquipment} />
          <Stack.Screen name="QualityRelated" component={QualityRelated} />
          <Stack.Screen name="UseofPPE" component={UseofPPE} />
          <Stack.Screen name="WorkingConditions" component={WorkingConditions} />
          <Stack.Screen name="Submit" component={Submit} />











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
    right: 0,
  },
  body: {
    backgroundColor: 'black',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
