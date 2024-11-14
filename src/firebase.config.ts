import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBb5M07WghC_B1pizEJ4fVsO-gG8C-jyoU",
  authDomain: "com.jailton.rnlist",
  projectId: "meuApp-9c2a5",
  storageBucket: "seu-storage-bucket",
  messagingSenderId: "seu-sender-id",
  appId: "1:790504842477:android:bd3fe18825f066076d58e4"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);