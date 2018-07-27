import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

export default class App extends React.Component {
    static navigationOptions = {
    title: 'Welcome',
  };
  render() {
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
        title='Event' />

        <Button
        raised
        color={ 'blue' }
        icon={{name: 'cached'}}
        onPress={() => navigate('Map')}
        title='BUTTON TWO' />

        <Button
        raised
        color={ 'blue' }
        icon={{name: 'cached'}}
        onPress={() => navigate('Profile')}
        title='Profile' />

      </View>
    );
  }
}

// make a proper menu
// www.codementor.io/blessingoraz/understanding-navigation-in-react-native-a3wlcxmzu
const Menu = StackNavigator({
  Home: { screen: App },
  Event: { screen: Event },
  Map: { screen: Map },
  Profile: { screen: Profile },

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
