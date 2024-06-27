import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import TipTap from "@/components/TipTap";
import {Button} from "@/components/ui/button";

import {useRouter} from "next/navigation";


export default function NewBlogForm() {

    const router = useRouter();

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");

    const handleContentChange = (reason: any) => {
        setContent(reason)
    }

    const submitData = async () => {
        let response = await fetch('https://bloggy.iamraghu.com/api/v1/blogs',{
            method: "POST",
            //mode: "no-cors",
            body:JSON.stringify({
                title: title,
                subtitle: subtitle,
                content: content,
                author: "Raghu",
            }),
            headers:{
                'Content-type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
            }
        })


            // Displaying results to console
            //alert(response.json());
        if (response.status == 200 || response.status == 201) {
            alert("Your blog is created successfully!");
            router.push("/")
        } else {
            alert("Something went wrong! Ensure you're logged in. You cannot create a blog without valid access");
        }

    }


    return (
        <>
            <main className="p-24">
                <div className="flex flex-col justify-between gap-8">
                    <Label htmlFor="title">Title</Label>
                    <Input required id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <Label htmlFor="subtitle">Subtitle</Label>
                    <Input required id="subtitle" type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
                    <Label htmlFor="content">Content</Label>
                    <TipTap content={content} onChange={(newContent: string) => handleContentChange(newContent)}/>

                    <Button type="submit" onClick={submitData}>Submit</Button>
                </div>
            </main>
        </>
    )
}