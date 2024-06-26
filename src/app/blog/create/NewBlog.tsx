import React, {useState} from "react";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import TipTap from "@/components/TipTap";
import {Button} from "@/components/ui/button";


export default function NewBlogForm() {

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");

    const handleContentChange = (reason: any) => {
        setContent(reason)
    }

    const submitData = async () => {
        let response = await fetch('https://bloggy.iamraghu.com/api/v1/blogs',{
            method: "POST",
            mode: "cors",
            body:JSON.stringify({
                title: title,
                subtitle: subtitle,
                content:content,
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
                    <Label htmlFor="title">Title</Label>
                        <Input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <Label htmlFor="subtitle">Subtitle</Label>
                        <Input id="subtitle" type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
                    <Label htmlFor="content">Content</Label>
                    <TipTap  content={content}  onChange={(newContent: string) => handleContentChange(newContent)}/>

                    <Button type="submit" onClick={submitData}>Submit</Button>
                </div>
            </main>
        </>
    )
}