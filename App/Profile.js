import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

export default class Profile extends React.Component {
  static navigationOptions = {
    title: 'ProfileScreen',
<<<<<<< HEAD
=======
    tabBarLabel: 'ScreenOne',
>>>>>>> 436f2a90010ae51e06914da3d258e69c59b5aa17
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
