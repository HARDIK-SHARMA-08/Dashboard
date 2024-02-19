import React from 'react'
import { Modal } from './Modal';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { CreateStudent, EditStudent } from '.';

export const Student = () => {
    const studentData = useSelector((state: any) => state.studentReducer.students)
    const [open, setOpen] = React.useState<Boolean>(false);
    const [openEdit, setOpenEdit] = React.useState<Boolean>(false);
    const [studentId, setStudentId] = React.useState<number>();

    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    const handleCloseEdit = () => setOpenEdit(false);
    const handleOpenEdit = () => setOpenEdit(true);

    console.log("Students::", studentData);

    return (
        <div className='flex flex-col rounded-2xl border-t-4 border-indigo-500 rounded-2xl h-full bg-white'>
            <div className="p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between text-black">
                <div className='font-bold font-bold text-3xl'>Students</div>
                <button
                    className="bg-indigo-500 p-3 rounded-xl font-bold text-white uppercase inline-flex items-center gap-2"
                    onClick={handleOpen}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width={30} viewBox="0 0 512 512" fill='white'><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>  Create Profile
                </button>
            </div>
            <div className='m-6'>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Sr. No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Phone Number
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Gender
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentData.map((student: any, index: number) => {
                                return (
                                    <tr className="odd:bg-white even:bg-gray-50 border-b" key={index}>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {index + 1}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            <Link href={`studentProfile/${student.id}`}>
                                                {student.firstName}{" "}{student.lastName}
                                            </Link>
                                        </th>
                                        <td className="px-6 py-4">
                                            {student.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            {student.phoneNumber}
                                        </td>
                                        <td className="px-6 py-4 capitalize">
                                            {student.gender}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className='font-medium text-blue-600 hover:underline'
                                                onClick={() => {
                                                    handleOpenEdit();
                                                    setStudentId(student.id);
                                                }
                                                }>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

            <Modal isOpen={open}>
                <CreateStudent onClose={handleClose} />
            </Modal>

            <Modal isOpen={openEdit}>
                <EditStudent onClose={handleCloseEdit} id={studentId} />
            </Modal>
        </div>
    )
}
