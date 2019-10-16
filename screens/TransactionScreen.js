import React, { Component } from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Header, Left, Right, Icon, Body, Title, Button } from 'native-base';

import { Block, Card, Text, IconImage, Label } from '../components';
import * as theme from '../constants/theme';

const styles = StyleSheet.create({
  overview: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.white,
  },
  margin: {
    marginHorizontal: 25,
  },
  driver: {
    marginBottom: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerText: {
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

class Transaction extends Component {

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="home" style={{fontSize:24,  color: tintColor}} />
        )
      };

  render() {
    return (
        <React.Fragment>
        <Header>
          <Left style={{ flex: 1 }}>
             <Button transparent>
                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                  </Button>
              </Left>
              <Body style={styles.headerText}>
                <Title>TRANSACTIONS</Title>
            </Body>
            <Right  style={{ flex: 1 }}>
            </Right>
          </Header>
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>
            <Card row middle style={styles.margin}>
            <Block flex={1.2} center middle style={{ marginRight: 0 }}>
              <Text light height={43} size={26} spacing={-0.45}>Anayo Oleru</Text>
              <Text ligth caption center style={{ marginTop: 3 }}>
                Account Number: 0078675645
              </Text>
              <Text ligth caption center style={{ marginTop: 3 }}>
                BVN: 2233456778
              </Text>
            </Block>
          </Card>
          
          <Card row middle style={[styles.margin, { marginTop: 18 }]}>
            <Block flex={1.2} center middle style={{ marginRight: 0 }}>
              <Text light height={43} size={36} spacing={-0.45}>#1, 800.00</Text>
              <Text ligth caption center style={{ marginTop: 3 }}>
                AVAILABLE BALANCE
              </Text>
            </Block>
          </Card>

          <Card row middle style={[styles.margin, { marginTop: 18 }]}>
            <Block flex={1.2} center middle style={{ marginRight: 0 }}>
              <Text light height={43} size={36} spacing={-0.45}>#1, 800.00</Text>
              <Text ligth caption center style={{ marginTop: 3 }}>
                SPENT
              </Text>
            </Block>
          </Card>

          <Block row style={[styles.margin, { marginTop: 18 }]}>
            <Card middle style={{ marginRight: 7 }}>
              {/* <IconImage vehicle /> */}
              <Text h2 style={{ marginTop: 17 }}>1,428</Text>
              <Text paragraph color="gray">Vehicles on track</Text>
            </Card>
            
            <Card middle style={{ marginLeft: 7 }}>
              {/* <IconImage distance /> */}
              <Text h2 style={{ marginTop: 17 }}>158.3</Text>
              <Text paragraph color="gray">Distance driven</Text>
            </Card>
          </Block>

          <Card
            title="TODAY'S TRIPS"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block row right>
              <Block flex={2} row center right>
                <Label blue />
                <Text paragraph color="gray">Today</Text>
              </Block>
              <Block row center right>
                <Label purple />
                <Text paragraph color="gray">Yesterday</Text>
              </Block>
            </Block>
            <Block>
              <Text>Chart</Text>
            </Block>
          </Card>

        <TouchableOpacity>
          <Card
            title="TRANSACTION INFORMATION"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block flex={2}>
                    <Text h4>James Chukwudi</Text>
                    <Text paragraph color="gray">Wema Bank</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">$6,432</Text>
                    <Text paragraph right color="gray">Yesterday</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block flex={2}>
                    <Text h4>Ebuka Douglas</Text>
                    <Text paragraph color="gray">UBA bank</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">$6,432</Text>
                    <Text paragraph right color="gray">14/10/2019</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
            <Block style={styles.driver}>
              <TouchableOpacity activeOpacity={0.8}>
                <Block row center>
                  <Block flex={2}>
                    <Text h4>Kafayat Ogidan</Text>
                    <Text paragraph color="gray">Sterling bank</Text>
                  </Block>
                  <Block>
                    <Text paragraph right color="black">$6,432</Text>
                    <Text paragraph right color="gray">01/11/2018</Text>
                  </Block>
                </Block>
              </TouchableOpacity>
            </Block>
          </Card>
          </TouchableOpacity>


          <Card
            title="TRIPS BY TYPE"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block>
              <Text>Chart</Text>
            </Block>
            <Block row space="between" style={{ marginTop: 25 }}>
              <Block>
                <Text h2 light>1,744</Text>
                <Block row center>
                  <Label blue />
                  <Text paragraph color="gray">Confort</Text>
                </Block>
              </Block>
              <Block>
                <Text h2 light>2,312</Text>
                <Block row center>
                  <Label purple />
                  <Text paragraph color="gray">Premium</Text>
                </Block>
              </Block>
            </Block>
          </Card>
        </ScrollView>
      </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default Transaction;