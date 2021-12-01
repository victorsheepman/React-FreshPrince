import React, {useState } from 'react'

export const Card = ({ title, price ,img1,img2, img3}) => {

    const images = [img1,img2,img3]

    const [img, setImg] = useState(images[0]);

    const handleHover = ()=>{

       setImg(images[1])

       setTimeout(() => {

           setImg(images[2]);

       }, 1000);
    }

    const exitHover = ()=>{

        setImg(images[0])

    }

    return (
        <div className='card' onMouseEnter={handleHover} onMouseLeave={exitHover}>
            <figure className='card__image'>
                <img src={img} alt="" />
            </figure>
            <h3>{title}</h3>
            <span className='body-1'>{price}</span>
        </div>
    )
}
