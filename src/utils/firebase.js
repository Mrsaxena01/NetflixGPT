// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBiFd1XL-DPCyRx3RvYhG7mkKLE00ztRf0',
    authDomain: 'netflixgpt-16177.firebaseapp.com',
    projectId: 'netflixgpt-16177',
    storageBucket: 'netflixgpt-16177.firebasestorage.app',
    messagingSenderId: '297578492659',
    appId: '1:297578492659:web:b94d2056fe1f003f94fd86',
    measurementId: 'G-XVWD281419',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
