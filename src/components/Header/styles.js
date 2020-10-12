import { StyleSheet } from 'react-native'
import colorPalette from '../../../colorPalette'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: colorPalette.headerBackground,
    },
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