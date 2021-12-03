import React from 'react'
import { Galery } from '../components/Galery/Galery'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Card } from '../components/Card/Card'
import { useNearScreen } from '../hooks/useNearScreen'

export const Layout = () => {
    const [show, element] = useNearScreen();
    return (<>
                <section className='layout'>
                    <Galery />
                    <Sidebar />
                    
                </section>
                <section className='layout__cards' ref={element}>
                    {
                        show &&  <span className='layout__cards__title'>YOU MAY ALSO LIKE</span>
                    }
                    <div className='layout__cards__container'>
                        <Card title='Fresh Stripe Sweater' price='$85.00' img1='assets/images/img-1.png' img2='assets/images/img-2.png' img3='assets/images/img-13.png' />
                        <Card title='Fresh Black Tie-Dye Hoodie' price='$75.00' img1='assets/images/img-3.png' img2='assets/images/img-4.png' img3='assets/images/img-12.png' />
                        <Card title='Pose For It Tee' price='$45.00' img1='assets/images/img-5.png' img2='assets/images/img-6.png' img3='assets/images/img-14.png' /> 
                    </div>
                </section>
                <figure className='poster'>
                </figure>
            </>
    )
}
