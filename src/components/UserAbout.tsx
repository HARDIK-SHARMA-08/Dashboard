import React from 'react'
import { Modal } from './Modal';
import { useSelector } from 'react-redux';
import { EditProfile } from '.';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const UserAbout = () => {
    const user = useSelector((state: any) => state.userReducer)

    //Modal
    const [open, setOpen] = React.useState<Boolean>(false);
    const handleClose = () => setOpen(false);
    const handleOpen = () => setOpen(true);

    return (
        <>
            <div className="mx-auto">
                {/* About Section */}
                <div className="bg-white p-6 shadow-sm rounded-2xl border-t-4 border-indigo-500 rounded-2xl h-full flex flex-col gap-4 items-start">
                    <div className="flex flex-col md:flex-row gap-6 justify-between w-full items-center pb-4 font-semibold text-gray-900 border-b">
                        <div className='inline-flex gap-2'>
                            <span className="font-bold text-3xl">Welcome{" "}{user.firstname}{" "}{user.lastname}</span>
                        </div>
                        <button
                            className="bg-indigo-500 p-3 rounded-xl font-bold text-white uppercase inline-flex items-center gap-2 hover:bg-indigo-100 text-indigo-100 hover:text-indigo-500 fill-indigo-100 hover:fill-indigo-500 transition duration-200 ease-out"
                            onClick={handleOpen}
                        >
                            <FontAwesomeIcon icon={faUserPen} size='xl' />
                            <div>Edit Profile</div>
                        </button>
                    </div>
                    <div className="text-gray-700 w-full">
                        <div className="grid md:grid-cols-2 text-sm">
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">First Name</div>
                                <div className="px-4 py-2">{user?.firstname}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Last Name</div>
                                <div className="px-4 py-2">{user?.lastname}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Gender</div>
                                <div className="px-4 py-2 capitalize">{user?.gender}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Contact No.</div>
                                <div className="px-4 py-2">+91 {user?.phoneNumber}</div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Email</div>
                                <div className="px-4 py-2">
                                    <a
                                        className="text-blue-800"
                                        href={`mailto:${user?.email}`}
                                    >
                                        {user?.email}
                                    </a>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="px-4 py-2 font-semibold">Birthday</div>
                                <div className="px-4 py-2">Feb 06, 1998</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Modal isOpen={open}>
                <EditProfile onClose={handleClose} />
            </Modal>
        </>
    )
}
