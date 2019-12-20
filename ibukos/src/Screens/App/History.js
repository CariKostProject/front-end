import React from 'react';
import {FlatList, RefreshControl, ScrollView} from 'react-native';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Badge,
  Row,
  AsyncStorage,
} from 'native-base';

import axios from 'axios';
export default class History extends React.Component {
  constructor() {
    super();
    this.state = {
      History: [],

      refresh: false,
    };
  }

  _onRefresh = () => {
    this.setState({refresh: true});
    this.getHistory();
  };

  refreshData = async () => {
    await axios.get('https://ibukost.herokuapp.com/booking/history');
  };

  getHistory = () => {
    this.setState({load: true});

    axios
      .get('https://ibukost.herokuapp.com/booking/history/')
      .then(result => {
        this.setState({Payment: result.data.result});
        this.setState({refresh: false});
      })
      .catch(err => {
        console.warn(err);
      });
  };

  async componentDidMount() {
    // const user_id =  AsyncStorage.getItem('user_id');
    //  console.warn('USER ID BREEEEEEEEE: ');

    await this.getHistory();
  }

  render() {
    const result = this.state.Payment;
    const loading = this.state.load;
    console.warn(result);
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refresh}
            onRefresh={this._onRefresh}
          />
        }>
        <Container>
          <Content>
            <List>
              <FlatList
                data={result}
                renderItem={item => (
                  <ListItem>
                    <Row>
                      <Left>
                        <Text>
                          Pembayaran untuk Kostnya {item.item.labelName}
                        </Text>
                      </Left>
                      <Right>
                        <Text>{item.item.status}</Text>
                      </Right>
                    </Row>
                  </ListItem>
                )}
              />
            </List>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}
