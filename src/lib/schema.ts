import * as z from "zod";


export const blogSchema = z.object({
    id: z.number(),
    title: z.string(),
    subtitle: z.string(),
    content: z.string(),
    publishDate: z.any(),
    author: z.any(),
})



export const formSchema = z.object({
    title: z.string().min(5, { message: "Title is not long enough" }).max(100, { message: "Its too long" }),
    subtitle: z.string().min(5, { message: "Subtitle is not long enough" }).max(200, { message: "Its too long" }),
    content: z.string().min(5, { message: "Title is not long enough" }).max(400, { message: "Its too long" })
})

export const registerFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string().min(5, { message: "Username is not long enough" }).max(15, { message: "Its too long" }),
    password: z.string().min(8, { message: "Password is not long enough" }).max(20, { message: "Its too long" })
})