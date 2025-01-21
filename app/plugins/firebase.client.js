import { initializeApp } from "firebase/app";
import { getFirestore }  from "firebase/firestore"

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
    apiKey: "AIzaSyDAHb-SoDG7DDCmoF8gGIT7-OKQtx8J1lk",
    authDomain: "tiretechsolutions-662ec.firebaseapp.com",
    projectId: "tiretechsolutions-662ec",
    storageBucket: "tiretechsolutions-662ec.firebasestorage.app",
    messagingSenderId: "352410690400",
    appId: "1:352410690400:web:aad262f65c4f77cc717405",
    measurementId: "G-K9WL7DDHJH"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app)

    return {
        provide: {
            db
        }
    }
})