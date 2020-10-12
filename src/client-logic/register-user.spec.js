
import { registerUser } from './'
import { firebase } from '../firebase'
import * as admin from 'firebase-admin'

describe('registerUser', () => {
    beforeAll( async () => {
        jest.setTimeout(10000)
        admin.initializeApp({ credential: admin.credential.applicationDefault() })

        // Clear users from Auth
        const { users }  = await admin.auth().listUsers()
        const uidsArray = users.map(user => user.uid)
        await admin.auth().deleteUsers(uidsArray)

        // Clear users from Firestore
        const usersData = await admin.firestore().collection('users').get()
        const batch = admin.firestore().batch()
        usersData.forEach(document => batch.delete(document.ref))
        await batch.commit()
    })

    describe('On valid Fields', () => {
        let email, password

        beforeEach(async () => {
            email = `email-${Math.random()}@mail.com`
            password = `password-${Math.random()}`
        })

        it('Should not fail', async () => {
            let _error

            try {
                await registerUser(email, password)
            } catch(error) {
                _error = error
            }

            expect(_error).not.toBeDefined()
        })

        it('Should return the user\'s data', async () => {
            const userData = await registerUser(email, password)

            expect(userData.email).toBe(email)
            expect(userData.username).toBe(email.split('@')[0])
        })
        it('Should save user\'s data in database', async () => {
            const { id } = await registerUser(email, password)

            const doc = await admin.firestore().collection('users').doc(id).get()

            const user = doc.data()

            expect(user.email).toBe(email)
            expect(user.id).toBe(id)
        })
    })

    describe('On non valid fields', () => {
        let email, password

        beforeEach(async () => {
            email = `email-${Math.random()}@mail.com`
            password = `password-${Math.random()}`
        })

        it('Should fail on non valid email', async () => {
            email = `${email} non  valid email`
            let _error

            try {
                await registerUser(email, password)
            } catch(error) {
                _error = error
            }

            expect(_error).toBeDefined()
            expect(_error.message).toBe(`${email} is not an email`)
        })
    })

    afterAll(async () => {
        // Clear users from Auth
        const { users }  = await admin.auth().listUsers()
        const uidsArray = users.map(user => user.uid)
        await admin.auth().deleteUsers(uidsArray)

        // Clear users from Firestore
        const usersData = await admin.firestore().collection('users').get()
        const batch = admin.firestore().batch()
        usersData.forEach(document => batch.delete(document.ref))
        await batch.commit()

        firebase.app().delete()
        admin.app().delete()
    })

})