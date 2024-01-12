// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDI2Ual9MuVduROYam-25OxjfjllxOF0zY',
  authDomain: 'todo-app-2024.firebaseapp.com',
  projectId: 'todo-app-2024',
  storageBucket: 'todo-app-2024.appspot.com',
  messagingSenderId: '603463370957',
  appId: '1:603463370957:web:34ba8368ede75f18bcc184',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
