<template>
  <div class="container">

    <div class="section">
      <b-field label="Job Title">
      <b-input v-model="posting.name"></b-input>
      </b-field>
      <b-field label="Job Description">
          <b-input v-model="posting.contact"></b-input>
      </b-field>
      <b-field label="Skills (enter to seperate)">
        <b-input v-model="posting.skills"></b-input>
      </b-field>

      <div class="section" v-for="candidate in posting.candidates" :key="candidate.key">
        <a href="candidate.linkedIn">{{candidate.name}}</a>
      </div>
      
      <div class="buttons">
        <b-button @click="save()">Save</b-button>
        <router-link :to="MyPostings"><b-button @click="cancel()">Cancel</b-button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPosting',
  data: {
    posting: {
        name: null,
        description: null,
        skills: null,
        companyName: null,
        companyContact: null,
        companyWebsite: null,
        companyDescription: null,
        companyLinkedIn: null
    },
    company: {}
  },
  created(){
        const firebaseConfig = {
      apiKey: "AIzaSyD2HZX8KeYTbeNMA9G4Q79jT2fvWTnRjM8",
      authDomain: "mentorme-896c4.firebaseapp.com",
      databaseURL: "https://mentorme-896c4.firebaseio.com",
      projectId: "mentorme-896c4",
      storageBucket: "mentorme-896c4.appspot.com",
      messagingSenderId: "877888191358",
      appId: "1:877888191358:web:403a86f068e94d2a00512f",
      measurementId: "G-P7M2C1M8DQ"
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
      firebase.firestore().collection("postings").doc(key).update(this.posting);
    }
  }
}
</script>
