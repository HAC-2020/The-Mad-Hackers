<template>
  <div class="container">
    <h1 class="title is-3">Information About Your Company</h1>
    <b-field label="Company Name">
      <b-input v-model="information.name"></b-input>
    </b-field>
    <b-field label="Contact Email">
        <b-input v-model="information.contact"></b-input>
    </b-field>
    <b-field label="LinkedIn for Your Company">
      <b-input v-model="information.linkedIn"></b-input>
    </b-field>
    <b-field label="Description">
      <b-input v-model="information.description"></b-input>
    </b-field>
    <b-field label="Company Website">
        <b-input v-model="information.website"></b-input>
    </b-field>
    <b-button @click="save" :disabled="information.name ==  null || information.contact == null || information.linkedIn == null || information.description == null || information.website == null">Save</b-button>
</div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'MyInformation',
  data(){
    return {
      information: {
        name: null,
        contact: null,
        linkedIn: null,
        description: null,
        website: null
      }
    }
  },
  created(){
    var firebaseConfig = {
    apiKey: "AIzaSyAWnWmesrGAEnm8khsANTCLiivFHhC4LtI",
    authDomain: "lean-job-finder.firebaseapp.com",
    databaseURL: "https://lean-job-finder.firebaseio.com",
    projectId: "lean-job-finder",
    storageBucket: "lean-job-finder.appspot.com",
    messagingSenderId: "481800294263",
    appId: "1:481800294263:web:4aa800218f2bd905729b72"
  };
    if(firebase.apps.length == 0){
          firebase.initializeApp(firebaseConfig);
    }
    if(!firebase.auth().currentUser){
      this.$router.push("/login");
    }

    firebase.firestore().collection("companies").doc(firebase.auth().currentUser.uid).get().then((doc) => {
      console.log(doc);
      var d = doc.data();
      this.information = d;
    })


  },
  methods: {
    save(){
        firebase.firestore().collection("companies").doc(firebase.auth().currentUser.uid).update(this.infomration);
        this.$router.push("/");
    }
  }
}
</script>