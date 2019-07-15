import * as React from "react";
import { PostType } from "../../pages/post";
import { image } from "../../services/dc-connector";
import { PostMeta } from "../PostMeta/PostMeta";

import { ButtonLink } from "../Button/Button";
import { RelatedPosts } from "../RelatedPosts/RelatedPosts";

import "./postContent.scss";

export const PostContent: React.SFC<PostType> = ({ tags, body, authors, relatedPosts }) => {
    const author = authors[0];
    return (
        <>
            <section className="post__container">
                <PostMeta tags={tags} body={body} author={author} />
                <article dangerouslySetInnerHTML={{ __html: body }}/>
                <ButtonLink className="post__button" href="/" label="Back"/>
                <RelatedPosts posts={relatedPosts}/>
            </section>
        </>
    );
};
