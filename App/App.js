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

const Menu = TabNavigator({
  Home: { screen: App },
  Map: { screen: Map },
  Profile: { screen: Profile }
}, {
  tabBarOptions: { 
    activeTintColor: '#7567B1',
    labelStyle: {
      fontSize: 16,
      fontWeight: '600'
    }
  }
});

export default class App extends React.Component {
    static navigationOptions = {
    title: 'HomeScreen',
  };
  
  render() {
    var { navigate } = this.props.navigation;
    const list = [
      {
        name: 'Las Vegas',
        event_url: 'vegas.jpg',
        subtitle: 'May 5-9, 2018'
      },
      {
        name: 'Salt Spring Island',
        event_url: 'saltspring.jpg',
        subtitle: 'June 27-29, 2018'
      },
      {
        name: 'Cultus Lake',
        event_url: 'cultus.jpg',
        subtitle: 'Aug 17-19, 2018'
      },
    ];

    return (
      <View style={styles.container}>
        <Text>welcome to tripdoodle</Text>

        <NavigationApp/>; 
        <ScrollView
          horizontal
          pagingEnabled // swiping gestures 
          decelerationRate={0.993}>

        <List>
        {
            list.map((item, i) => (
            <ListItem
                key={i}
                title={item.name}
                avatar={{uri:l.item_url}}
            />
            ))
        }
        </List>
        </ScrollView>

        <Button
        raised
        icon={{name: 'cached'}}
        onPress={() => navigate('Event')}
        //  {eventId: this.eventId, name: this.name, event_url: this.event_url, desc:this.desc})}
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
