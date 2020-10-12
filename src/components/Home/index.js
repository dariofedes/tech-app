import React, { useState, useEffect } from 'react'
import {
    View,
    SafeAreaView,
    FlatList
} from 'react-native'
import styles from './styles'
import {
    Header,
    ListItem
} from '../'
import { retrieveList } from '../../client-logic'

export default function Home({ user, onLogout }) {
    const [list, setList] = useState([])

    

    useEffect(() => {
        retrieveList(list => {
            setList(list)
        }, error => alert(error.message))
    }, [])

    return (
        <>
        <SafeAreaView style={styles.upperSafeAreaView} />
        <SafeAreaView>
            <View style={styles.container}>
            <Header user={user} onLogout={onLogout} />
            {list.length > 0 && <FlatList
                style={{ width: '100%' }}
                data={list}
                renderItem={({item, index}) => <ListItem item={item} index={index} />}
                keyExtractor={(item) => item.id.toString()}
                removeClippedSubviews={true}
            />}
            </View>
        </SafeAreaView>
        </>
    )
}