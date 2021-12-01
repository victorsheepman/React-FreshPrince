import React from 'react'

export const Button = ({type, title, setState}) => {
    return (
        <button className={type == 'blue' ? 'button--blue' : 'button'} onClick={()=>setState(true)}>
            {title}
        </button>
    )
}
