import React from 'react';
import { Dimensions, SafeAreaView, View, Image, ScrollView } from 'react-native';
import { createDrawerNavigator, navigationOptions, DrawerItems } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import Transaction from '../screens/TransactionScreen';
import SignUp from '../screens/SignUpScreen';
// import { Image } from 'native-base';

import sunbank from '../assets/images/sunbank.png';


const CustomeDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
        <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={sunbank} style={styles.logo} />
            {/* <Image source={sunbank} /> */}
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
);

export const TransactionStackNavigator = createDrawerNavigator(
    {
        TRANSACTIONS: Transaction,
        TRANSFER: SignUp
    },
    {
        contentComponent: CustomeDrawerComponent,
        contentOptions: {
            activeTintColor: 'orange'
        }
    }
  );


  const styles = {
    logo: {
        width: 120,
        height: 120 
    }
};
