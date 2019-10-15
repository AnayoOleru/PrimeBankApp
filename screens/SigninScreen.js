  
import React, { Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import bgImage from '../assets/images/background2.png';
import logo from '../assets/images/sunbank.png';

const { width: WIDTH } = Dimensions.get('window'); 
class SignIn extends React.Component {
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
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>Login with your credentials </Text>
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name={'email-lock'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name={'folder-lock-open'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity style={styles.btnEye }>
                        <Ionicons name={this.state.press === false ? 'arrow-with-circle-right' : null} size={22} color={'white'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLogin }>
                        <Text style={styles.text} onPress={() => this.props.navigation.navigate('Main')}>Continue</Text>
                    </TouchableOpacity>
                    <Text style={styles.regText} onPress={() => this.props.navigation.navigate('SignUp')} >Don't have a SunBank account? Register here. </Text>
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
        marginBottom: 30
    },
    logo: {
        width: 120,
        height: 190 
    },
    logoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },
    regText: {
        color: '#fcbb16',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        padding: 10,
        textDecorationLine: 'underline'
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
        marginTop: 10
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

 
export default SignIn;