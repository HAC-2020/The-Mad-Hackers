<template>
  <div class="container">
    <div class="buttons">
      <b-button @click="newListing()">Create New Listing</b-button>
      <router-link :to="MyInformation"><b-button>Edit My Information</b-button></router-link>
    </div>
    <div class="section" v-for="(posting, index) in postings" :key="posting.key">
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
        <b-button @click="listCandidates(posting.key, index)">List Candidates</b-button>
        <b-button @click="save(posting.key, index)">Save</b-button>
        <b-button @click="del(index)">Delete</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPostings',
  data: {
    postings: [],
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
      var email = d.email;
      firebase.firestore().collection("postings").where("companyEmail", "==", email).get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          var data = doc.data();
          data.key = doc.key;
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
          this.postings[index].push(candidate);
        })
      })
    },
    save(key, index){
      firebase.firestore().collection("postings").doc(key).update(this.postings[index]);
    },
    del(key, index){
      firebase.firestore().collection("postings").delete().then(() => {
        this.postings.splice(index, 1);
      })
    },
    newPosting(){
      this.$router.push("NewPosting");
    }
  }
}
</script>
