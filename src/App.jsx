import React from 'react'
import { Footer } from './components/Footer/Footer'
import { Galery } from './components/Galery/Galery'
import { Header } from './components/Header/Header'
import { Menu } from './components/Menu/Menu'
import { Modal } from './components/Modal/Modal'
import { Layout } from './container/Layout'


export const App = () => {
    return (
        <>
            <Header />
            <Layout />
            <Menu/>
            <Footer />        
        </>
    )
}
