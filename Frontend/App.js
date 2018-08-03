import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';
const util = require('util');

const ScreenStack = StackNavigator({
  Home: { screen: App },
  Event: { screen: Event },
  Todo: { screen: Todo },
}, {
  navigationOptions: {
    headerStyle: {
      marginTop: Expo.Constants.statusBarHeight
    }
  }
});

// const Menu = TabNavigator({
//   Home: { screen: App },
//   Map: { screen: Map },
//   Profile: { screen: Profile }
// }, {
//   tabBarOptions: { 
//     activeTintColor: '#7567B1',
//     labelStyle: {
//       fontSize: 16,
//       fontWeight: '600'
//     }
//   }
// });

export default class App extends React.Component {
    static navigationOptions = {
    title: 'HomeScreen',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <Text>welcome to tripdoodle</Text>
        <Button
        raised
        icon={{name: 'cached'}}
        onPress={() => navigate('Event')}
        title='Event'/>

        <Button
        raised
        color={ 'blue' }
        icon={{name: 'cached'}}
        onPress={() => navigate('Profile')}
        title='Profile'/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
