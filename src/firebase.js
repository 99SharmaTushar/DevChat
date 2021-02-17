import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyCD0bFgP12d_I_gkCIPq32__1o-6RS_TvI",
    authDomain: "react-slack-clone-3f3d0.firebaseapp.com",
    databaseURL: "https://react-slack-clone-3f3d0-default-rtdb.firebaseio.com/",
    projectId: "react-slack-clone-3f3d0",
    storageBucket: "react-slack-clone-3f3d0.appspot.com",
    messagingSenderId: "49676054566",
    appId: "1:49676054566:web:2bedd08cd7468816e3f6e7",
    measurementId: "G-CL00N4DWCW"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;