import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import {
    UserDisplay,
    Button
} from '../'
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont()

export default function Header({ user, onLogout }) {


    return (
        <View style={styles.container}>
            <UserDisplay user={user} />
            <Button
                title={<Text>Logout <Icon name="sign-out" /></Text>}
                onPressHandler={() => onLogout()}
                danger
            />
        </View>
    )
}