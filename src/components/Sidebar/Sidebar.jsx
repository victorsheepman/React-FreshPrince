import React from 'react'
import { Button } from '../Button/Button'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <h1>Crown Sweatshirt</h1>
                <span className='body-1'>$ 80.00</span>
            </div>
            <div className='sidebar__size'>
                <h3>Size</h3>
                <ul className='body-1'>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>XXL</li>
                </ul>
            </div>
            <div className='sidebar__button'>
                <Button type={'black'} title='ADD TO CART' />
                <Button type={'blue'} title='BUY IT NOW' />
            </div>
            <div className='sidebar__body'>
                <p className='body-1'>
                    Let them know you’re 90s royalty with this official The Fresh Prince crown pattern sweater. Throw vintage vibes that Uncle Phil would approve of. Featuring woven The Fresh Prince logo on chest. Navy crown print crew neck sweatshirt with white ribbed collar and waist band. Cotton/Poly blend.
                </p>
            </div>
            <a className='link' href="/#">Click for Sizing</a>
        </div>
    )
}
