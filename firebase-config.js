// ============================================================
// FIREBASE CONFIG — fill this in with your new project's keys
// ============================================================
// Where to get these values:
//   1. Go to https://console.firebase.google.com and create a new project
//      (name it something like "clippaid").
//   2. In that project: Build → Authentication → Get started →
//      enable the "Email/Password" sign-in provider.
//   3. Build → Firestore Database → Create database (start in
//      production mode, pick any region).
//   4. Project settings (gear icon) → General → scroll to
//      "Your apps" → click the </> (web) icon → register an app
//      (no need for Firebase Hosting) → copy the firebaseConfig
//      object it gives you and paste the values below.
//
// This file is loaded by both clippaid-landing.html and admin.html,
// so you only need to fill it in once.

const firebaseConfig = {
  apiKey: "AIzaSyBMhguYnuX5SVWn3AbN621ZWUTpJzhxY6k",
  authDomain: "binder-ad31c.firebaseapp.com",
  projectId: "binder-ad31c",
  storageBucket: "binder-ad31c.firebasestorage.app",
  messagingSenderId: "430644191819",
  appId: "1:430644191819:web:c71d0aa90c6e2a48da23ce"
};

firebase.initializeApp(firebaseConfig);
