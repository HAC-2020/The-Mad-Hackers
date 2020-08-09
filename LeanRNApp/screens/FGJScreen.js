import React from 'react'
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'

const fgjprojections = 'https://datawrapper.dwcdn.net/1DDAB/1/'

export default class ProjectionScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
        }
    }
    render(){
        return(
            <WebView source={{ uri: fgjprojections }} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})