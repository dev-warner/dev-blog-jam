import * as React from "react";
import readingTime from "reading-time";

import { Media, Schema } from "../../next-env";
import { image } from "../../services/dc-connector";
import { AuthorCard } from "../AuthorCard/AuthorCard";
import { AuthorType } from "../PostList/PostList";
import { TagList } from "../TagList/TagList";

import "./postMeta.scss";

type PostMetaType = Schema<{
    tags: string[];
    body: string;
    author: AuthorType;
    displayTime?: boolean;
}>;

export const PostMeta: React.SFC<PostMetaType> = ({ tags, body, author, displayTime = true }) => {
    const { profilePic } = author;

    const calculateReadingTime = (body: string) => {
        const { text } = readingTime(body);

        return text;
    };

    const createProfilePicture = (profilePic: Media) => {
        return image(profilePic)
            .url()
            .width(40)
            .height(40)
            .seoFileName(profilePic.name)
            .build();
    };

    return (
        <section className="post-meta">
            <div className="post-meta__group">
                <AuthorCard
                    name={author.name}
                    image={createProfilePicture(profilePic)}
                    info={author.info}
                    twitter={author.twitter}
                />
                <div className="post-meta__reading fade">
                    {displayTime && calculateReadingTime(body)}
                </div>
            </div>

            <div className="post-meta__tags">
                {tags && <TagList tags={tags} />}
            </div>
        </section>
    );
};
