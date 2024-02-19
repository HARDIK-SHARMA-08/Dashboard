"use client"
import React from 'react'
import { UserAbout, UserAddress } from '@/components'
import { useSelector } from 'react-redux'

export default function page() {
  const user = useSelector((state: any) => state.userReducer)
  console.log("User State::", user);

  return (
    <>
      <UserAbout />
      <div className='mt-6'>
        <UserAddress />
      </div>
    </>
  )
}
