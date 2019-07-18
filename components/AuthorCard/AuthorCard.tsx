import Avatar from '@material-ui/core/Avatar';
import * as React from 'react';

import Link from 'next/link';

import './authorCard.scss';

export const AuthorCard = ({ name, image, info, twitter }: any) => {
    return (
        <>
            <section className="author-card fade">
                <a
                    rel="noopener"
                    className="author-card__essential"
                    href={`https://twitter.com/${twitter}`}
                >
                    <Avatar alt={name} src={image} />
                    <span className="author-card__name">- {name}</span>
                </a>
                <p>{info}</p>
            </section>
        </>
    );
};
