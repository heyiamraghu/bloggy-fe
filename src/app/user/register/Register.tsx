'use client'

import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";


export default function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");



    const submitData = async () => {
        let response = await fetch('https://bloggy.iamraghu.com/register',{
            method: "POST",
            mode: "cors",
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username: username,
                password: password,
            }),
            headers:{
                'Content-type': 'application/json'
            }
        })

        response = await response.json()

        alert(JSON.stringify(response))
    }


    return (
        <>
            <main className="p-24">
                <div className="flex flex-col justify-between gap-8">
                    <Label htmlFor="firstname">Firstname</Label>
                    <Input id="firstname" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <Label htmlFor="lastname">Lastname</Label>
                    <Input id="lastname" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <Button type="submit" onClick={submitData}>Submit</Button>
                </div>
            </main>
        </>
    )
}