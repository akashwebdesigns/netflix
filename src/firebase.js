import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAr1hbxmm7vjiIk2kQAj5nXIf6a0Lys2Lw",
    authDomain: "netflix-clone-21f75.firebaseapp.com",
    projectId: "netflix-clone-21f75",
    storageBucket: "netflix-clone-21f75.appspot.com",
    messagingSenderId: "269218099259",
    appId: "1:269218099259:web:7e78f3e8f24047a554ec1e"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;