/// <reference types="next" />
/// <reference types="next/types/global" />

export type Schema<T = {}, K = {}> = T & {
  contentType?: string;
  _meta?: Meta<K>;
};

export type Media = {
  endpoint: string;
  defaultHost: string;
  id: string;
  name: string;
  mediatype: "image" | "video";
  _meta: Meta;
};

type Meta<T = {}> = {
  schema: string;
  deliveryId?: string;
};
