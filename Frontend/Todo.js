import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Todo extends React.Component {
    static navigationOptions = {
    title: 'TodoScreen',
  };
  render() {
    var { navigate, goBack } = this.props.navigation;
      // https://facebook.github.io/react-native/docs/using-a-listview  make a list 
    return (
      <View style={styles.container}>
        <Text>todo list</Text>

        <TouchableHighlight
            onPress={() => goBack()}
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
