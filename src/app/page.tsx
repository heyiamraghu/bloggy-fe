import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link";



interface Blog {
  id: number,
  title: string,
  subtitle: string,
  content: string,
  publishDate: string,
  author: "Raghu",
}
async function getBlogs(): Promise<Blog[]> {
  const result = await fetch('http://localhost:8080/api/v1/blogs',{
    next: {
      revalidate: 0
    }
  })
  return result.json()
}

export default async function Home() {
  const blogs = await getBlogs()
 
  return (
    <main>
      <div className="grid grid-cols-3 gap-8">
        {blogs.map(blog => (
            <Card key={blog.id} className="flex flex-col justify-between">
              <Link href={`/blog/${blog.id}`}>
              <CardHeader className="flex-row gap-4 items-center">

                <div>
                  <CardTitle>{blog.title}</CardTitle>
                  <CardDescription>{blog.subtitle}</CardDescription>
                </div>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Button>Read More</Button>
                <Badge variant="secondary">Raghu</Badge>
              </CardFooter>
              </Link>
            </Card>

        ))}
      </div>
    </main>
  );
}
