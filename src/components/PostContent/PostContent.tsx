import * as React from 'react';
import { PostMeta } from '../PostMeta/PostMeta';
import { PostType } from '../../pages/post';
import { image } from '../../services/dc-connector';

import './postContent.scss';
import { ButtonLink } from '../Button/Button';

export const PostContent: React.SFC<PostType> = ({ tags, body, authors }) => {
    const author = authors[0];
    return (
        <section className="post__container">
            <PostMeta tags={tags} body={body} author={author} />
            <article dangerouslySetInnerHTML={{ __html: body }}/>
            <ButtonLink className='post__button' href="/" label='Back'/>
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