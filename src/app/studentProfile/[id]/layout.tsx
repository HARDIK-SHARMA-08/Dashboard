"use client";
import React from "react";
import { Navbar, SideBar } from "@/components";

export default function Layout({ children }: any) {

    return (
        <div className="h-full flex flex-col items-center justify-center h-full w-full bg-neutral-100">
            <Navbar />
            <div className="h-screen w-full mx-auto flex flex-col md:flex-row justify-start items-start gap-6 p-8 bg-neutral-100">
                <div className="hidden md:block md:w-1/4">
                    <SideBar />
                </div>
                <div className="w-full md:w-3/4">
                    {children}
                </div>
            </div>
        </div>
    );

}
