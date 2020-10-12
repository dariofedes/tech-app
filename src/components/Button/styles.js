import { StyleSheet } from 'react-native'
import colorPalette from '../../../colorPalette'

const styles = StyleSheet.create({
    button:{
        minWidth: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 10,
        backgroundColor: colorPalette.click,
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF'
    }

})

export default styles