
import { authenticateUser } from './'
import { firebase } from '../firebase'
import * as admin from 'firebase-admin'

describe('authenticateUser', () => {
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

            await admin.auth().createUser({ email, password })
        })

        it('Should not fail on correct credentials', async () => {
            let _error

            try {
                await authenticateUser(email, password)
            } catch(error) {
                _error = error
            }

            expect(_error).not.toBeDefined()
        })

        it('Should fail on wrong credentials', async () => {
            email = `wrong-${email}`
            let _error

            try {
                await authenticateUser(email, password)
            } catch(error) {
                _error = error
            }

            expect(_error).toBeDefined()
            expect(_error.message).toBe('Wrong email or password.')
        })

        it('Should not give any feedback on which one is wrong', async () => {
                let _error
    
                try {
                    await authenticateUser(`wrong--${email}`, password)
                } catch(error) {
                    _error = error
                }
    
                expect(_error).toBeDefined()
                expect(_error.message).toBe('Wrong email or password.')

                try {
                    await authenticateUser(email, `wrong--${password}`)
                } catch(error) {
                    _error = error
                }
    
                expect(_error).toBeDefined()
                expect(_error.message).toBe('Wrong email or password.')

                try {
                    await authenticateUser(`wrong--${email}`, `wrong--${password}`)
                } catch(error) {
                    _error = error
                }
    
                expect(_error).toBeDefined()
                expect(_error.message).toBe('Wrong email or password.')
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
                await authenticateUser(email, password)
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