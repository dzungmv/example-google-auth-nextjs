// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDGg8nlzFJCCGI7pJa9K5AyZlsdYt0EiAc',
    authDomain: 'notes-mern.firebaseapp.com',
    projectId: 'notes-mern',
    storageBucket: 'notes-mern.appspot.com',
    messagingSenderId: '989609894267',
    appId: '1:989609894267:web:354fae7aa1ed4250879dde',
    measurementId: 'G-GDR9PHGV7B',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
