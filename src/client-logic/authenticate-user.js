import { firebase } from '../firebase'
import { validate } from '../utils'

/**
 * 
 * @param {string} email 
 * @param {string} password 
 */

export default function authenticateUser(email, password) {
    validate.email(email)
    validate.string(password, 'password')

    return (async () => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
        } catch(error) {
            let message

            switch(error.code) {
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    message = 'Wrong email or password.'
                    break;
                case 'auth/network-request-failed':
                    message = 'Network error. Check your network connection'
                    break;
                default:
                    message = 'Unknown error. Try again in a few minutes, we are working to fix it :)'
                    break;
            }

            throw new Error(message)
        }
    })()
}