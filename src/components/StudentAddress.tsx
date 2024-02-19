import React from 'react'
import { useSelector } from 'react-redux';

export const StudentAddress = ({ id }: any) => {
    const students = useSelector((state: any) => state.studentReducer.students);
    console.log("About Student::", students);

    const selectedStudent = students.find((student: any) => student.id == id)
    console.log("Selected Student::", selectedStudent);

    return (
        <>
            <div className="mx-auto">
                {/* About Section */}
                <div className="bg-white p-6 shadow-sm rounded-2xl border-t-4 border-indigo-500 rounded-2xl h-full flex flex-col gap-4 items-start">
                    <div className="text-gray-700 w-full">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                    Current Address
                                </div>
                                <div className="px-4 py-2">{selectedStudent?.currAddress}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">
                                    Permanant Address
                                </div>
                                <div className="px-4 py-2">{selectedStudent?.permaAddress}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
