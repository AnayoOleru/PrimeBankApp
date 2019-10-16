import React from 'react';
import { ExpoConfigView, ExpoLinksView } from '@expo/samples';
import { ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Header, Left, Right, Icon, Text as TabText, Body, Button, Title } from 'native-base';


class SettingsScreen extends React.Component {
  constructor(props){
      super(props)
      this.state = {}
  };

 static navigationOptions = {
     drawerIcon : ({tintColor}) => (
         <MaterialCommunityIcons name="settings-outline" style={{fontSize:24,  color: tintColor}} />
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
        <Title>SETTINGS</Title>
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

export default SettingsScreen;
