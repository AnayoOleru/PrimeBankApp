import React from 'react';
import { Dimensions, SafeAreaView, View, Image, ScrollView } from 'react-native';
import { createDrawerNavigator, navigationOptions, DrawerItems } from 'react-navigation';
import Transaction from '../screens/TransactionScreen';
import Transfer from '../screens/TransferScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Logout from '../screens/Logout';
import PayBills from '../screens/PayBills';
import ATMlocator from '../screens/ATMlocator';
import Support from '../screens/Support';
import AlertNotification from '../screens/AlertandNotification';
import TransactionInformation from '../screens/TransactionInformation';

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
        TRANSFER: Transfer,
        PAYBILLS: PayBills,
        ATMLOCATOR: ATMlocator,
        TRANSACTIONINFO: TransactionInformation,
        SUPPORT: Support,
        ALERTSNOTIFICATION: AlertNotification,
        SETTINGS: SettingsScreen,
        LOGOUT: Logout,
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
