import { StyleSheet } from 'react-native'
import colorPalette from '../../../colorPalette'

const styles = StyleSheet.create({
    upperSafeAreaView: {
        flex: 0,
        backgroundColor: colorPalette.headerBackground
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemContainer:{
        marginVertical: 5,
        marginHorizontal: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    title: {
        fontSize: 20
    }

})

export default styles