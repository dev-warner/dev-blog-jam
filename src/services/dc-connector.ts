import { ContentClient, ContentClientConfig, Image } from 'dc-delivery-sdk-js'

export class Client {

  private config: ContentClientConfig;
  private contentClient: ContentClient;

  constructor(config: ContentClientConfig) {
    this.config = config;
    this.contentClient = new ContentClient(config)
  }

  get client() {
    return this.contentClient;
  }

  image(body = {}) {
    return new Image(body, this.config);
  }
}

const blogClient = new Client({ account: 'ampeng' })

export const client = blogClient.client;
export const image = body => blogClient.image(body);
