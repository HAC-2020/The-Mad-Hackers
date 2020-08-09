import React, { Component } from 'react';
import {Label, Container, Header, Content, Form, Item, Input, Button, Left, Textarea} from 'native-base';
import {Text, Icon, Dimensions, Image, View, StatusBar} from 'react-native'
import { StyleSheet } from 'react-native';
const themecolor = '#fff'
const tabcolor = '#5271ff'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class FormExample extends Component {
  state = {
    photo: null,
    submissionStatus: false,
    victim: '',
    title: '',
    location: '',
    time: '',
    description: '', 
    victimizer: '',
    profession: '',
    raceofvictimizer: '',
    race: '',
    date: '',
  };

  submissionHandler = () => {

    fetch(`https://heard-9d06a.firebaseio.com/${this.state.victim}.json`, {
        method: 'POST',
        body: JSON.stringify({
          victim: this.state.victim,
          title: this.state.title,
          location: this.state.location,
          time: this.state.time, 
          description: this.state.description, 
          victimizer: this.state.victimizer,
          profession: this.state.profession,
          raceofvictimizer: this.state.raceofvictimizer,
          date: this.state.date,
          race: this.state.race,
        })
      })

    this.setState({
      submissionStatus: true,
      victim: '',
      title: '',
      location: '',
      time: '',
      description: '', 
      victimizer: '',
      profession: '',
      date: '',
      race: '',
      raceofvictimizer: '',
    }) 
    console.log(this.state)
    setTimeout(() => {
        this.props.navigation.goBack()
    }, 2000)
  }

  onChangeTextVictim = (text) => {
    this.setState({
      victim: text,
    })
  }
  onChangeTextTitle = (text) => {
    this.setState({
      title: text,
    })
  }
  onChangeTextLocation = (text) => {
    this.setState({
      location: text,
    })
  }
  onChangeTextTime = (text) => {
    this.setState({
      time: text,
    })
  }
  onChangeTextDescription = (text) => {
    this.setState({
      description: text,
    })
  }
  onChangeVictimizer = (text) => {
    this.setState({
      victimizer: text,
    })
  }
  onChangeTextProfession = (text) => {
    this.setState({
      profession: text,
    })
  }
  onChangeTextTime = (text) => {
    this.setState({
      time: text,
    })
  }
  onChangeTextDate = (text) => {
    this.setState({
      date: text,
    })
  }
  onChangeTextRace = (text) => {
    this.setState({
      race: text,
    })
  }
  onChangeTextRaceOfVictimizer = (text) => {
    this.setState({
      raceofvictimizer: text,
    })
  }
  _getLocationAsync = async () => {
   
    
    if(status === 'granted'){
      this.setState({ location});
      fetch('https://emergencyhelper-b6c9e.firebaseio.com/places.json', {
        method: 'POST',
        body: JSON.stringify({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      })
    }
    else{
      Alert.alert('Location services has not been enabled. Please go to the Settings and enable it.')
    }
  };

  render() {
    const {photo, submissionStatus} = this.state

    return (
      <Container>
        <Content>
        <StatusBar barStyle="dark-content" translucent/>
        <Text style={{fontSize: 16, paddingLeft: 10, marginBottom: 10, paddingTop: 20}}>Complaint Form:   </Text>
        <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 140,
                marginBottom: 10
            }}
            />
          <Form>
            <Item stackedLabel>
              <Label>Full Name</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextVictim}/>
            </Item>
            <Item stackedLabel>
              <Label>LinkedIn</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextRace}/>
            </Item>
            <Item stackedLabel>
              <Label>Contact Details</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextTitle}/>
            </Item>
            
           <Item>
           <Text style={{}}></Text>
           </Item>
            <Button style={{backgroundColor: `${tabcolor}`, alignSelf: "stretch"}} onPress={this.submissionHandler}>
              <Text style={{color: `${themecolor}`, textAlign: 'center', paddingLeft: 200}}>Submit</Text>
              </Button>
              {
              submissionStatus && (<Text style={FormStyles.success}>
                Submitted!
              </Text>)}
          </Form>
        </Content>
      </Container>
    );
  }
}

const FormStyles = StyleSheet.create({
  formInput: {
    padding: 10,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    color: '#000'
  },
  success: {
    color: '#4bb543'
  }
})