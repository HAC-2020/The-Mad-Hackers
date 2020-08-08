<template>
  <div class="container">
    <h1 class="title is-3">Admin/Company Login/Signup</h1>
    <b-field label="Email">
      <b-input v-model="email"></b-input>
    </b-field>
    <b-field label="Password">
      <b-input type="password" v-model="password" password-reveal></b-input>
    </b-field>
    <p>{{errMessage}}</p>
    <div class="level">
    <b-button @click="login">Login</b-button>
    <b-button @click="signup">Signup</b-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data:{
    email: null, 
    password: null,
    errMessage: null
  },
  created(){
    firebase.auth().onAuthStateChanged(user => {
      this.$router.push('MyPostings');
    })
  },
  methods:{
    login(){
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(error => {
        this.errMessage = error.message;
      })
    },
    signup(){
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(error => {
        this.errMessage = error.message;
        this.$router.push('MyPostings')
      })
    }
  }
}
</script>
