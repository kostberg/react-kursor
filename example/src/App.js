import React from 'react'
import Kursor from 'react-kursor'
import Button from './Button'

const App = () => {
    return (
        <Kursor>
            <div className="center">
                <h1>Try hovering the button... </h1>
                <br />
                <Button />
            </div>
        </Kursor>
    )
}

export default App
