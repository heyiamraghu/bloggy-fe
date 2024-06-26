import {createZodFetcher} from 'zod-fetch'
import {blogSchema} from "@/lib/schema";

const fetchBlog = createZodFetcher()
export const getBlog = async (id: number) => {
    return await fetchBlog(
        blogSchema,
        `https://bloggy.iamraghu.com/api/v1/blogs/${id}`,
        {cache: 'no-store'}
    );
}