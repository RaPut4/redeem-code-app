// Hapus atau ganti bagian ini dengan konfigurasi Anda sendiri
// const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
// const firebaseConfig = typeof __firebase_config !== 'undefined' ? JSON.parse(__firebase_config) : {};
// const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;

// GANTI DENGAN FIREBASE CONFIG ANDA (Dari konsol Firebase)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Vercel tidak mendukung otentikasi custom token, jadi inisialisasi ini juga perlu diganti:
// GANTI BAGIAN INI:
/*
        if (initialAuthToken) {
            signInWithCustomToken(auth, initialAuthToken).catch(error => {
                console.error("Custom token sign-in failed:", error);
                signInAnonymously(auth); // Fallback to anonymous
            });
        } else {
            signInAnonymously(auth);
        }
*/
// DENGAN INI (Untuk otentikasi normal):
/*
        signInAnonymously(auth).catch(error => {
            console.error("Anonymous sign-in failed:", error);
        });
*/
