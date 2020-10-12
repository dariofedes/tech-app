import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'
import { firebaseConfig } from './'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export default firebase