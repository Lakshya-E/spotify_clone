import React from 'react'
import { redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Aside from '../components/Aside/Aside'
// import Footer from './Footer'
import AsideBottom from '../components/Aside/AsideBottom'
import Body from '../components/Main/Body'

const Home = () => {

    const token = useSelector(state => state.token?.token);

    if(!token) {
        redirect("/login")
    }

    return (
        <div className='w-[full] h-[100vh]'>
            <div className='flex'>
                <div className='w-[420px]'>
                    <Aside />
                    <AsideBottom /> 
                    <h1>Hello world</h1>
                </div>
                <div className='h-[calc(100vh-100px)] bg-[#121212] w-full mr-2 mt-2 rounded-md'>
                    <Body />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Home
