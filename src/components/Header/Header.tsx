import * as React from 'react';
import Router from 'next/router';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './header.scss';

export const Header = () => {
    const value = { route: 'Home' };

    const handleChange = option => {
        value.route = option;
        Router.push(`/team/${encodeURIComponent(option.route.toLowerCase())}`);
    };

    return (
        <nav className="navigation">
            <a
                className="navigation__brand"
                href="/"
                aria-label={'Amplience - Amplify Expirence Logo'}
            ></a>
            <Select
                onChange={handleChange}
                value={value.route}
            >
                <MenuItem value={'Titan'}>Titan</MenuItem>
                <MenuItem value={'Turing'}>Turing</MenuItem>
            </Select>
        </nav>
    );
};
