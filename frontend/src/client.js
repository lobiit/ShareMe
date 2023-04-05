import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'xavd5i8y',
    dataset: 'production',
    apiVersion: '2021-10-21',
    useCdn: true,
    token: 'skBF7UiErNNQ0y6u4ZwHXamhtCFaoSXAVlgCkV3ZNvBOA7uc3YIAn9Nh0wW2COvsGX8reOvR8dbKvFzBqkCapQypJNoZdEJbchtkWFUapbbcNjoYlz2EsUlq9EWYH4tHrl0uLyaXIgmkdy2eprRCaC1SuUhEVp5vzvYxCcsSQCcsAIkEKiTc',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
