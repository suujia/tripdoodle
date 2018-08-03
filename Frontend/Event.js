import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Avatar } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';

export default class Event extends React.Component {
  static navigationOptions = {
    title: 'EventScreen',
  };
  render() {
    const { goBack, navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>cultus lake event</Text>
        <Avatar
        small
        rounded
        onPress={() => navigate('ProfileScreen')}
        activeOpacity={0.7}
        />

        <Button
        raised
        color={ 'blue' }
        icon={{name: 'cached'}}
        onPress={() => goBack(null)}
        title='Back'/>

        <TouchableHighlight
            onPress={() => navigate("TodoScreen")}
            style={[styles.button, {backgroundColor: '#8E84FB'}]}>
            <Text style={styles.buttonText}>Todo</Text>
        </TouchableHighlight>
        
        </View>

      // select friends 

      // navigation buttons that lead to main page or profile
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
