import * as React from 'react';

import Link from 'next/link';
import Button from '@material-ui/core/Button';

type ButtonType = {
    href: string;
    color?: 'inherit' | 'primary' | 'secondary' | 'default';
    variant?: 'text' | 'outlined' | 'contained';
    label: string;
    prefetch?: boolean;
    className?: string;
};

export const ButtonLink: React.SFC<ButtonType> = ({
    href = '/',
    color = 'primary',
    variant = 'outlined',
    label = '',
    prefetch = false,
    className
}) => (
    <Link href={href} prefetch={prefetch}>
        <Button variant={variant} color={color}>
            {label}
        </Button>
    </Link>
);
