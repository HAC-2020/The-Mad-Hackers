<template>
  <div class="section">
    <h1 class="title is-3">Admin/Company Login/Signup</h1>
    <b-field label="Email">
      <b-input v-model="email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" v-model="password" password-reveal></b-input>
    </b-field>
    <p>{{errorMessage}}</p>
    <div class="buttons">
    <b-button @click="login">Login</b-button>
    <b-button @click="signup">Signup</b-button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Login',
  data(){
    return {
      email: null, 
      password: null,
      errorMessage: null
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
    if(firebase.apps.length === 0){
          firebase.initializeApp(firebaseConfig);
    }
  },
  methods:{
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.push('/');
      }).catch(error => {
        this.errorMessage = error.message;
      })
    },
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(() => {
        this.$router.push('/information');
        firebase.firestore().collection("companies").doc(firebase.auth().currentUser.uid).set({})
      }).catch(error => {
        this.errorMessage = error.message;
      })
    }
  }
}
</script>
