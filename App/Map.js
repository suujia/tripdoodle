import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Map extends React.Component {
  static navigationOptions = {
    title: 'MapScreen',
  };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>maps</Text>

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
