import React from 'react'
import {View, Text, StyleSheet, FlatList, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons, Foundation, AntDesign} from "@expo/vector-icons"
const themecolor = '#fff'
const tabcolor = '#5271ff'

const jobposts = [
    {
        id: "1",
        name: "vojoys dooto",
        description: "Very dooto he is",
        skills: "Being Dootoo, Being a bot",
        avatar: require("../assets/LEAN.jpg"),
        image: require("../assets/LEAN.jpg"),
        applicants: '1',
        skills: 'Project Management, Creativity and More'
    }
]
export default class ProfileScreen extends React.Component{



    renderJobPost = jobpost => {
        return (
            <View>
                <Image source={jobpost.avatar} style={styles.avatar}/>
                <View style={{flex:1}}>
                    <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <View>
                            <Text style={styles.name}>{jobpost.name}</Text>
                        </View>
                        <Ionicons name="ios-more" size={24} color="#73788b"/>
                    </View>

                    <Text style={styles.jobposts}>{jobpost.description}</Text>
                    <Image source={jobpost.image} style={styles.image} resizeMode="cover"/>
                    <View style={{flexDirection: "row", flex: 0.8}}>
                        <AntDesign name="copy1" size={24} color="#73788B" style={{marginLeft: 16}}/>
                        <Text style={{marginLeft: 10, fontSize: 20, color:  "#838899", flex: 0.9}}>Skills: {jobpost.skills}</Text>
                    </View>
                    <View style={{flexDirection: "row", marginTop: 30}}>
                        <Foundation name="results-demographics" size={24} color="#73788B" style={{marginLeft: 16}}/>
                        <Text style={{marginLeft: 10, fontSize: 20, color:  "#838899"}}>{jobpost.applicants} Applicant(s)</Text>
                    </View>
                </View>
                <View style={styles.header}/>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                style={styles.feed}
                data={jobposts}
                renderItem={({item}) => this.renderJobPost(item)} keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff',
        color:'#fff'
    },
    header: {
        paddingTop: 50,
        backgroundColor: "#FFF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 1,
        borderBottomColor: `${tabcolor}`,
        shadowColor: "#454D65",
        shadowRadius: 15,
        
    }, headerTitle: {
        fontSize: 20,
        fontWeight: "500"
    },
    feed: {
        marginHorizontal: 16,
    },
    feedItem: {
        backgroundColor: `${themecolor}`,
        borderRadius: 5,
        padding: 8, 
        flexDirection: "row",
        marginVertical: 8
    },
    avatar: {
        width: 36,
        height: 36,
        marginTop: 20,
        borderRadius: 18,
        marginRight: 16
    },
    name: {
        fontSize: 16,
        fontWeight: "500",
        color: "#000",
        marginTop: 4
    },
    jobposts: {
        marginTop: 16,
        fontSize: 14,
        color: "#838899",
        marginLeft: 20,
    },
    image: {
        width: undefined,
        marginLeft: 10,
        height: 200,
        borderRadius: 5,
        marginVertical: 16
    }

})