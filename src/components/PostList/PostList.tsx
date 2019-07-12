import * as React from 'react';

import { PostMeta } from '../PostMeta/PostMeta';
import { AuthorCard } from '../AuthorCard/AuthorCard';
import { Schema, Media } from '../../next-env';
import { PostReferenceType } from '../../pages/post';
import { ButtonLink } from '../Button/Button';
import { image } from '../../services/dc-connector';

import './postList.scss';

export const PostList: React.SFC<PostListProps> = ({
    posts = []
}) => {
    return (
        <section className="post-list__container">
            {posts.map(({ title, excert, tags, slug, author }, index) => {
                const { profilePic } = author;

                return (
                    <article className="post-list__post-item" key={index}>
                        <h3>{title}</h3>
                        <AuthorCard name={author.name} image={createProfilePicture(profilePic)} />
                        <PostMeta body={excert} tags={tags} />
                        <p>{excert}</p>
                        <ButtonLink
                            prefetch={true}
                            href={`/post/${encodeURIComponent(slug)}`}
                            variant="outlined" color="primary"
                            label='Read More'/>
                    </article>
                );
            })}
        </section>
    );
};

export type PostPreviewType = Schema<{
    title: string;
    excert: string;
    slug: string;
    tags?: string[];
    post: PostReferenceType[];
    author: AuthorType;
}>;

export type PostListProps = { posts: PostPreviewType[] };

export type AuthorType = Schema<{
    name: string;
    info: string;
    twitter: string;
    profilePic: Media;
}>;

const createProfilePicture = profilePic => {
    return image(profilePic)
        .url()
        .width(40)
        .height(40)
        .seoFileName(profilePic.name)
        .build();
}