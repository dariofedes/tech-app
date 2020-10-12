import { StyleSheet } from 'react-native'
import colorPalette from '../../../colorPalette'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10
    },
    avatar: {

    },
    avatarContainer: {
        backgroundColor: colorPalette.headerBackground
    },
    avatarTitle: {
        
    },
    body: {
        paddingVertical: 10,
        marginHorizontal: 20,
        flexShrink: 1
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colorPalette.text,
    },
    description: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '200',
        color: colorPalette.text
    }
})

export default styles