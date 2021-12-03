import React, { useState } from 'react'

export const Galery = () => {
    const [state, setState] = useState(7);
    return (
        <div className='galery'>
            <figure className='galery__image animate__animated animate__bounce animate__fadeIn'>
                <img src={`assets/images/img-${state}.png`} sizes='sizes="(max-width: 320px) 320px,
            (max-width: 480px) 480px,' alt="" />
            </figure>
            <div className='galery__nav'>
                <button onClick={()=>setState(7)}></button>
                <button onClick={()=>setState(8)}></button>
                <button onClick={()=>setState(9)}></button>
                <button onClick={()=>setState(10)}></button>
            </div>
            <div className='galery__menu'>
               <figure  onClick={()=>setState(7)}>
                   <img src='assets/images/img-7.png' alt="" />
               </figure>
               <figure  onClick={()=>setState(8)}>
                   <img src='assets/images/img-8.png' alt="" />
               </figure>
               <figure  onClick={()=>setState(9)}>
                   <img src='assets/images/img-9.png' alt="" />
               </figure>
               <figure  onClick={()=>setState(10)}>
                   <img src='assets/images/img-10.png' alt="" />
               </figure>
            </div>
        </div>
    )
}
