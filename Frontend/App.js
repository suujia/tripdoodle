import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

const ScreenStack = createStackNavigator({
  HomeScreen: { screen: App },
  TripScreen: { screen: Trip },
  TodoScreen: { screen: Todo },
}, {
  navigationOptions: {
    headerStyle: {
      marginTop: Expo.Constants.statusBarHeight
    }
  }
});
export default ScreenStack;

// const Menu = TabNavigator({
//   Home: { screen: ScreenStack,
//     navigationOptions: {
//       tabBarLabel: 'Home',
//       tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
//     },
//  },
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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>welcome to tripdoodle</Text>
        <Button
        raised
        icon={{name: 'cached'}}
        onPress={() => navigate('TripScreen')}
        title='Go to Trip'/>

        <Button
        raised
        color={ 'blue' }
        icon={{name: 'cached'}}
        onPress={() => navigate('ProfileScreen')}
        title='Go to Profile'/>
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
