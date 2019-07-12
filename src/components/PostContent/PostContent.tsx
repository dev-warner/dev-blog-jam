import * as React from 'react';
import { PostMeta } from '../PostMeta/PostMeta';
import { AuthorCard } from '../AuthorCard/AuthorCard';
import { PostType } from '../../pages/post';
import { image } from '../../services/dc-connector';

import './postContent.scss';
import { ButtonLink } from '../Button/Button';

export const PostContent: React.SFC<PostType> = ({ tags, body, authors }) => {
    const author = authors[0];
    return (
        <section className="post__container">
            <PostMeta tags={tags} body={body} />
            <AuthorCard
                name={author.name}
                image={createProfilePicture(author.profilePic)}
            />
            <p>{body}</p>
            <ButtonLink href="/" label='Back'/>
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
}