import Layout from "../layouts/default";

import { ImageFormat } from "dc-delivery-sdk-js";
import { NextPage } from "next";
import { Hero, HeroProps } from "../components/Hero/Hero";
import { PostList, PostPreviewType } from "../components/PostList/PostList";
import { Schema } from "../next-env";
import { client, image } from "../services/dc-connector";

type HomeProps = Schema<{
  hero: HeroProps
  posts: PostPreviewType[],
}>;

const Home: NextPage<HomeProps> = ({ hero, posts }) => {
  return (
    <Layout
      title={ hero.title }
      description={ hero.subheading }>
      <Hero {...hero}/>
      <PostList posts={posts}/>
    </Layout>
  );
};

Home.getInitialProps = async ({ query }) => {
    const { id } = query;
    const { posts = [], hero } = (await client.getContentItem(id as string || "5a62604a-610e-406d-a1e0-484eb30b6c02")).toJSON();
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

    return { posts, hero } as HomeProps;
};

export default Home;