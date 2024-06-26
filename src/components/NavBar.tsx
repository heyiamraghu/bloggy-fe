"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import {Button} from "@/components/ui/button";
import { CirclePlus } from 'lucide-react';
import {router} from "next/client";
import {useRouter} from "next/navigation";

export default function Navbar() {

    const router = useRouter();

    const [state, setState] = React.useState(false)

    function handleLogout() {
        if (localStorage.getItem("token") === null) {
            alert("You are already logged out");
            router.push("/");
        } else {
            localStorage.removeItem("token");
            alert("You are logged out. Session closed");
            router.push("/");
        }
    }

    const menus = [
        { title: "Home", path: "/" },
        { title: "Login", path: "/user/login" },
        { title: "Register", path: "/user/register" },
        { title: "Create Blog", path: "/blog/create" },
        { title: "Logout", path: "/" }

    ]

    return (
        <nav className="sticky top-0 bg-white w-full border-b md:border-0">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        <h1 className="text-3xl font-bold text-purple-600">Bloggy</h1>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                        state ? "block" : "hidden"
                    }`}
                >
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className="text-gray-600 hover:text-indigo-600">
                                {item.title == "Logout" ? <Button onClick={handleLogout}><Link href={item.path}>{item.title}</Link></Button> : <Button><Link href={item.path}>{item.title}</Link></Button>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}