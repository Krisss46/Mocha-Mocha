import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyBev4EkwDJxEG_-fhNRODxnu4IkkO2DFSI",
  authDomain: "mocha-mocha.firebaseapp.com",
  projectId: "mocha-mocha",
  storageBucket: "mocha-mocha.firebasestorage.app",
  messagingSenderId: "1006139651547",
  appId: "1:1006139651547:web:0c24aa49ee9cce8a9463fe",
  measurementId: "G-717F69WF4G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);