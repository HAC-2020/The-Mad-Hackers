<template>
  <div class="container">

    <div class="section">
      <b-field label="Job Title">
      <b-input v-model="posting.name"></b-input>
      </b-field>
      <b-field label="Job Description">
          <b-input v-model="posting.contact"></b-input>
      </b-field>
      <b-field label="Skills (comma to seperate)">
        <b-input v-model="posting.skills"></b-input>
      </b-field>

      <div class="section" v-for="candidate in posting.candidates" :key="candidate.key">
        <a href="candidate.linkedIn">{{candidate.name}}</a>
      </div>
      
      <div class="buttons">
        <b-button @click="save()">Save</b-button>
        <router-link to="/"><b-button @click="cancel()">Cancel</b-button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'NewPosting',
  data(){
    return {
      posting: {
          name: null,
          description: null,
          skills: null,
          companyName: null,
          companyContact: null,
          companyWebsite: null,
          companyDescription: null,
          companyLinkedIn: null
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
    if(firebase.apps.length === 0){
          firebase.initializeApp(firebaseConfig);
    }
    if(!firebase.auth().currentUser){
      this.$router.push("/login");
    }

    firebase.firestore().collection("companies").doc(firebase.auth().currentUser.uid).get().then((doc) => {
      console.log(doc);
      var d = doc.data();
      this.posting.company = d;
      this.posting.companyName = d.name;
      this.posting.companyContact = d.contact;
      this.posting.companyWebsite = d.website;
      this.posting.companyDescription = d.description;
      this.posting.companyLinkedIn = d.linkedIn;
    })

  },
  methods: {
    save(key, index){
      firebase.firestore().collection("postings").add(this.posting).then(() => {
        this.$router.push("/")
      });
    }
  }
}
</script>
