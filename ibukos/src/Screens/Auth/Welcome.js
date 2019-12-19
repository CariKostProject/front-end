import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import logo from '../../Assets/blueLogo.png';
import gif from '../../Assets/people.gif';
import {connect} from 'react-redux';
import {getAUser} from '../../Redux/Action/user';
import firebase from 'firebase';
class Welcome extends Component {
  componentDidMount = async () => {
    firebase.apps;
    if (!firebase.apps.length) {
      console.log('firebase is running yay');
      firebase.initializeApp({
        apiKey: 'AIzaSyDATfs6jzciieulMcIcOblveqJ7TA_fAWw',
        authDomain: 'pigeon-mark1.firebaseapp.com',
        databaseURL: 'https://pigeon-mark1.firebaseio.com',
        projectId: 'pigeon-mark1',
        storageBucket: 'pigeon-mark1.appspot.com',
        messagingSenderId: '508036277999',
        appId: '1:508036277999:web:a9c736217fcd545b5e1d1a',
        measurementId: 'G-QZTZCMQGCD',
      });
    }
    const logged = await AsyncStorage.getItem('logged');
    console.log('DISINI data: ', logged);

    if (logged) {
      setTimeout(() => {
        //logged = 'user';
        this.props.navigation.navigate('Home');
      }, 3000);
    } else {
      setTimeout(() => {
        //logged = 'user';
        this.props.navigation.navigate('Login');
      }, 3000);
    }

    // if (logged === 'user') {
    //   this.props.navigation.navigate('Home');
    // } else if (logged === 'partner') {
    //   this.props.navigation.navigate('HomePartner');
    // } else {
    //   return;
    // }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.content}>
            <Text style={styles.title}>
              Welcome to
              <Image source={logo} style={styles.logo} />
            </Text>
            <Text style={styles.description}>
              Help you to find the best boarding house
            </Text>
            <Image
              source={require('../../Assets/loading.gif')}
              style={styles.gif}
            />
            {/* <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.buttonContainer, styles.loginButton]}
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Login as user</Text>
            </TouchableOpacity> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(Welcome);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '85%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  title: {
    marginBottom: 30,
    color: '#5F6D7A',
    alignSelf: 'center',
    fontSize: 28,
  },
  logo: {
    width: 130,
    height: 33,
    alignSelf: 'center',
  },
  description: {
    marginTop: -15,
    marginBottom: 20,
    alignSelf: 'center',
    color: '#A9A9A9',
    fontSize: 16,
  },
  buttonContainer: {
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: '100%',
    borderRadius: 20,
  },
  loginButton: {
    backgroundColor: '#1C8CD1',
    height: 45,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '100',
  },
  gif: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
