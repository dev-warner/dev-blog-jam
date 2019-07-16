const withSass = require('@zeit/next-sass');
const withManifest = require('next-manifest');
const withOffline = require('next-offline');
const { ContentClient } = require('dc-delivery-sdk-js');

const client = new ContentClient({ account: 'ampeng' });

async function getTeamLinks(id) {
    const data = (await client.getContentItem(id)).toJSON();
    const { posts } = data;
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

    return pages;
}

function getTeamPages(teamList) {
    return teamList.reduce((teams, { teamName, teamSlot: { id } }) => {
        return Object.assign(teams, {
            [`/team/${encodeURIComponent(teamName.toLowerCase())}`]: {
                page: '/team',
                query: { id }
            }
        });
    }, {});
}

function getBlogsFromTeams(teamList) {
    return teamList.reduce(async (teams, { teamName, teamSlot: { id } }) => {
        const blogs = await getTeamLinks(id);

        return Object.assign(teams, { ...blogs });
    }, {});
}

module.exports = withOffline(
    withManifest(
        withSass({
            exportPathMap: async function() {
                const data = (await client.getContentItem(
                    '5034b8ce-8e08-4bfe-b1df-fbd600f06ff9'
                )).toJSON();
                const {
                    teamlist,
                    _meta: { deliveryId: id }
                } = data;
                const teamPages = getTeamPages(teamlist);
                const pages = await getBlogsFromTeams(teamlist);
                return Object.assign({}, pages, teamPages, {
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
