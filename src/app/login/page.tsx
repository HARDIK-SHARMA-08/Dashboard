"use client"
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { addUser } from "@/features/user/userSlice";
import toast from "react-hot-toast"
import axios from "axios";
import { setToken } from "@/features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface Form {
  email: string;
  password: string;
}

export default function Page() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { register,
    formState: { errors },
    handleSubmit
  } = useForm<Form>();

  const onSubmit: SubmitHandler<Form> = async (data) => {
    try {
      const response = await axios.post('/api/user/login', data)
      //Redux State - add User
      dispatch(addUser(response.data.payload));
      console.log("User::", response.data.payload);
      //Redux State - set token
      dispatch(setToken(response.data.token))
      console.log("JWT::", response.data.token);
      //Change of route
      router.push('/profile')
      toast.success(response.data.message)
    } catch (error: any) {
      toast.error(error.response.data.error)
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center p-6 bg-neutral-100">
      <div className="bg-white flex flex-col items-center justify-center rounded-2xl shadow w-1/2 xl:p-0">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-white bg-gradient-to-r from-blue-800 to-indigo-900 md:text-2xl p-6 rounded-t-2xl flex flex-row justify-between items-center w-full">
          Login to your Account
          <FontAwesomeIcon icon={faRightToBracket} size="lg" />
        </h1>
        <div className="p-6 w-full space-y-4 md:space-y-6 sm:p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 md:space-y-6"
          >

            <div>
              <label className="block mb-2 text-sm font-medium text-neutral-800">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                {...register("email", { required: "true" })}
                className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
              <label className="block mb-2 text-sm font-medium text-neutral-800">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                {...register("password", { required: "true" })}
                className="bg-neutral-50 border border-neutral-300 text-neutral-800 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="●●●●●●●●"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">
                  <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: "#ff0000", }} /> Password is required
                </p>
              )}
            </div>
            <div className="text-black">Don't have an account?
              <Link href="/signup" className="mx-2 font-bold text-indigo-700">Sign Up</Link>
            </div>
            <input
              type="submit"
              className="bg-indigo-500 text-white p-2 w-full rounded-lg font-bold"
            />
          </form>
        </div>
      </div>
    </div>
  );
}