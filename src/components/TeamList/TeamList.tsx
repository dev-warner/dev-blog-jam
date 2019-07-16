import * as React from 'react';
import Link from 'next/link';
import { ButtonLink } from '../Button/Button';
import { Schema } from '../../next-env';

import './teamList.scss';

export type TeamListType = Schema<{
    teamSlot: Schema;
    teamName: string;
    teamSlogan: string;
    featuredImage: {
        path: string;
        alt: string;
    };
}>;

export const TeamList: React.SFC<{ teamList: TeamListType[] }> = ({
    teamList = []
}) => {
    return (
        <section className="team-list__container">
            {teamList.map(({ teamName, teamSlogan, featuredImage }, index) => {
                const href = `/team/${encodeURIComponent(
                    teamName.toLowerCase()
                )}`;
                return (
                    <Link href={href}>
                        <div className="team-list__item fade" key={index}>
                            <article className="team-list__text">
                                <h2>{teamName}</h2>
                                <h3>{teamSlogan}</h3>
                                <ButtonLink href={href} label={'View Posts'} />
                            </article>
                            <img
                                className="team-list__image"
                                src={featuredImage.path}
                                alt={featuredImage.alt}
                            />
                        </div>
                    </Link>
                );
            })}
        </section>
    );
};
