const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')
const { ContentClient } = require('dc-delivery-sdk-js');

module.exports = withOffline(withSass({
  dir: './src',
  build: './dist',
  workboxOptions: {
    generateSw: true,
    generateInDevMode: true,
    runtimeCaching: [
      {
        urlPattern: /.png$/,
        handler: 'CacheFirst'
      }
    ]
  },
  exportPathMap: async function () {
    const client = new ContentClient({ account: 'ampeng' })
    const data = (await client.getContentItem('5a62604a-610e-406d-a1e0-484eb30b6c02')).toJSON()
    const { posts, _meta: { deliveryId: id } } = data;
    const pages = (
      posts
        .reduce((pages, { post: { id }, slug }) => {
          const page = {
            [`/post/${encodeURIComponent(slug)}`]: {
              page: '/post',
              query: { id }
            }
          };
          console.log('Route created');
          console.log(`Path: ${slug}`);
          console.log(`Delivery: ${id}`);
          return Object.assign(pages, page)
        }, {})
    );

    return Object.assign({}, pages, {
      '/': {
        page: '/',
        query: { id }
      }
    })
  }
}))
