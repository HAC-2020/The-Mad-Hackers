import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, StatusBar, Image, KeyboardAvoidingView} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import * as firebase from 'firebase'
const themecolor = '#fff'
const tabcolor = '#5271ff'
export default class RegisterScreen extends React.Component{
    state= {
        name: "",
        email: "",
        password: "",
        errorMessage: null,
    }
    handleSignUp = () => {
        firebase 
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
               return userCredentials.user.updateProfile({
                   displayName: this.state.name
               })
            })
            .catch (error => this.setState({errorMessage: error.message}))
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                 console.log('user is signed in')
                } else {
                 console.log('user is not signed in')
                }
              });
    }
    render(){
        return(
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : null}>
            <View style={StyleSheet.container} behavior="padding">

                <StatusBar barStyle='dark-content'></StatusBar>

                <Image source={require('../assets/LEAN.jpg')} style={{marginTop: 100, alignSelf: "center", height: 100 ,width: 100,borderWidth: 1,borderColor: `${tabcolor}`,borderRadius: 10}}/>
                
                <Text style={styles.greeting}>{`Hello!\nSign up and get started.`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Full Name</Text>
                        <TextInput 
                        style={styles.input} 
                        autoCapitalize="none"
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
                        ></TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput style={styles.input}
                         autoCapitalize="none" 
                         onChangeText={email => this.setState({email})}>
                         </TextInput>
                    </View>
                    <View style={{marginTop: 32}}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput style={styles.input}
                         secureTextEntry autoCapitalize="none" 
                         onChangeText={password => this.setState({password})}>
                         </TextInput>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: `${themecolor}`, fontWeight: "500", }}>Sign In </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignSelf: "center", marginTop: 32}} onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={{color: "#414959", fontSize: 13}}>
                        Already Have An Account? <Text style={{fontWeight: "500", color: `${tabcolor}`}}>Sign In</Text>
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
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    greeting : {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center",
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
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center",
    },
    back: {
        position: "absolute",
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21,22,48,01)",
        alignItems: "center",
        justifyContent: "center"
    }
})
