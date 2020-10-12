import React from 'react'
import {
    View,
    Text
} from 'react-native'
import styles from './styles'
import { Avatar } from 'react-native-elements'

export default function ListItem({ item, index }) {
    return (
            <View style={{ ...styles.container, backgroundColor: index % 2 === 0 && '#f6f5f5' }}>
                <Avatar 
                    size="medium"
                    rounded
                    title={item.userId.toString().charAt(0)}
                    overlayContainerStyle={styles.avatarContainer}
                    titleStyle={styles.avatarTitle}
                    containerStyle={styles.avatar}
                    onPress={() => console.log("Works!")}
                />
                <View style={styles.body}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.body}</Text>
                </View>
            </View>
    )
}