'use client'

import WriteForm from "./WriteForm";
import NewBlogForm from "@/app/blog/create/NewBlog";

export default function Write() {
    return (
        <>
            <h2>Write your blog here</h2>
            <NewBlogForm/>
        </>
    )
}