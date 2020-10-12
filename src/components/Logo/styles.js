import { StyleSheet } from 'react-native'
import colorPalette from '../../../colorPalette'

const styles = StyleSheet.create({
    logo: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoImage: {
        width: 50,
        height: 50
    },
    logoText: {
        marginLeft: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: colorPalette.text
    }
})

export default styles