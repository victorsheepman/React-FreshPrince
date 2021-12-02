import React, { useState } from 'react'

export const Menu = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className='menu'>
                <button className='menu__button ' onClick={() => setToggle(true)}>
                    Menu
                </button> 
            </div>
            {
                toggle &&  <nav className='menu__nav'>
                                <ul>
                                    <li className='menu__nav__item'>HOME</li>
                                    <li className='menu__nav__item'>SHOP</li>
                                    <li className='menu__nav__item'>Collections </li>
                                    <li className='menu__nav__item--blue' onClick={()=>setToggle(false)}> X</li>
                                </ul>
                            </nav>
            }
           
        </>
    )
}
