import React from 'react'

export const Button = ({type, title}) => {
    return (
        <button className={type == 'blue' ? 'button--blue' : 'button'}>
            {title}
        </button>
    )
}
