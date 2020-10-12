import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import { registerUser } from '../../client-logic/'
import Button from '../Button'
import styles from './styles'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOnToLogin() {
        navigation.navigate('Login')
    }

    async function handleOnSubmit() {
        try{
            await registerUser(email, password)
        } catch(error) {
            alert(error.message)
        }
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <TextInput style={styles.textField}
                    placeholder="Email"
                    placeholderTextColor={styles.textField.placeholderColor}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                />
                <TextInput style={styles.textField}
                    placeholder="Password"
                    placeholderTextColor={styles.textField.placeholderColor}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    blurOnSubmit={false}
                    onSubmitEditing={()=> Keyboard.dismiss()}

                />
                <Button style={styles.submit} title="Sign In" onPressHandler={() => handleOnSubmit()} />
                <Text style={styles.footerText}>Already have an account? <Text style={styles.toRegister} onPress={() => handleOnToLogin()}>Log In!</Text></Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}