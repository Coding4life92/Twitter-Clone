import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAF0m0xhR3hu1y4jd4NSZTh7VIt-2OcOVg",
    authDomain: "twitter-clone-510cf.firebaseapp.com",
    databaseURL: "https://twitter-clone-510cf.firebaseio.com",
    projectId: "twitter-clone-510cf",
    storageBucket: "twitter-clone-510cf.appspot.com",
    messagingSenderId: "15598070971",
    appId: "1:15598070971:web:421d4c4086247a58648d9e",
    measurementId: "G-XC26GFPYE9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
  