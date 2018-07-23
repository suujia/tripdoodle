import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Text, Avatar } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>user profile</Text>

        <Avatar
        xlarge
        rounded
        source={{uri: "bigprofilepic.jpg"}}
        onLongPress={() => console.log("Works!")}
        activeOpacity={0.7}
        />

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
