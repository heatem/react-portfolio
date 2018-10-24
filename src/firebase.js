import firebase from 'firebase'

const config = {
	apiKey: "AIzaSyBIPWvEEjSm1tiQmafOAmvc_wtml7BTRHE",
    authDomain: "projects-8a33b.firebaseapp.com",
    databaseURL: "https://projects-8a33b.firebaseio.com",
    projectId: "projects-8a33b",
    storageBucket: "",
    messagingSenderId: "790803185870"
};
firebase.initializeApp(config);
export default firebase;