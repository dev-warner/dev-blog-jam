import Layout from "../layouts/default";

import { ImageFormat } from "dc-delivery-sdk-js";
import { NextPage } from "next";
import { Hero, HeroProps } from "../components/Hero/Hero";
import { PostList, PostPreviewType } from "../components/PostList/PostList";
import { Schema } from "../next-env";
import { client, image } from "../services/dc-connector";

type TeamPage = Schema<{
  hero: HeroProps
  posts: PostPreviewType[],
}>;

const TeamPage: NextPage<TeamPage> = ({ hero, posts }) => {
  return (
    <Layout
      title={ hero.title }
      description={ hero.subheading }>
      <Hero {...hero}/>
      <PostList posts={posts}/>
    </Layout>
  );
};

TeamPage.getInitialProps = async ({ query }) => {
    const { id } = query;
    const { posts = [], hero } = (await client.getContentItem(id as string)).toJSON();
    const { alt, seo } = hero.featuredImage;

    const path = (
      image(hero.featuredImage.image)
        .url()
        .seoFileName(seo || alt)
        .format(ImageFormat.PNG)
        .build()
    );

    Object.assign(hero, {
      featuredImage: {
        path,
        alt,
      },
    });

    return { posts, hero } as TeamPage;
};

export default TeamPage;