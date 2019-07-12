import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';

import './authorCard.scss';

export const AuthorCard = ({ name, image, info }) => {
    return (
        <>
            <section className="author-card">
                <Avatar alt={name} src={image} />
                <span className='author-card__name'>- {name}</span>
            </section>
            <p>{info}</p>
        </>
    );
};
