import * as React from "react";
import { Schema } from "../../next-env";

import "./hero.scss";

export type HeroProps = Schema<{
    title: string;
    subheading?: string;
    backgroundColor?: string;
    featuredImage?: {
        path: string;
        alt: string;
    };
}>;

export const Hero: React.SFC<HeroProps> = ({
    title,
    subheading,
    featuredImage = { path: "/static/images/blog/code_review.svg", alt: "code review" },
    backgroundColor,
}) => {
    return (
        <section className="hero__container" style={{ backgroundColor }}>
            <div className="hero__content-container">
                <div className="hero__text-container">
                    <h1 className="hero__title fade">{title}</h1>
                    <p className="hero__subheading fade">{subheading}</p>
                </div>
                {featuredImage && (
                    <img className="hero__image fade" src={featuredImage.path} alt={featuredImage.alt} />
                )}
            </div>
        </section>
    );
};
