import { StyleSheet } from 'react-native'
import colorPalette from '../../../colorPalette'

const styles = StyleSheet.create({
    container:{
        height: 70,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colorPalette.headerBackground,
    },
    username: {
        fontSize: 25,
        color: colorPalette.lightText,
        marginLeft: 5
    },
    avatar: {

    },
    avatarContainer: {
        backgroundColor: 'grey'
    }

})

export default styles