/* we use this file to connect our project with sanity */
/* we use it once in the project and can be called every where */

import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'gqfomifc',
    dataset: 'production',
    apiVersion: '2023-01-19',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
})

/* 
    projectId: Tell sanity which project you're working on
    dataset: To know if we're on development or production
    apiVersion: 
*/

const builder = imageUrlBuilder(client);

/* sanity is going to give us access to the urls where our images are stored*/

export const urlFor = (source) => builder.image(source);