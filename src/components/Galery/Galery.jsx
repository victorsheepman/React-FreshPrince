import React, { useState } from 'react'

export const Galery = ({img = ''}) => {
    const [state, setState] = useState(7);
    const images = [7,8,9,10];

    return (
        <div className='galery'>
            <figure className='galery__image'>
                <img src={`assets/images/img-${state}.png`} alt="" />
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
