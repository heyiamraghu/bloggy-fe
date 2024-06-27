'use client'

import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


export default function Login() {

    const router = useRouter();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const submitData = async () => {

        let response = await fetch(`https://bloggy.iamraghu.com/login`,{
            method: "POST",
            //mode: "cors",
            body: JSON.stringify({
                username: username,
                password: password,
            }),
            headers:{
                'Content-type': 'application/json',
            }
        })
        //response = await response.json()
        if (response.status == 200 || response.status == 201) {
            const data = await response.json();
            localStorage.setItem("token", data.access_token);
            alert("Logged in successfully!! Token is saved. You can now create new blog posts.");
            router.push("/blog/create");
        } else {
            alert("Login Failed. Check your credentials")
        }
    }


    return (
        <>
            <main className="p-24">
                <div className="flex flex-col justify-between gap-8">
                    <Label htmlFor="username">Username</Label>
                    <Input required id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Label htmlFor="password">Password</Label>
                    <Input required id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="submit" onClick={submitData}>Submit</Button>
                </div>
            </main>
        </>
    )
}