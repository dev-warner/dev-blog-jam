import Layout from "../layouts/default";

import { ImageFormat } from "dc-delivery-sdk-js";
import { NextPage } from "next";
import { Hero, HeroProps } from "../components/Hero/Hero";
import { Schema } from "../next-env";
import { client, image } from "../services/dc-connector";
import { TeamListType, TeamList } from "../components/TeamList/TeamList";

type TeamProps = Schema<{
  hero: HeroProps
  teamList: TeamListType[],
}>;

const Home: NextPage<TeamProps> = ({ hero, teamList }) => {
  return (
    <Layout
      title={ hero.title }
      description={ hero.subheading }>
      <Hero {...hero}/>
      <TeamList teamList={teamList}/>
    </Layout>
  );
};

Home.getInitialProps = async ({ query }) => {
    const { id } = query;
    const { teamlist = [], hero } = (await client.getContentItem(id as string)).toJSON();
    const { alt, seo } = hero.featuredImage;

    const pathCreate = img => (
      image(img)
        .url()
        .seoFileName(seo || alt)
        .format(ImageFormat.PNG)
        .build()
    );

    Object.assign(hero, {
      featuredImage: {
        path: pathCreate(hero.featuredImage.image),
        alt,
      },
    });
    
    teamlist.forEach(team => {
      const { alt: teamAlt } = team.featuredImage;
      Object.assign(team, {
        featuredImage: {
          path: pathCreate(team.featuredImage.image),
          alt: teamAlt,
        },
      })
    })

    return { teamList: teamlist, hero } as TeamProps;
};

export default Home;