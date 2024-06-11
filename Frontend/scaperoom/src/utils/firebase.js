import { initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAJXpZOldYWgPBnpl9AxHALntuy3aYttMo",
  authDomain: "reservasec-163c0.firebaseapp.com",
  projectId: "reservasec-163c0",
  storageBucket: "reservasec-163c0.appspot.com",
  messagingSenderId: "473845636499",
  appId: "1:473845636499:web:f72bc3eb58383fef14dc66",
  measurementId: "G-VD7YL7CS5J"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };