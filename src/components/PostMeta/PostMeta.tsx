import * as React from 'react';
import readingTime from 'reading-time';

import { TagList } from '../TagList/TagList';
import { AuthorCard } from '../AuthorCard/AuthorCard';
import { image } from '../../services/dc-connector';

import './postMeta.scss';

const calculateReadingTime = body => {
    const { text } = readingTime(body);

    return text;
};

export const PostMeta = ({ tags, body, author }) => {
    const { profilePic } = author;

    return (
        <section className="post-meta">
            <div className="post-meta__group">
                <AuthorCard
                    name={author.name}
                    image={createProfilePicture(profilePic)}
                    info={author.info}
                />
                <div className="post-meta__reading">{calculateReadingTime(body)}</div>
            </div>

            <div className="post-meta__tags">
                {tags && <TagList tags={tags} />}
            </div>
        </section>
    );
};

const createProfilePicture = profilePic => {
    return image(profilePic)
        .url()
        .width(40)
        .height(40)
        .seoFileName(profilePic.name)
        .build();
};
