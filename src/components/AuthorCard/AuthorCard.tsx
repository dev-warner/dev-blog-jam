import Avatar from "@material-ui/core/Avatar";
import * as React from "react";

import "./authorCard.scss";

export const AuthorCard = ({ name, image, info }) => {
    return (
        <>
            <section className="author-card">
                <div className="author-card__essential">
                    <Avatar alt={name} src={image} />
                    <span className="author-card__name">- {name}</span>
                </div>
                <p>{info}</p>
            </section>
        </>
    );
};
