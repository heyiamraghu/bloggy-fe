import {createZodFetcher} from 'zod-fetch'
import {blogSchema} from "@/lib/schema";

const fetchBlog = createZodFetcher()
export const getBlog = async (id: number) => {
    return await fetchBlog(
        blogSchema,
        `http://localhost:8080/api/v1/blogs/${id}`,
        {cache: 'no-store'}
    );
}