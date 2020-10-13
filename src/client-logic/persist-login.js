import { firebase } from '../firebase'
/**
 * Activates a listener that keeps the user logged in when the app is closed
 * 
 * @param {function} onSuccess 
 * @param {function} onError 
 */

export default function persistLogin(onSuccess, onError) {
    

    firebase.auth().onAuthStateChanged(async user => {
        let userData = null
        if(user) {
            const db = firebase.firestore();
            db.settings({ experimentalForceLongPolling: true })
            
            const usersRef = db.collection('users')
            const document = await usersRef.doc(user.uid).get()

            if(document.exists) {
                userData = document.data()
            } else {
                firebase.auth().signOut()

                onError(new Error("This user does not exist anymore"))
            }
        }

        onSuccess(userData)
            
    }, error => onError(error))
}