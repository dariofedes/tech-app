import React from 'react'
import {
    View,
    Image,
    Text
} from 'react-native'
import styles from './styles'

export default function Logo() {
    return (
            <View style={styles.logo}>
                <Image style={styles.logoImage} source={require('../../../assets/icon.png')} />
                <Text style={styles.logoText}>gimmeLists!</Text>
            </View>
    )
}