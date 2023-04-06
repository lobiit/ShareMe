import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'xavd5i8y',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token:REACT_APP_SANITY_TOKEN ,
    ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
