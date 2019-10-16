import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Ionicons } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Title, Button, Text } from 'native-base';

 class AlertNotification extends React.Component {
     constructor(props){
         super(props)
         this.state = {}
     };

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Ionicons name="ios-notifications" style={{fontSize:24,  color: tintColor}} />
        )
      };
render(){
  return (
      <React.Fragment>
    <Header>
    <Left style={{ flex: 1 }}>
       <Button transparent>
          <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
            </Button>
        </Left>
        <Body style={styles.headerText}>
          <Title>NOTIFICATION</Title>
      </Body>
      <Right  style={{ flex: 1 }}>
      </Right>
    </Header>
    <ScrollView style={styles.container}>
  
    </ScrollView>
    </React.Fragment>
  );
    }
 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  headerText: {
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AlertNotification;
