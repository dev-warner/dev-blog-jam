import * as React from "react";

import Button from "@material-ui/core/Button";
import Link from "next/link";

type ButtonType = {
    href?: string;
    color?: "inherit" | "primary" | "secondary" | "default";
    variant?: "text" | "outlined" | "contained";
    label: string;
    className?: string;
};

export const ButtonLink: React.SFC<ButtonType> = ({
    href = "/",
    color = "primary",
    variant = "outlined",
    label = "",
}) => (
    <Link href={href}>
        <Button variant={variant} color={color}>
            <a rel="noopener">{label}</a>
        </Button>
    </Link>
);
