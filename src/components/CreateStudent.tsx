"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addStudent } from "@/features/student/studentSlice";
import toast from "react-hot-toast";

enum GenderEnum {
    female = "female",
    male = "male",
    other = "other",
}

interface Form {
    // id: number;
    firstName: string;
    lastName: string;
    age: number;
    phoneNumber: number;
    currAddress: string;
    permaAddress: string;
    email: string;
    gender: GenderEnum;
}

export const CreateStudent = ({ onClose }: any) => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<Form>();

    const onSubmit: SubmitHandler<Form> = (data) => {
        dispatch(addStudent(data))
        console.log("StudentAdded::", data);
        toast.success("Student created successfully")
        onClose((prev: boolean) => !prev);
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center gap-6 p-6 bg-white backdrop-filter backdrop-blur-lg bg-opacity-10 ">
            <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-lg xl:p-0 rounded-2xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-neutral-800 md:text-2xl">
                        Create Student
                    </h1>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4 md:space-y-6"
                    >
                        <div className="flex flex-row justify-between">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral-800">
                                    First Name
                                </label>
                                <input
                                    {...register("firstName")}
                                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="First Name"
                                />
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral-800">
                                    Last Name
                                </label>
                                <input
                                    {...register("lastName")}
                                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-neutral-800">
                                Email
                            </label>
                            <input
                                type="email"
                                {...register("email")}
                                className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                placeholder="name@company.com"
                            />
                        </div>
                        <div className="flex flex-row gap-4">
                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral-800">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    {...register("age")}
                                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="18-60"
                                />
                            </div>
                            <div className="grow">
                                <label className="block mb-2 text-sm font-medium text-neutral-800">
                                    Gender
                                </label>
                                <select
                                    {...register("gender")}
                                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-max p-2.5 "
                                >
                                    <option value="female">Female</option>
                                    <option value="male">Male</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block mb-2 text-sm font-medium text-neutral-800">
                                    Phone Number
                                </label>
                                <input
                                    type="number"
                                    {...register("phoneNumber")}
                                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                    placeholder="+91-99XXXXXXXX"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-neutral-800">
                                Current Address
                            </label>
                            <input
                                {...register("currAddress")}

                                className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-neutral-800">
                                Permanent Address
                            </label>
                            <input
                                {...register("permaAddress")}

                                className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            />
                        </div>
                        <div className="flex flex-row gap-4">
                            <input
                                type="submit"
                                className="bg-neutral-900 text-white p-2 w-full rounded-lg font-bold uppercase"
                            />
                            <button
                                className="border-neutral-900 border-2 text-neutral-900 p-2 w-full rounded-lg font-bold uppercase"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
