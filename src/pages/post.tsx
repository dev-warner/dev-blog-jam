import Layout from '../layouts/default';
import * as showdown from 'showdown';

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
    descriptionSEO: string;
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
    const { title, featuredImage, descriptionSEO } = post;

  return (
    <Layout
      title={ title }
      description={ descriptionSEO }>
        <Hero {...{ title, featuredImage }}/>
        <PostContent {...post}/>
    </Layout>
  );
}

Post.getInitialProps = async ({ query }) => {
    const { id } = query;
    const converter = new showdown.Converter();
    const data = (await client.getContentItem(id as string)).toJSON();
    const { featuredImage, body } = data;

    const { seo, alt } = featuredImage;

    const path = (
        image(featuredImage.image)
            .url()
            .seoFileName(seo || alt)
            .build()
    );

    Object.assign(data, {
        body: converter.makeHtml(body),
        featuredImage: {
            path,
            alt: featuredImage.alt,
        }
    })

    return data as PostType;
}


export default Post;
