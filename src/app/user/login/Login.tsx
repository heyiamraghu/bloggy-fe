'use client'

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage

} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import * as z from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import React from "react";
import {Button} from "@/components/ui/button";

export default function LoginForm() {

    const loginFormSchema = z.object({
        username: z.string(),
        password: z.string()
    })

    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        mode: 'onChange',
        defaultValues: {
            username: "",
            password: ""
        }
    });

    return (
        <main className="p-14">
            <Form {...form}>
                <form className="flex flex-col justify-between gap-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your username"{...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    >
                    </FormField>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your password"{...field} />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    >
                    </FormField>
                    <Button type="submit">Login</Button>
                </form>
            </Form>
        </main>
    )
}