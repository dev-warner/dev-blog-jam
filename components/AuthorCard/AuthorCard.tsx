import Avatar from "@material-ui/core/Avatar";
import * as React from "react";

import Link from "next/link";
import "./authorCard.scss";

export const AuthorCard = ({ name, image, info, twitter }) => {
    return (
        <>
            <section className="author-card fade">
                <Link
                    href={`https://twitter.com/${twitter}`}
                >
                    <a rel="noopener" className="author-card__essential">
                        <Avatar alt={name} src={image} />
                        <span className="author-card__name">- {name}</span>
                    </a>
                </Link>
                <p>{info}</p>
            </section>
        </>
    );
};
