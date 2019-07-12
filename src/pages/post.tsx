import Layout from '../layouts/default';
import { NextPage } from 'next';
import { Schema } from '../next-env';
import { client, image } from '../services/dc-connector';
import { AuthorType } from '../components/PostList/PostList';
import { Hero } from '../components/Hero/Hero';
import { PostContent } from '../components/PostContent/PostContent';


export type PostType = Schema<{
    title: string;
    body: string;
    authors: AuthorType[];
    tags: string[];
    featuredImage: {
        path: string;
        alt: string;
    }
}>

export type PostReferenceType = Schema<{
    id: string;
    contentType: string;
}>;

const Post: NextPage<PostType> = (post) => {
    const { title, featuredImage } = post;

  return (
    <Layout>
        <Hero {...{ title, featuredImage }}/>
        <PostContent {...post}/>
    </Layout>
  );
}

Post.getInitialProps = async ({ query }) => {
    const { id } = query;
    const { featuredImage, ...props } = (await client.getContentItem(id as string)).toJSON();

    const { seo, alt } = featuredImage;

    const path = (
        image(featuredImage.image)
            .url()
            .seoFileName(seo || alt)
            .build()
    );

    Object.assign(featuredImage, {
        path,
        alt: featuredImage.alt,
    })

    return { featuredImage, ...props } as PostType;
}


export default Post;
