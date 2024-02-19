"use client";
import React from "react";
import Login from "@/app/login/page"
import { Modal } from "@/components/Modal";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <main className="flex min-h-screen flex-row items-center justify-center p-24 gap-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500 from-0%">
        <div className="text-center pt-28 pb-10 mx-auto max-w-xl lg:max-w-3xl">

          <h1 className="text-4xl font-semibold leading-loose text-white sm:text-6xl px-8">
            Lorem ipsum{" "}
          </h1>
          <p className="mt-6 mx-5 text-lg leading-8 text-gray-400">
            Lets get you all set up that you can begin your journey towards finishing your goals
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-2">
            <Link
              href="/signup">
              <button
                type="button"
                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"

              >
                Signup
              </button>
            </Link>
            <Link
              href="/login">
              <button
                type="button"
                className="rounded-md border border-white px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </main>

    </>
  );
}