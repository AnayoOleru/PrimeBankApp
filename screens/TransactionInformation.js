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

class TransactionInformation extends Component {

    static navigationOptions = {
        header: null,
        drawerIcon : ({tintColor}) => (
            <Icon name="home" style={{fontSize:24,  color: tintColor}} />
        )
      };

      componentDidMount(){
          console.log(this.props, 'NAV')
      }

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
                <Title>TRANSACTION INFORMATION</Title>
            </Body>
            <Right  style={{ flex: 1 }}>
            </Right>
          </Header>
      <SafeAreaView style={styles.overview}>
        <ScrollView contentContainerStyle={{ paddingVertical: 25 }}>

          <Card
            title="TRANSACTION INFORMATION"
            style={[styles.margin, { marginTop: 18 }]}
          >
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
            <Block style={styles.driver} activeOpacity={0.8}>
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
            </Block>
          </Card>
        </ScrollView>
      </SafeAreaView>
      </React.Fragment>
    )
  }
}

export default TransactionInformation;