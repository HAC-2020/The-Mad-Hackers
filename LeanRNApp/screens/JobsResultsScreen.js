import React from 'react';
import {View,ImageBackground, Image,Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const themecolor = '#fff'
const tabcolor = '#5271ff'
export default class Detail extends React.Component {
    render(){
        return(
            <View style={{
                backgroundColor:"#f8f8f8",
                height:"100%",
                paddingHorizontal:20
            }}> 
        
                <View style={{
                    backgroundColor:"#FFF",
                    padding:10,
                    borderRadius:15
                }}>
                    <View style={{
                        flexDirection:"row",
                        alignItems:"center",
                        
                    }}>
                        <View>
                            <Text style={{
                                fontSize:18,
                                }}>Software Developer
                            </Text>

                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                <Text style={{
                                    color:"#000",
                                    opacity:0.6,
                                    fontSize:14
                                }}>Parallel</Text>

                                <Text style={{
                                    fontSize:13,
                                    color:"#B8B8B8",
                                    marginLeft:25
                                }}>Addis, Ethiopia</Text>
                            </View>
                            </View>
                                <View style={{
                                    backgroundColor:"#DFDFDF",
                                    height:32,
                                    width:32,
                                    borderRadius:5,
                                    marginLeft:50,
                                    marginTop:5,
                                    alignItems:"center",
                                    justifyContent:"center"
                                    }}>
                                        {/* <Image source={require('../images/favourite.png')} 
                                        style={{opacity:0.5, width:24,height:24}}/> */}

                                </View>
                              
                               
                            </View>
                                <View style={{
                                    flexDirection:"row",
                                    paddingTop:20,
                                    alignItems:"center"
                                }}>
                            </View>
                    </View>

                    <View style={{
                        flexDirection:"row",
                        marginTop:20
                    }}>
                            <View style={{
                                backgroundColor:"#FFF",
                                paddingVertical:10,
                                paddingHorizontal:10,
                                borderRadius:8,
                                width:140
                                    }}>
                                        <Text style={{
                                            color:"#B8B8B8",
                                        }}>Experiance</Text>
                                        <Text style={{
                                        }}>Minimum 2 year</Text>
                            </View>

                            <View style={{
                                backgroundColor:"#FFF",
                                paddingVertical:10,
                                paddingHorizontal:10,
                                marginLeft:35,
                                borderRadius:8,
                                width:140
                                    }}>
                                        <Text style={{
                                            color:"#B8B8B8",
                                        }}>Type</Text>
                                        <Text style={{
                                        }}>Full Time</Text>
                            </View>

                    </View>
                    <View style={{
                        backgroundColor:"#FFF",
                        borderRadius:15,
                        padding:20,
                        marginTop:20
                    }}>
                        <Text style={{
                            fontSize:20,
                            marginBottom:10
                        }}>Job Description</Text>
                        <Text style={{
                            color:"#B2B2B2",
                        }}> 
                           {}
                        </Text>
                    </View>
                    <View style={{
                        width:"100%",
                        alignItems:"flex-end"
                    }}>
                        <View style={{
                            backgroundColor:`${tabcolor}`,
                            alignItems:"center",
                            justifyContent:"center",
                            width:90,
                            height:55,
                            marginTop:30,
                            borderRadius:15,
                            padding:10
                        }}>
                            <Text style={{
                                color:"#fff",
                            }}>Apply</Text>

                        </View>

                    </View>
            </View>
        )
    }
}