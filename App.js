import React, { useState, useEffect, useContext } from 'react'
import {
  	View,
	ActivityIndicator
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {
	Home,
	Login,
	Register,
	Context,
	useContextProvider
} from './src/components'
import { firebase } from './src/firebase'
import { persistLogin } from './src/client-logic/'


export default useContextProvider(function App() {
	const [loading, setLoading] = useState(true)
	const [state, setState] = useContext(Context)

	const { user } = state

	const Stack = createStackNavigator()


	useEffect(() => {
		persistLogin(user => {
			setState({user})
			setLoading(false)
		}, error => alert(error.message))
	  }, [])
	
	function handleOnLoginSuccess(user) {
		setState({user})
	}

	async function handleOnLogout() {
		await firebase.auth().signOut()
		setState({user:null})
	}

  	return (
		<View style={{ height: '100%', width: '100%' }}>
			{loading
				&&
					<ActivityIndicator size='large' color='black' />
				||
					(user
						&&
							<Home user={user} onLogout={handleOnLogout} />
						||
							<NavigationContainer>
								<Stack.Navigator>
									<Stack.Screen name="Login">
										{props => <Login {...props} onLoginSuccess={handleOnLoginSuccess} />}
									</Stack.Screen>
									<Stack.Screen name="Register" component={Register} />
								</Stack.Navigator>
							</NavigationContainer>
					)
			}
		</View>
  	)
})