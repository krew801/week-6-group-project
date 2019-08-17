// variables
var firebaseConfig = {
    apiKey: "AIzaSyDEUBOwplKpkajTp_gNP2hCXzy4IWKj6SU",
    authDomain: "project-1-2019-6bd23.firebaseapp.com",
    databaseURL: "https://project-1-2019-6bd23.firebaseio.com",
    projectId: "project-1-2019-6bd23",
    storageBucket: "project-1-2019-6bd23.appspot.com",
    messagingSenderId: "1013960643985",
    appId: "1:1013960643985:web:d0b61bc128518812"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


// database.ref().set({
//     clickCount: "clickCounter"
// });


var authKey = "cXA4vpZTUnQL41dQN9Bs3NcL17qrEfOb";

var searchTerm = "";
var numRecords = 0;
var startYear = 0;
var endYear = 0;

// url and api key
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=" + authKey;

// variable for number of articles
var articleCounter = 0;


$.ajax({ url: queryURLBase, method: "GET" })
    .then(function(result) {

        // for (var i = 0; i < numArticles; i++) {
        console.log(queryURLBase);
        // }


    });