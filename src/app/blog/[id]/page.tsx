import {getBlog} from "@/lib/getBlog";

type Props = {
  params: {
    id: number,
    title: string,
    subtitle: string,
    content: string,
    publishDate: string,
    author: "Raghu",
  }
}

export default async function BlogPage({ params }: Props) {

  const blog = await getBlog(params.id);

    return (
        <>
          <h2>{blog.title}</h2>
          <h4>{blog.subtitle}</h4>
          <div dangerouslySetInnerHTML={{__html: blog.content}}/>
        </>
    )
}