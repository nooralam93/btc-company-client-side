/* const firebaseConfig = {
    apiKey: "AIzaSyBO5jHb4r25trcobOa9ny3BCgMaeuuv1gM",
    authDomain: "btc-company.firebaseapp.com",
    projectId: "btc-company",
    storageBucket: "btc-company.appspot.com",
    messagingSenderId: "5215802933",
    appId: "1:5215802933:web:0376a4299e75006bd8837c"
};
export default firebaseConfig; */


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
export default firebaseConfig;