import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyABMKyxkvbdjZKM_yQPiHRwIFONkFgKyQE',
  authDomain: 'phone-book-27f49.firebaseapp.com',
  projectId: 'phone-book-27f49',
  storageBucket: 'phone-book-27f49.appspot.com',
  messagingSenderId: '478478121647',
  appId: '1:478478121647:web:ec20e0e0e4b1e51bcf325a',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);
