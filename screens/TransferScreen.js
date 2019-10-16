  
import React, { Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions, ScrollView, } from 'react-native';
import { Header, Left, Right, Icon, Text as TabText, Body, Button, Title } from 'native-base';
import { 
    Ionicons, Entypo, MaterialCommunityIcons, FontAwesome, MaterialIcons
} from '@expo/vector-icons/';
import bgImage from '../assets/images/background2.png';
import logo from '../assets/images/sunbank.png';
// import personIcon from '../assets/icons/_ionicons_svg_ios-person.svg';

const { width: WIDTH } = Dimensions.get('window'); 
class Transfer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            password: '',
            showPass: true,
            press: false
        }
    }

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <Icon name="man" style={{fontSize:24,  color: tintColor}} />
        )
      };

    handleFirstNameInput = (name) => {
        this.setState({ name });
    }

    handleLastNameInput = (lastName) => {
        this.setState({ lastName });
    }

    handlePhoneInput = (phone) => {
        this.setState({ phone });
    }

    handlePasswordInput = (password) => {
        this.setState({ password });
    }

    

    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <React.Fragment>
        <View>
        <Header>
            <Left>
                <Button transparent>
                <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                </Button>
            </Left>
            <Body style={styles.headerText}>
                <Title>TRANSFER</Title>
            </Body>
            <Right  style={{ flex: 1 }}>
            </Right>
            </Header>
            </View>
            <ImageBackground style={styles.backgroundContainer}>
                <ScrollView>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <Text ligth caption center style={styles.tranText}>Transfer from:</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name={'target-account'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    {/* <ion-icon name="person"></ion-icon> */}
                    <TextInput
                        style={styles.input}
                        placeholder={'Select Account'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <Text ligth caption center style={styles.tranText}>Transfer to:</Text>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name={'account-arrow-right'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Select Account'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <Text ligth caption center style={styles.tranText}>Transfer Amount:</Text>
                <View style={styles.inputContainer}>
                    <FontAwesome name={'money'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Transfer Amount'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <Text ligth caption center style={styles.tranText}>Transfer Date:</Text>
                <View style={styles.inputContainer}>
                    <MaterialIcons name={'date-range'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Date of Birth'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableOpacity style={styles.btnLogin }>
                        <Text style={styles.text} onPress={() => this.props.navigation.navigate('Main')}>TRANSFER</Text>
                    </TouchableOpacity>
                    </ScrollView>
            </ImageBackground>
        </React.Fragment>
        );
    }
}


const styles = {
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        backgroundColor: '#062b50'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 10
    },
    logo: {
        width: 120,
        height: 120 
    },
    logoText: {
        color: 'white',
        fontSize: 25,
        fontWeight: '500',
        marginTop: 10,
        opacity: 0.5
    },
    WelcomeText: {
        color: 'white',
        fontSize: 25,
        marginTop: 5,
        padding: 5
    },
    introText: {
        color: 'white',
        fontSize: 15,
        marginTop: 5,
        padding: 5
    },
    tipText: {
        color: '#fcbb16',
        fontSize: 15,
        marginTop: 5,
        padding: 10,
        textDecorationLine: 'underline'
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 70,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'white',
        marginHoriontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 36 
    },
    inputContainer: {
        marginTop: 5
    },
    btnEye: {
        position: 'absolute',
        top: 10,
        right: 37  
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        backgroundColor: '#fcbb16',
        justifyContent: 'center',
         marginTop: 20
    },
    text: {
        color: 'white',
         fontSize: 16,
         textAlign: 'center'

    },
    headerText: {
        flex:4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      tranText: {
          color: 'white',
          fontSize: 20,
          marginTop: 5,
          padding: 10,
      }
}

 
export default Transfer;
