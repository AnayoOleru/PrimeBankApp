  
import React, { Component} from 'react';
import {View, Text, TouchableOpacity, TextInput, ImageBackground, Image, Dimensions, ScrollView } from 'react-native';
import { Header, Left, Right, Icon, Text as TabText, Body, Button, Title } from 'native-base';
import { Ionicons, Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import bgImage from '../assets/images/background2.png';
import logo from '../assets/images/sunbank.png';

const { width: WIDTH } = Dimensions.get('window'); 
class Logout extends React.Component {
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

    static navigationOptions = {
        drawerIcon : ({tintColor}) => (
            <MaterialCommunityIcons name="logout" style={{fontSize:24,  color: tintColor}} />
        )
      };

    

    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <React.Fragment>
            <Header>
            <Left style={{ flex: 1 }}>
               <Button transparent>
                  <Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />
                    </Button>
                </Left>
                <Body style={styles.headerText}>
                  <Title>LOGOUT</Title>
              </Body>
              <Right  style={{ flex: 1 }}>
              </Right>
            </Header>
            <ImageBackground style={styles.backgroundContainer}>
                <KeyboardAwareScrollView>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                    <Text style={styles.logoText}>Logout</Text>
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

                <TouchableOpacity style={styles.btnLogin }>
                        <Text style={styles.text} onPress={() => this.props.navigation.navigate('SignIn')}>Logout</Text>
                    </TouchableOpacity>
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
    headerText: {
        flex:4,
        justifyContent: 'center',
        alignItems: 'center',
      }
}

 
export default Logout;