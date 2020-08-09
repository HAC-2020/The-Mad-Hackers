import React from 'react'
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'

const employmentprojections = 'https://www.indeed.com/jobs?q=No+Degree+Required&l=Bloomfield+Hills%2C+MI'

export default class ProjectionScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
        }
    }
    render(){
        return(
            <WebView source={{ uri: employmentprojections }} />
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