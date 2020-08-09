import * as React from 'react';
import {TextInput, Modal, View, Button, StyleSheet, Text, Alert, StatusBar} from 'react-native';
import MapView from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import {IconButton, Colors} from 'react-native-paper'

const themecolor = '#fff'
const tabcolor = '#5271ff'

const GOOGLE_MAPS_APIKEY = 'AIzaSyCUFZ6i7YdM3X2HEUcnFK_CNq_VfKsr4eI'
export default class Search extends React.Component {
  state = {
    location: null,
    userPlaces: [],
    helpStatus: false,
  }

  componentDidMount(){
    this._getLocationAsync();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    
    if(status === 'granted'){
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ location});
    //   fetch('https://emergencyhelper-b6c9e.firebaseio.com/places.json', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       latitude: location.coords.latitude,
    //       longitude: location.coords.longitude,
    //     })
    //   })
     }

    else{
      Alert.alert('Location services has not been enabled. Please go to the Settings and enable it.')
    }
  };

  getUserPlacesHandler = () => {
    fetch('https://emergencyhelper-b6c9e.firebaseio.com/places.json')
      .then(res => res.json())
      .then (parsedRes => {
        const placesArray =[];
        for (const key in parsedRes){
          placesArray.push({
            latitude: parsedRes[key].latitude,
            longitude: parsedRes[key].longitude,
            id: key
          })
        }
        this.setState({
          userPlaces: placesArray
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    const usersMarkers = this.state.userPlaces.map(
      userPlace => <MapView.Marker coordinate={userPlace} key={userPlace.id}/>)
    return (
      <View style={styles.container}>
        { 
          this.state.location ? 
          <MapView 
          style={{flex:1}} 
          initialRegion={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421, 
          }}
        >
            <MapView.Marker
            coordinate={this.state.location.coords}
            title="You are here."
            description="Your Current Location."
            image={require('../assets/current.png')}
            />
            {/* <MapView.Marker
            coordinate={coordinates[1]}
            title="Destination"
            description="Your Destinations Location."
            image={!this.state.helpStatus ? require('../assets/ai2.png') : '../assets/alert.png'}
            />
            <MapViewDirections
                  origin={coordinates[0]}
                  destination={coordinates[1]}
                  apikey={GOOGLE_MAPS_APIKEY}
                  stroke={3}
                  strokeColor="hotpink"
            /> */}
          {usersMarkers}
          </MapView>
        :
        //null
        <Text style={styles.loading}>Finding Location...</Text> 
        }
        {/* <UserMap  
        userLocation={this.state.userLocation}
        userPlaces={this.state.userPlaces}
        /> */}
       <View style={styles.search}> 
         <TextInput
              placeholder="Find low skill jobs near a certain area"
              placeholderTextColor="#D3D3D3"
              autoCapitalize="none"
              style={{flex: 1, padding: 0}}
          /> 
          <IconButton
          icon="check"
          color= {tabcolor}
          size={20}
          onPress={() => 
            this.props.navigation.push('Details')}
          />
       </View>
       <StatusBar barStyle="dark-content" translucent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  loading: {
    fontSize: 40,
    alignSelf: 'center'
  },
  search: {
    flex: 1,
    position:'absolute', 
    top: 0,
    marginTop: Platform.OS === 'ios' ? 40 : 20, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  }
});