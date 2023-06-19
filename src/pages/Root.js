import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../components/Aside/Aside'
import AsideBottom from '../components/Aside/AsideBottom'

const Root = () => {
    return (
        <div className='w-[full] h-[100vh]'>
            <div className='flex'>
                <div className='w-[420px]'>
                    <Aside />
                    <AsideBottom /> 
                    <h1>Hello world</h1>
                </div>
                <div className='h-[calc(100vh-100px)] bg-[#121212] w-full mr-2 mt-2 rounded-md'>
                    <Outlet />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Root
