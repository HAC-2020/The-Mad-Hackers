import React from 'react'
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'

const forumcatalog = 'https://lean-jobs.tribe.so'

export default class PostScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
        }
    }
    render(){
        return(
            <WebView source={{ uri: forumcatalog }} onLoadEnd={() =>this.setState({isLoaded: true})} />
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