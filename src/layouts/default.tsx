import * as React from 'react';
import Head from 'next/head';

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
})

export default ({ children, title, description }: LayoutProps) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <title>{ title }</title>
                <meta name="description" content={ description }/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                <link href="https://fonts.googleapis.com/css?family=Space+Mono:400,600&display=swap" rel="stylesheet"></link>
            </Head>
            <Header />


            <ThemeProvider theme={theme}>
                <main>
                    {children}
                </main>
            </ThemeProvider>
        </>
    );
};
