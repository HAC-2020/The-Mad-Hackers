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
  data: () => ({
    information: {
        name: null,
        contact: null,
        linkedIn: null,
        description: null,
        website: null
    }
  }),
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
      this.information = d;
    })


  },
  methods: {
    save(){
        firebase.firestore().collection("companies").doc(firebase.auth().currentUser.uid).update(this.infomration);
    }
  }
}
</script>