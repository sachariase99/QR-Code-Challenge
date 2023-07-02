import React from 'react'
import QRCode from '../assets/images/image-qr-code.png'

const Qr = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <div className='bg-white rounded-3xl cardContainer'>
                <div className='p-4'>
                    <img className='rounded-2xl w-[100%]' src={QRCode} alt="QR" />
                    <h1 className='text-xl p-4 text-center'>Improve your front-end skills by building projects</h1>
                    <p className='text-GrayishBlue text-center pr-4 pl-4 pb-4'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    )
}

export default Qr