<template>
  <div class="section container">
    <div class="buttons">
      <b-button @click="newListing()">Create New Listing</b-button>
      <router-link to="/information"><b-button>Edit My Information</b-button></router-link>
    </div>
    <div class="section card" v-for="(posting, index) in postings" :key="posting.key">
      <b-field label="Job Title">
      <b-input v-model="posting.name"></b-input>
      </b-field>
      <b-field label="Job Description">
          <b-input v-model="posting.contact"></b-input>
      </b-field>
      <b-field label="Skills (enter to seperate)">
        <b-input v-model="posting.skills"></b-input>
      </b-field>

      <div class="section card" style="margin: 10px;" v-for="candidate in posting.candidates" :key="candidate.key">
        <a @click="externalLink(candidate.linkedIn)">{{candidate.name}}</a>
        Contact: {{candidate.contact}}
      </div>
      
      <div class="buttons">
        <b-button @click="listCandidates(posting.key, index)">List Candidates</b-button>
        <b-button @click="save(posting.key, index)">Save</b-button>
        <b-button @click="del(posting.key, index)">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'MyPostings',
  data(){
    return {
      postings: []
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
      console.log(doc.data());
      var d = doc.data();
      var name = d.name;
      firebase.firestore().collection("postings").where("companyName", "==", name).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var data = doc.data();
          console.log(doc.id)
          data.key = doc.id;
          data.candidates = []
          this.postings.push(data);
        })
      })
    })

  },
  methods: {
    listCandidates(key, index){
      firebase.firestore().collection("postings").doc(key).collection("candidates").get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var candidate = doc.data();
          candidate.key = doc.id;
          this.postings[index].candidates.push(candidate);
        })
      })
    },
    save(key, index){
      firebase.firestore().collection("postings").doc(key).update(this.postings[index]);
    },
    del(key, index){
      firebase.firestore().collection("postings").doc(key).delete().then(() => {
        this.postings.splice(index, 1);
      })
    },
    newListing(){
      this.$router.push("/new");
    },
    externalLink(whereto){
      window.location = whereto
    }
  }
}
</script>
