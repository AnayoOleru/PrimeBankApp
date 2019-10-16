  
import React, { Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions, ActivityIndicator } from 'react-native';
import { Ionicons, Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Spinner from 'react-native-loading-spinner-overlay';
import Loader from '../components/Loader';
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
            press: false,
            loading: true
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
    };

    componentDidMount(){
        setTimeout(() => {
            this.setState({
              loading: false
            });
          }, 3000);
    };


    static navigationOptions = {
        header: null
      };
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <React.Fragment>
            <ImageBackground style={styles.backgroundContainer}>
            <Loader loading={this.state.loading} />
                <KeyboardAwareScrollView>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>Login with your credentials </Text>
                </View>
                <View style={styles.inputContainer}>
                    <Entypo name={'email'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Email'}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <MaterialCommunityIcons name={'textbox-password'} size={25} color={'white'} 
                    style={styles.inputIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Password'}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'white'}
                        underlineColorAndroid='transparent'
                    />

                    <TouchableOpacity style={styles.btnEye }>
                        <AntDesign name={'eye'} size={22} color={'white'} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.btnLogin } onPress={() => this.props.navigation.navigate('Main')}>
                        <Text style={styles.text}>Continue</Text>
                    </TouchableOpacity>
                    <Text style={styles.regText} onPress={() => this.props.navigation.navigate('SignUp')} >Don't have a SunBank account? Register here. </Text>
                    </KeyboardAwareScrollView>
            </ImageBackground>
            </React.Fragment>
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
        backgroundColor: '#062b50',
        marginTop: 40
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
        paddingLeft: 70,
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
    },
    loaderStyle: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'
    }
}

 
export default SignIn;