import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmIbI1qj7pPIilW3JjPIoZTp0dacGTj5g",
  authDomain: "zero2aura-eaebd.firebaseapp.com",
  projectId: "zero2aura-eaebd",
  storageBucket: "zero2aura-eaebd.firebasestorage.app",
  messagingSenderId: "481938087880",
  appId: "1:481938087880:web:62290fda77edc9ec74aafd",
  measurementId: "G-7H7G8PSQCP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export { analytics };
export default app;
