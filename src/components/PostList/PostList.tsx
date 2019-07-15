import * as React from "react";

import { Media, Schema } from "../../next-env";
import { PostReferenceType } from "../../pages/post";
import { ButtonLink } from "../Button/Button";
import { PostMeta } from "../PostMeta/PostMeta";

import "./postList.scss";

export const PostList: React.SFC<PostListProps> = ({
    posts = [],
}) => {
    return (
        <section className="post-list__container">
            {posts.map(({ title, excert, tags, slug, author }, index) => {

                return (
                    <article className="post-list__post-item" key={index}>
                        <h3>{title}</h3>
                        <PostMeta body={excert} tags={tags} author={author} />
                        <p>{excert}</p>
                        <ButtonLink
                            href={`/post/${encodeURIComponent(slug)}`}
                            variant="outlined" color="primary"
                            label="Read More"/>
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
