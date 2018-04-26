import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <ImageBackground 
        style={styles.headerbg}
        source={require('../img/headerbg.jpeg')}
      >
      <View style={styles.headercontainer}>
        <View style={styles.profilepiccontainer}>
          <Image 
            style={styles.mypic}
            source={require('../img/profilepic.jpg')}
          >
          </Image>
        </View>
        <Text style={styles.name}>Bradley Findeis</Text>
        <Text style={styles.liner}>smokes meats, slings code, super nice</Text>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  headerbg: {
    flex: 1,
    width: null,
    alignSelf: 'stretch',
  },
  headercontainer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.6)'
  },
  profilepiccontainer: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 3,
    borderColor: 'rgba(0,0,0,0.4)'
  },
  mypic: {
    flex: 1, 
    width: null,
    alignSelf: 'stretch',
    borderRadius: 90,
    borderWidth: 3,
    borderColor: 'white',
  },
  name: {
    marginTop: 20, 
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  liner: {
    color: '#fff',
    fontSize: 15,
    fontStyle: 'italic'

  }
});
