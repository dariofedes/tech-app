
import { retrieveList } from './'
import { firebase } from '../firebase'
import * as admin from 'firebase-admin'

describe('retrieveList', () => {
    beforeAll( async () => {
        jest.setTimeout(10000)
        admin.initializeApp({ credential: admin.credential.applicationDefault() })

        // Clear list from Firestore
        const list = await admin.firestore().collection('list').get()
        const batch = admin.firestore().batch()
        list.forEach(document => batch.delete(document.ref))
        await batch.commit()
    })

    

    it('Should retrieve an array', async (done) => {
        const unsubscribe = await retrieveList(list => {
            expect(list).toBeInstanceOf(Array)
            unsubscribe()
            done()
        })
    })

    it('Should retrieve the list collection', async (done) => {
        await admin.firestore().collection('list').doc().set({ foo: 'bar' })

        const unsubscribe = retrieveList(list => {
            expect(list.length).toBe(1)
            expect(list[0].foo).toBe('bar')
            unsubscribe()
            done()
        })
    })

    it('If list is empty it should fill it', (done) => {
        const unsubscribe = retrieveList(async () => {
            const snapshot = await admin.firestore().collection('list').get()
            expect(snapshot._size).toBe(100)
            unsubscribe()
            done()
        })
    })

    afterEach( async () => {
        // Clear list from Firestore
        const list = await admin.firestore().collection('list').get()
        const batch = admin.firestore().batch()
        list.forEach(document => batch.delete(document.ref))
        await batch.commit()
    })

    afterAll(async () => {
        // Clear list from Firestore
        const list = await admin.firestore().collection('list').get()
        const batch = admin.firestore().batch()
        list.forEach(document => batch.delete(document.ref))
        await batch.commit()

        firebase.app().delete()
        admin.app().delete()
    })

})