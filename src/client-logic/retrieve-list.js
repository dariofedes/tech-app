import axios from 'axios'
import { firebase } from '../firebase'
import { FILL_DATABASE_URL } from '../../config'


/**
 * Activates a listener that updates the list in real time
 * @param {function} onSuccess 
 * @param {function} onError 
 */

export default function retrieveList(onSuccess, onError) {
    const db = firebase.firestore();
    db.settings({ experimentalForceLongPolling: true })

    const listRef = db.collection('list')
    
    const unsubscribe = listRef.onSnapshot(snapshot => {
        const list = [ ]

        snapshot.forEach((doc) => list.push(doc.data()))

        if(!list.length) axios.post(FILL_DATABASE_URL)
        
        onSuccess(list)
    }, error => onError(error))

    return unsubscribe
}