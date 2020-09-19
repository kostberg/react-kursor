import React from 'react'
import { useKursor } from 'react-kursor'

function Button() {
    const { hoverIn, hoverOut } = useKursor();

    return (
        <div className="button" onMouseEnter={ hoverIn } onMouseLeave={ hoverOut }>
            Button 
        </div>
    )
}

export default Button
