var firebaseConfig = {
    apiKey: "AIzaSyA8LswR7kHUtJwPpRpRW32VhysuTdGlhDU",
    authDomain: "thanujaa-s-kwitter-app.firebaseapp.com",
    databaseURL: "https://thanujaa-s-kwitter-app-default-rtdb.firebaseio.com",
    projectId: "thanujaa-s-kwitter-app",
    storageBucket: "thanujaa-s-kwitter-app.appspot.com",
    messagingSenderId: "51708904965",
    appId: "1:51708904965:web:e92c777a9506885690fe6c",
    measurementId: "G-Y0B74MFY1S"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send() {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name: user_name, 
              message : msg,
              like : 0
        });
  }