/* firebase.js */

// 1. [수정] 'import firebase from ...' 대신 그냥 import만 합니다.
// 이렇게 하면 스크립트가 실행되면서 'window.firebase'에 자동으로 등록됩니다.
import 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js';
import 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore-compat.js';
import 'https://www.gstatic.com/firebasejs/10.7.1/firebase-storage-compat.js';

// 2. [추가] 전역에 생긴 firebase를 변수로 가져옵니다.
const firebase = window.firebase;

// 3. 설정 값 (그대로 유지)
const firebaseConfig = {
    apiKey: "AIzaSyAT54b1YO8APrWy5_wCpxqbg03nQeE41Gk",
    authDomain: "jeju-baseball.firebaseapp.com",
    projectId: "jeju-baseball",
    storageBucket: "jeju-baseball.firebasestorage.app",
    messagingSenderId: "100505081882",
    appId: "1:100505081882:web:39c3e176078cbce1d619a3",
    measurementId: "G-DYG2GXNBL3"
};

// 4. 초기화 (이미 되어있으면 건너뜀)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// 5. 내보내기 (그대로 유지)
export const storage = firebase.storage();
export const db = firebase.firestore();