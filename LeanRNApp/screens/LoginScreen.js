import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar, KeyboardAvoidingView, LayoutAnimation, Image, Platform} from 'react-native'
import * as firebase from 'firebase'
import {useNavigation} from '@react-navigation/native'
import { Button } from 'react-native';
const themecolor = '#fff'
const tabcolor = '#5271ff'
export default class LoginScreen extends React.Component{
    state= {
        email: "",
        password: "",
        errorMessage: null,
    }
    handleLogin = () => {
        const {email, password} = this.state
        firebase
            .auth().
            signInWithEmailAndPassword(email, password)
            .catch(error=> this.setState({errorMessage: error.message}))
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                 console.log('user is signed in')
                 
                } else {
                 console.log('user is not signed in')
                }
              });
    }
    render(){
        LayoutAnimation.easeInEaseOut()
        return(
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : null}>
                <View style={StyleSheet.container}>
                    <StatusBar barStyle='dark-content'></StatusBar>
                {/* <Image style={{marginTop: -176, marginLeft: -50}} source={require()}></Image> */}

                {/* <Image style={{marginTop: -325, marginLeft: -225}} source={require()}></Image> */}
                    <Image source={require('../assets/LEAN.jpg')} style={{marginTop: 100, alignSelf: "center", height: 100 ,width: 100,borderWidth: 1,borderColor: '#fee11a',borderRadius: 10}}/>
                    <Text style={styles.greeting}>{`Hello.\nWelcome back.`}</Text>
                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={styles.inputTitle}>Email Address</Text>
                            <TextInput 
                            style={styles.input} 
                            autoCapitalize="none"
                            onChangeText={email => this.setState({email})}
                            value={this.state.email}
                            ></TextInput>
                        </View>
                        <View style={{marginTop: 32}}>
                            <Text style={styles.inputTitle}>Password</Text>
                            <TextInput style={styles.input}
                            secureTextEntry autoCapitalize="none" 
                            onChangeText={password => this.setState({password})}>
                            </TextInput>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                        <Text style={{color: "#FFF", fontWeight: "500", }}>Sign In </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{alignSelf: "center", marginTop: 32}} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{color: "#414959", fontSize: 13}}>
                            New? <Text style={{fontWeight: "500", color: `${tabcolor}`}}>Sign Up</Text>
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    greeting : {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
        justifyContent: "flex-end",
    },
    inputTitle: {
        color: '#8A8F9E',
        textTransform: "uppercase",
        fontSize: 10
    },
    input: {
        borderBottomColor: "#8a8f9e",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D",
        justifyContent: "flex-end",
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: `${tabcolor}`,
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center",
    },
    error: {
        color: "#bb252b",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    }
})