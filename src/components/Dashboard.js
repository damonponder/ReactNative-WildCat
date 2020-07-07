import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Button } from 'react-native';
// import Constants from 'expo-constants';

export default class Dashboard extends React.Component {
  render() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
        </Text>
        <Button title={'Observables'} onPress={() => {this.props.navigation.navigate('ObservationInfo')}}/>
      </ScrollView>
    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants.statusBarHeight,
  },

  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
});

