import React from 'react'
import { Galery } from '../components/Galery/Galery'
import { Sidebar } from '../components/Sidebar/Sidebar'

export const Layout = () => {
    return (
        <section className='layout'>
            <Galery />
            <Sidebar />
        </section>
    )
}
