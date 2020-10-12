import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import colorPalette from '../../../colorPalette'

export default function Button({ title, onPressHandler, style, danger }) {
    return (
        <TouchableOpacity style={{ ...styles.button, ...style, backgroundColor: danger ? colorPalette.dangerButton : colorPalette.click}}
            onPress={() => onPressHandler()}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}