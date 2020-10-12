import { firebase } from '../firebase'
import { validate } from '../utils'

/**
 * Registers a user and keeps his data in the database
 * @param {string} email 
 * @param {string} password 
 */

export default function registerUser(email, password) {
    validate.email(email)
    validate.string(password, 'password')

    const usersRef = firebase.firestore().collection('users')

    const username = email.split('@')[0]

    return (async () => {
        const { user: { uid } } = await firebase.auth().createUserWithEmailAndPassword(email, password)

        const userData = {
            id: uid,
            email,
            username
        }

        await usersRef.doc(uid).set(userData)

        return userData
    })()
}