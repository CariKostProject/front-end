import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';

import WelcomeScreen from '../Screens/Auth/Welcome';
import LoginScreen from '../Screens/Auth/Login';
import RegisterScreen from '../Screens/Auth/Register';
import HomeScreen from '../Screens/App/Home';
import ChatScreen from '../Screens/App/Chat';
import HistoryScreen from '../Screens/App/History';
import ProfileScreen from '../Screens/App/Profile';
import ProductListScreen from '../Screens/App/UserHome/ProductList';
import ProductMapScreen from '../Screens/App/UserHome/ProductMap';
import KosDetailScreen from '../Screens/App/UserHome/KosDetail';
import PaymentScreen from '../Screens/App/UserHome/Payment';
import ConfirmPaymentScreen from '../Screens/App/UserHome/ConfirmPayment';
import DetailBookingScreen from '../Screens/App/UserHome/DetailBooking';
import Splash from '../Screens/Splash';

import EditProfileUser from '../Screens/App/EditProfileUser';
import ListRoom from '../Screens/App/ListRoom';
import ChatRoomUserScreen from '../Screens/App/chats/Chatroom';
const AuthStack = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    Login: LoginScreen,
    Register: RegisterScreen,
  },
  {
    defaultNavigationOptions: {header: null},
  },
);

//Route for App
const AppStack = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    ProductList: ProductListScreen,
    ProductMap: {
      screen: ProductMapScreen,
    },
    ChatroomUser: {
      screen: ChatRoomUserScreen,
    },
    KosDetail: {
      screen: KosDetailScreen,
    },
    Payment: {
      screen: PaymentScreen,
    },
    ConfirmPayment: {
      screen: ConfirmPaymentScreen,
    },
    DetailBooking: {
      screen: DetailBookingScreen,
    },
    ListRoom: {screen: ListRoom},
  },
  {
    header: null,
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (
            route.routeName === 'ProductMap' ||
            route.routeName === 'KosDetail' ||
            route.routeName === 'Payment' ||
            route.routeName === 'DetailBooking' ||
            route.routeName === 'ListRoom' ||
            route.routeName === 'ConfirmPayment'
          ) {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
      return {
        tabBarVisible,
      };
    },
  },
);

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
    },
    EditProfileUser: {
      screen: EditProfileUser,
    },
  },
  {
    header: null,
    headerMode: 'none',
    navigationOptions: ({navigation}) => {
      let tabBarVisible;
      if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
          if (route.routeName === 'EditProfileUser') {
            tabBarVisible = false;
          } else {
            tabBarVisible = true;
          }
        });
      }
      return {
        tabBarVisible,
      };
    },
  },
);

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="MaterialCommunityIcons"
            name="home"
            style={{fontSize: 23, color: tintColor}}
          />
        ),
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarLabel: 'Chat',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="MaterialCommunityIcons"
            name="message-text"
            style={{fontSize: 23, color: tintColor}}
          />
        ),
      },
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarLabel: 'History',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="MaterialCommunityIcons"
            name="history"
            style={{fontSize: 23, color: tintColor}}
          />
        ),
      },
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({tintColor}) => (
          <Icon
            type="MaterialCommunityIcons"
            name="account-circle"
            style={{fontSize: 23, color: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#34ABC6',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        marginBottom: 3,
      },
    },
  },
);

const AppRoot = createAppContainer(
  createSwitchNavigator(
    {
      Splash: Splash,
      Auth: AuthStack,
      App: AppNavigator,
    },
    {
      initialRouteName: 'Splash',
      // headerMode: 'none',
    },
  ),
);

export default AppRoot;
