import React from 'react';
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Todo extends React.Component {
    static navigationOptions = {
    title: 'TodoScreen',
  };
  render() {
    var { navigate } = this.props.navigation;
      // https://facebook.github.io/react-native/docs/using-a-listview  fix these lists
    const list = [
      {
        name: 'Car 1 - Dylan',
        event_url: 'toyota.jpg',
        subtitle: 'Dylan: Susie, Bob, Billy, Boo depart from Vancouver at 8:15am'
      },
      {
        name: 'Car 2 - Alison',
        event_url: 'benz.jpg',
        subtitle: 'Alison: Bert, Bob2, Billy2, Boo2 depart from Richmond at 8:30am'
      },
      {
        name: 'Car 3 - Jacqline',
        event_url: 'bmw.jpg',
        subtitle: 'Jacqline: John, Bob, Billy, Boo depart from UBC at 8:15am'
      },
    ];

    return (
      <View style={styles.container}>
        <Text>todo list</Text>

        <ScrollView
          horizontal
          pagingEnabled // swiping gestures 
          decelerationRate={0.993}>
        </ScrollView>

        <Button
        raised
        color={ 'blue' }
        icon={{name: 'cached'}}
        onPress={() => navigate('Map')}
        title='BUTTON TWO' />

        <TouchableHighlight
            onPress={() => this.props.navigation.goBack()}
            style={[styles.button, {backgroundColor: '#C56EE0'}]}>
            <Text style={styles.buttonText}>Go Back</Text>
        </TouchableHighlight>

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
