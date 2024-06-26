// 'use client'
//
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage
//
// } from "@/components/ui/form"
//
// import { Input } from "@/components/ui/input"
// import TipTap from "@/components/TipTap";
//
//
// import { useForm, SubmitHandler } from "react-hook-form"
// import {zodResolver} from "@hookform/resolvers/zod"
// import * as z from 'zod';
// import {Button} from "@/components/ui/button";
// import {string} from "zod";
// import React, {useState} from "react";
// import {formSchema} from "@/lib/schema";
//
// type FormValues = z.infer<typeof formSchema>
//
// export default function WriteForm() {
//
//     const [data, setData] = useState<FormValues>()
//
//     const {
//         register,
//         handleSubmit,
//         watch,
//         reset,
//         formState: { errors }
//     } = useForm<FormValues>({
//         resolver: zodResolver(formSchema)
//     });
//
//     const onSubmit = (data: FormValues) => {
//         console.log(data)
//     }
//
//     const processForm: SubmitHandler<FormValues> = data => {
//         reset()
//         setData(data)
//     }
//
//
//
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         mode: 'onChange',
//         defaultValues: {
//             title: "",
//             subtitle: "",
//             content: ""
//         }
//     });
//
//     return (
//         <main className="p-24">
//             <Form {...form}>
//                 <form className="flex flex-col justify-between gap-8">
//                     <FormField
//                         control={form.control}
//                         name="title"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Title</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Main title of your blog"{...field} />
//                                 </FormControl>
//                                 <FormMessage/>
//                             </FormItem>
//                         )}
//                     >
//                     </FormField>
//                     <FormField
//                         control={form.control}
//                         name="subtitle"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Subtitle</FormLabel>
//                                 <FormControl>
//                                     <Input placeholder="Subtitle of your blog" {...field} />
//                                 </FormControl>
//                                 <FormMessage/>
//                             </FormItem>
//                         )}
//                     >
//                     </FormField>
//                     <FormField
//                         control={form.control}
//                         name="content"
//                         render={({ field }) => (
//                             <FormItem>
//                                 <FormLabel>Content</FormLabel>
//                                 <FormControl>
//                                     <TipTap  description={""} onChange={field.onChange}/>
//                                 </FormControl>
//                                 <FormMessage/>
//                             </FormItem>
//                         )}
//                     >
//                     </FormField>
//                     <Button type="submit">Submit</Button>
//                 </form>
//             </Form>
//         </main>
//     )
// }