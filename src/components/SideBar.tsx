import { logOut } from '@/features/auth/authSlice'
import { faGraduationCap, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'

export const SideBar = () => {
    const disptach = useDispatch();
    const auth = useSelector((state: any) => state.authReducer)

    const handleLogout = async () => {
        try {
            await axios.post(`/api/user/logout`);
            disptach(logOut(null))
            toast.success("Logout successful")
        } catch (error: any) {
            toast.error(error.message)
        }
    }
    return (
        <div className="bg-white shadow-sm rounded-2xl md:border-t-4 md:border-indigo-500 rounded-2xl w-full h-full flex flex-row md:flex-col items-center justify-center text-black font-bold gap-2 w-full">
            <Link href="/profile" className='p-4 md:p-6 border-b w-full gap-2 text-black hover:text-indigo-500 fill-black hover:fill-indigo-500 transition duration-200 ease-out'>
                <div className='grid grid-cols-12 items-center sm:items-start justify-start'>
                    <div className='col-span-12 sm:col-span-4'>
                        <FontAwesomeIcon icon={faUser} size='xl' />
                    </div>
                    <div className='col-span-8 hidden sm:block text-nowrap'>User Profile</div>
                </div>
            </Link>

            <Link href="/student" className='p-4 md:p-6 border-b w-full gap-2 text-black hover:text-indigo-500 fill-black hover:fill-indigo-500 transition duration-200 ease-out'>
                <div className='grid grid-cols-12 items-start justify-start'>
                    <div className='col-span-12 sm:col-span-4'>
                        <FontAwesomeIcon icon={faGraduationCap} size='xl' />
                    </div>
                    <div className='col-span-8 hidden sm:block'>Students</div>
                </div>
            </Link>

            <Link href="/" className='p-4 md:p-6 w-full gap-2 text-black hover:text-indigo-500 fill-black hover:fill-indigo-500 transition duration-200 ease-out' onClick={handleLogout}>
                <div className='grid grid-cols-12 items-start justify-start'>
                    <div className='col-span-12 sm:col-span-4'>
                        <FontAwesomeIcon icon={faRightFromBracket} size='xl' />
                    </div>
                    <div className='col-span-8 hidden sm:block'>LogOut</div>
                </div>
            </Link>
        </div>
    )
}
