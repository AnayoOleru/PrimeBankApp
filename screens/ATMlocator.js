import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Body, Title, Button } from 'native-base';

class ATMlocator extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    };

   static navigationOptions = {
       drawerIcon : ({tintColor}) => (
           <MaterialIcons name="local-atm" style={{fontSize:24,  color: tintColor}} />
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
          <Title>ATM</Title>
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

export default ATMlocator;
