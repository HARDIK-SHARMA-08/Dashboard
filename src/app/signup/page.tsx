"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "@/features/user/userSlice";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import toast from "react-hot-toast";
import Link from "next/link";

enum GenderEnum {
  female = "Female",
  male = "Male",
  other = "other",
}

interface Form {
  firstname: string;
  lastname: string;
  age: number;
  password: any;
  phoneNumber: number;
  currAddress: string;
  permaAddress: string;
  email: string;
  date: number;
  gender: GenderEnum;
}

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state: any) => state.user)

  const { register,
    formState: { errors },
    handleSubmit
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const response = await axios.post('/api/user/create', data)
    try {
      console.log("User added to database::", response.data);
      dispatch(addUser(data));
      console.log("User State::", user);
      router.push('/login')
      toast.success("Signup successful")
    } catch (response: any) {
      toast.error(response.data.message)
    }
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center p-6 bg-neutral-100">
        <div className="bg-white max-w-2xl flex flex-col items-start justify-start rounded-2xl shadow">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white bg-gradient-to-r from-blue-800 to-indigo-900 md:text-2xl w-full p-6 rounded-t-2xl flex flex-row justify-between">
            Create an account
            <FontAwesomeIcon icon={faUserPlus} size="lg" />
          </h1>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div className="flex flex-row justify-between">
                <div>
                  <label className="mb-2 text-sm font-medium text-neutral-800">
                    First Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("firstname", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                    placeholder="First Name"
                    aria-invalid={errors.firstname ? "true" : "false"}
                  />
                  {errors.firstname?.type === "required" && (
                    <p className="text-red-600">
                      <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#ff0000", }} /> First Name is required
                    </p>
                  )}
                </div>
                <div>
                  <label className="mb-2 text-sm font-medium text-neutral-800">
                    Last Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    {...register("lastname", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })}
                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                    placeholder="Last Name"
                    aria-invalid={errors.lastname ? "true" : "false"}
                  />
                  {errors.lastname?.type === "required" && (
                    <p className="text-red-600">
                      <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#ff0000", }} /> Last Name is required
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="mb-2 text-sm font-medium text-neutral-800">
                  Email <span className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                  placeholder="name@company.com"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-600">
                    <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#ff0000", }} /> Email is required
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 text-sm font-medium text-neutral-800">
                  Password <span className="text-red-600">*</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                  placeholder="•••••••"
                  aria-invalid={errors.password ? "true" : "false"}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">
                    <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#ff0000", }} /> Password is required
                  </p>
                )}
              </div>

              <div className="flex flex-row gap-4">
                <div>
                  <label className="mb-2 text-sm font-medium text-neutral-800">
                    Age
                  </label>
                  <input
                    type="number"
                    {...register("age")}
                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                    placeholder="18-60"
                  />
                </div>

                <div>
                  <label className="mb-2 text-sm font-medium text-neutral-800">
                    Gender
                  </label>
                  <select
                    {...register("gender")}
                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5"
                  >
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 text-sm font-medium text-neutral-800">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    {...register("phoneNumber")}
                    className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                    placeholder="+91-9XXXXXXXX"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 text-sm font-medium text-neutral-800">
                  Current Address
                </label>
                <textarea
                  {...register("currAddress")}
                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                  rows={2}
                />
              </div>
              <div>
                <label className="mb-2 text-sm font-medium text-neutral-800">
                  Permanent Address
                </label>
                <textarea
                  {...register("permaAddress")}
                  className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5"
                  rows={2}
                />
              </div>

              <div className="text-black">Already have an account?
                <Link href="/login" className="mx-2 font-bold text-indigo-700">Log in</Link>
              </div>

              <input
                type="submit"
                className="bg-indigo-500 text-white p-2 w-full rounded-lg font-bold"
              />
            </form>
          </div>
        </div>
      </div>

    </>
  );
}