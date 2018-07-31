import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { List, ListItem, Avatar } from 'react-native-elements';
import { StackNavigator } from 'react-navigation';

export default class Event extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Event: ${navigation.state.params.screen}`,
    }
  };
  render() {
    const { state, navigate } = this.props.navigation;
    const list = [
        {
          name: 'Campsite details',
          item_url: 'camp_icon.jpg',
          subtitle: '4150 Columbia Valley Hwy, Cultus Lake'
        },
        {
          name: 'Driving details',
          item_url: 'car_icon.jpg',
          subtitle: '3hr 15min drive'
        },
      ];

    return (
      <View style={styles.container}>
        <Text>cultus lake event</Text>

        <Avatar
        small
        rounded
        source={{uri: "Susie.jpg"}}
        onPress={() => navigate('Profile', { name: 'Susie'})}
        activeOpacity={0.7}
        />

        <Avatar
        small
        rounded
        source={{uri: "Dylan.jpg"}}
        onPress={() => navigate('Profile', { name: 'Dylan'})}
        activeOpacity={0.7}
        />

        <Button
        raised
        color={ 'blue' }
        icon={{name: 'cached'}}
        onPress={() => this.props.navigation.goBack()}
        title='Back'/>

        <TouchableHighlight
            onPress={() => navigate("Profile", { screen: "Profile" })}
            style={[styles.button, {backgroundColor: '#8E84FB'}]}>
            <Text style={styles.buttonText}>Profile</Text>
        </TouchableHighlight>

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
