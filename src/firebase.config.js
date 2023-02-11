import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDeMjxUeJ83S7XnyDioP3QN7cAASSiRo7M',
  authDomain: 'restaurant-53c61.firebaseapp.com',
  databaseURL: 'https://restaurant-53c61-default-rtdb.firebaseio.com',
  projectId: 'restaurant-53c61',
  storageBucket: 'restaurant-53c61.appspot.com',
  messagingSenderId: '835463297787',
  appId: '1:835463297787:web:5afdc9bcaf005d65a14e5e',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
