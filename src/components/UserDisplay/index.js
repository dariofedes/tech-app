import React, { useContext } from 'react'
import {
    Text,
    View
} from 'react-native'
import { Avatar } from 'react-native-elements'
import styles from './styles'
import { Context } from '../'


export default function UserDisplay() {
    const [state, setState] = useContext(Context)

    const { user } = state
    
    return user && (
        <View style={styles.container}>
            <Avatar
                size="medium"
                rounded
                title={user.username.charAt(0)}
                overlayContainerStyle={styles.avatarContainer}
                titleStyle={styles.avatarTitle}
                containerStyle={styles.avatar}
            >
            </Avatar>
            <Text style={styles.username}>{user.username}</Text>
        </View>
    )
}