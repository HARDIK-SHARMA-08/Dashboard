"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'

export default function page() {
    useEffect(() => {
        toast.error("Unauthorized User")
    }, [])
    return (
        <div className='h-screen flex flex-col justify-center items-center gap-10 z-20 bg-white'>
            <div className='text-neutral-800 opacity-10 font-bold text-8xl'>&lt; Error 404 / &gt;</div>
            <div className="w-full inline-flex items-center justify-center gap-6">
                <Link href="/signup" className="w-1/4">
                    <button className="p-4 rounded-lg bg-indigo-500 hover:bg-indigo-100 text-indigo-100 hover:text-indigo-500 transition duration-200 ease-out font-bold w-full uppercase">
                        Sign Up
                    </button>
                </Link>
                <Link href="/login" className="w-1/4">
                    <button className="p-4 rounded-lg bg-indigo-500 hover:bg-indigo-100 text-indigo-100 hover:text-indigo-500 transition duration-200 ease-out font-bold w-full uppercase">
                        Log in
                    </button>
                </Link>
            </div>
        </div>

    )
}
