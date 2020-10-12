import React, { useState } from 'react'
import { Text, SafeAreaView, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native'
import Button from '../Button'
import styles from './styles'
import colorPalette from '../../../colorPalette'
import { authenticateUser } from '../../client-logic'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleOnToRegister() {
        navigation.navigate('Register')
    }

    async function handleOnSubmit() {
        try{
            await authenticateUser(email, password)
        } catch(error) {
            alert(error.message)
        }
    }

    return (
        <SafeAreaView style={{ width: '100%' }}>
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
                <TextInput style={styles.textField}
                    placeholder="Email"
                    placeholderTextColor={colorPalette.placeholder}
                    value={email}
                    onChangeText={text => setEmail(text)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='email-address'
                />
                <TextInput style={styles.textField}
                    placeholder="Password"
                    placeholderTextColor={colorPalette.placeholder}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    blurOnSubmit={false}
                    onSubmitEditing={()=> Keyboard.dismiss()}
                />
                <Button style={styles.submit}
                    title="Log In"
                    onPressHandler={() => handleOnSubmit()}
                />
                <Text style={styles.footerText}>Don't have an account? <Text style={styles.toRegister} onPress={() => handleOnToRegister()}>Sign In!</Text></Text>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}