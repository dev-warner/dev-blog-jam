import * as React from "react";
import { Schema } from "../../next-env";

import "./hero.scss";

export type HeroProps = Schema<{
    title: string;
    subheading?: string;
    featuredImage?: {
        path: string;
        alt: string;
    };
}>;

export const Hero: React.SFC<HeroProps> = ({
    title,
    subheading,
    featuredImage = { path: "/static/images/blog/code_review.svg", alt: "code review" },
}) => {
    return (
        <section className="hero__container">
            <div className="hero__content-container">
                <div className="hero__text-container">
                    <h1 className="hero__title">{title}</h1>
                    <p className="hero__subheading">{subheading}</p>
                </div>
                {featuredImage && (
                    <img className="hero__image" src={featuredImage.path} alt={featuredImage.alt} />
                )}
            </div>
        </section>
    );
};
