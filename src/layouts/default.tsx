import Head from 'next/head';
import * as React from 'react';
import Manifest from 'next-manifest/manifest'

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Header } from '../components/Header/Header';

import './default.scss';

interface LayoutProps {
    children: JSX.Element[];
    title: string;
    description: string;
}

const theme = createMuiTheme({
    palette: {
        primary: { main: '#dd1a5b' },
        secondary: { main: '#039be5' }
    }
});

export default ({ children, title, description }: LayoutProps) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <title>{title}</title>

                <meta name="description" content={description} />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Manifest
                    href='/static/manifest/manifest.json'
                    themeColor='#29333f'
                    initialScale='1'
                />
                <link
                    rel="icon"
                    type="image/x-ico"
                    href="/static/favicon.ico"
                ></link>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/static/icons/apple-touch-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/static/icons/apple-touch-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/static/icons/apple-touch-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/static/icons/apple-touch-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/static/icons/apple-touch-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/static/icons/apple-touch-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/static/icons/apple-touch-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/static/icons/apple-touch-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/static/icons/apple-touch-icon-180x180.png"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Space+Mono:400,600&display=swap"
                    rel="stylesheet"
                ></link>
            </Head>
            <Header />

            <ThemeProvider theme={theme}>
                <main>{children}</main>
            </ThemeProvider>
        </>
    );
};
