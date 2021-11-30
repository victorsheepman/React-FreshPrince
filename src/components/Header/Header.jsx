import React from 'react'

export const Header = () => {
    return (
        <header className='header'>
            <img src="assets/images/logo.png" alt="" />
            
           <div className='header__nav'>
                <span className='body-1'>SHOP</span>
                <span className='body-1'>COLLECTIONS</span>
           </div>
           <div className='header__icons'>
                <img src="assets/icons/icons8-user 1.svg" alt="" />
                <img src="assets/icons/icons8-shopping_bag 1.svg" alt="" />
           </div>
        </header>
    )
}
