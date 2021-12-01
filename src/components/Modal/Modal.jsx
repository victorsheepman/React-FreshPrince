import React from 'react'
import { Button } from '../Button/Button'

export const Modal = ({setState}) => {
    return (
        <div className="Modal" id="Modal">
            <div className="Modal__content">
                <div className="Modal__exit" onClick={()=>setState(false)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.70703 0.292969L0.292969 1.70703L6.58594 8L0.292969 14.293L1.70703 15.707L8 9.41406L14.293 15.707L15.707 14.293L9.41406 8L15.707 1.70703L14.293 0.292969L8 6.58594L1.70703 0.292969Z" fill="#1D1D1D"/>
                    </svg>     
                </div>
                <div className="Modal__producto">
                    <figure className="Modal__image">
                        <img src="assets/images/img-7.png" alt="" />
                    </figure>
                    <div className="Modal__detalle">
                        <h3>
                            Crown 
                            Sweatshirt
                        </h3>
                        <span>$85.00</span>
                    </div> 
                    <div className="Remove">
                        <div className="Remove__content--border"><span>1</span></div>
                        <div className="Remove__content"><span>Remove</span></div>
                    </div>    
                </div>
              
                <span className="subtotal">Subtotal</span>
                <span className="subtotal__precio">$85.00</span>
                <p className="subtotal__parrafo">Shipping, taxes, and discount codes calculated at checkout.</p>
                <Button type='blue'  title='CHECK OUT' /> 
                <p className="subtotal__parrafo--black">Please Note: All items are pre-order and will ship<br />in 6-10 weeks. Guaranteed holiday delivery.</p>
            </div>
        </div>
    )
}
