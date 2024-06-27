'use client'

import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";


export default function Register() {

    const router = useRouter();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const submitData = async () => {

        let response = await fetch(`https://bloggy.iamraghu.com/register`,{
            method: "POST",
            //mode: "cors",
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                password: password,
                role: "USER"
            }),
            headers:{
                'Content-type': 'application/json',
            }
        })
        //response = await response.json()
        if (response.status == 200 || response.status == 201) {
            alert("Registered Successfully");
            router.push("/user/login")
        } else {
            alert("User not registered. There is a chance that your username was already taken. Try with a new username")
        }
    }


    return (
        <>
            <main className="p-24">
                <div className="flex flex-col justify-between gap-8">
                    <Label htmlFor="firstname">Firstname</Label>
                    <Input required id="firstname" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <Label htmlFor="lastname">Lastname</Label>
                    <Input required id="lastname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
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