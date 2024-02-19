"use client"
import { StudentAbout, StudentAddress } from "@/components";

export default function page({ params }: { params: { id: number } }) {
    return (
        <>
            <StudentAbout id={params.id} />
            <div className='mt-6'>
                <StudentAddress id={params.id} />
            </div>
        </>
    )
}