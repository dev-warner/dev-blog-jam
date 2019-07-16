import Router from "next/router";
import * as React from "react";
import { PostType } from "../../pages/post";
import { PostMeta } from "../PostMeta/PostMeta";

import { Button } from "@material-ui/core";
import { RelatedPosts } from "../RelatedPosts/RelatedPosts";

import "./postContent.scss";

export const PostContent: React.SFC<PostType> = ({
    tags,
    body,
    authors,
    relatedPosts,
}) => {
    const author = authors[0];
    return (
        <>
            <section className="post__container">
                <PostMeta tags={tags} body={body} author={author} />
                <article
                    className="fade"
                    dangerouslySetInnerHTML={{ __html: body }}
                />

                <Button
                    onClick={() => Router.back()}
                    className="post__button fade"
                    variant="outlined"
                    color="primary"
                >
                    <a rel="noopener">
                        Back
                    </a>
                </Button>
                <RelatedPosts posts={relatedPosts} />
            </section>
        </>
    );
};
