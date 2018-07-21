import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default class App extends React.Component {
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
        onPress={() => console.log("Works!")}
        title='BUTTON ONE' />

        <Button
        raised
        color={ 'blue' }
        icon={{name: 'cached'}}
        onPress={() => console.log("Works!")}
        title='BUTTON TWO' />
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
