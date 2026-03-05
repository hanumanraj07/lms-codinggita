import React from 'react' 
import {Link} from "react-router-dom";


export default function Landing() {
    return (
        <div>
            <div className='flex flex-col items-center mt-35'>

                <div><h1 className='font-extrabold text-7xl text-gray-100'>Coding</h1></div>
                <div><h1 className='font-extrabold text-7xl text-gray-400'>Gita</h1></div>
                <div><p className='text-lg mt-5'>Smart, simple, and reliable attendance for modern classrooms.</p></div>

                <div><Link to="/login"><button className='bg-white font-medium text-black p-2.5 w-20 mt-10 rounded-xl hover:cursor-pointer'>Login</button></Link> </div>

            </div>
            <div className='flex gap-5 mt-10 justify-center'>
                <div className='border border-gray-800 rounded-xl p-5 w-105 bg-[#131313]'>
                    <h3 className='font-medium  mb-2'>Role-based dashboards</h3>
                    <p className='text-xs'>Admin, Mentor, and Student experiences tailored to their</p>
                    <p>needs.</p>
                </div>
                <div className='border border-gray-800 rounded-xl p-5 w-105 bg-[#131313]'>
                    <h3 className='font-medium mb-2'>Fast and secure access</h3>
                    <p className='text-xs'>Encrypted sessions and streamlined navigation.</p>
                </div>
            </div>
        </div>
    )
}
