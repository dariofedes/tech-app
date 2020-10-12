import { StyleSheet } from 'react-native'
import colorPalette from '../../../colorPalette'

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 40
    },
    textField: {
        width: '65%',
        height: 40,
        borderWidth: .5,
        borderRadius: 5,
        borderColor: colorPalette.border ,
        marginVertical: 10,
        padding: 10,
        fontSize: 20,
        color: colorPalette.text

    },
    submit: {
        marginVertical: 30
    },
    footerText: {
        fontSize: 15,
        color: colorPalette.text
    },
    toRegister: {
        color: colorPalette.click
    }
})

export default styles