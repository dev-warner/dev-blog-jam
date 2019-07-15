const withSass = require('@zeit/next-sass');
const withManifest = require('next-manifest');
const withOffline = require('next-offline');
const { ContentClient } = require('dc-delivery-sdk-js');

module.exports = withOffline(
    withManifest(
        withSass({
            dir: './src',
            build: './dist',
            exportPathMap: async function() {
                const client = new ContentClient({ account: 'ampeng' });
                const data = (await client.getContentItem(
                    '5a62604a-610e-406d-a1e0-484eb30b6c02'
                )).toJSON();
                const {
                    posts,
                    _meta: { deliveryId: id }
                } = data;
                const pages = posts.reduce((pages, { post: { id }, slug }) => {
                    const page = {
                        [`/post/${encodeURIComponent(slug)}`]: {
                            page: '/post',
                            query: { id }
                        }
                    };
                    console.log('Route created');
                    console.log(`Path: ${slug}`);
                    console.log(`Delivery: ${id}`);
                    return Object.assign(pages, page);
                }, {});

                return Object.assign({}, pages, {
                    '/': {
                        page: '/',
                        query: { id }
                    }
                });
            },
            manifest: {
                name: 'Amplience Development',
                short_name: 'Amplience',
                theme_color: '#29333f',
                background_color: '#29333f',
                display: 'standalone',
                orientation: 'portrait',
                Scope: '/',
                start_url: '/',
                cache: true,
                icons: [
                    {
                        src: '/static/icons/icon-72x72.png',
                        sizes: '72x72',
                        type: 'image/png'
                    },
                    {
                        src: '/static/icons/icon-96x96.png',
                        sizes: '96x96',
                        type: 'image/png'
                    },
                    {
                        src: '/static/icons/icon-128x128.png',
                        sizes: '128x128',
                        type: 'image/png'
                    },
                    {
                        src: '/static/icons/icon-144x144.png',
                        sizes: '144x144',
                        type: 'image/png'
                    },
                    {
                        src: '/static/icons/icon-152x152.png',
                        sizes: '152x152',
                        type: 'image/png'
                    },
                    {
                        src: '/static/icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: '/static/icons/icon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png'
                    },
                    {
                        src: '/static/icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ],
                splash_pages: null
            }
        })
    )
);
