  
import React, { Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import bgImage from '../assets/images/background2.png';
import logo from '../assets/images/sunbank.png';

const { width: WIDTH } = Dimensions.get('window'); 
class SignUp extends React.Component {
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
            <ImageBackground style={styles.backgroundContainer}>
                <View style={styles.logoContainer}>
                    <Text style={styles.WelcomeText}>Welcome To Your One Customer Bank</Text>
                    <Text style={styles.introText}>Let's set up your account real quick!</Text>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name={'email-lock'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Enter your BVN'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <Text style={styles.tipText}>Quick Tip: Dial *565*0# on your registered mobile number to get your BVN.</Text>
                <View style={styles.inputContainer}>
                    <Ionicons name={'folder-lock-open'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'First Name'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name={'folder-lock-open'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Last Name'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Ionicons name={'folder-lock-open'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Date of Birth'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>

                <TouchableOpacity style={styles.btnLogin }>
                        <Text style={styles.text}>Continue</Text>
                    </TouchableOpacity>
            </ImageBackground>
        )
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
        color: 'white',
        fontSize: 15,
        marginTop: 5,
        padding: 10
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 45,
        fontSize: 16,
        paddingLeft: 60,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        color: 'white',
        marginHoriontal: 25
    },
    inputIcon: {
        position: 'absolute',
        top: 10,
        left: 37 
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

    }
}

 
export default SignUp;