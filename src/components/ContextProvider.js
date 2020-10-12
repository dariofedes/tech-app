import React, { useState } from 'react'

const Context = React.createContext([{}, () => { }])

function Provider({ children }) {
    const [state, setState] = useState({ })

    return (
        <Context.Provider value={[state, setState]}>
            {children}
        </Context.Provider>
    )
}


function useContextProvider(Component) {
    return class extends React.Component {
        render() {
            return (
                <Provider>
                    <Component />
                </Provider>
            )
        }
    }
}

export  { Context, Provider, useContextProvider }