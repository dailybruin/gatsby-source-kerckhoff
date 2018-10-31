import fetch from 'node-fetch';
import { createHash } from 'crypto';

interface Options {
  slug: string;
}

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId }: any,
  options: Options
) => {
  const url = `https://kerckhoff.dailybruin.com/api/packages/flatpages/${
    options.slug
  }`;
  const response = await fetch(url);
  const json = await response.json();
  const data = json['data'];

  Object.keys(data).forEach(key => {
    const value = data[key];
    createNode({
      ...value,
      id: createNodeId(`kerckhoff-${key}`),
      parent: null,
      children: [],
      internal: {
        type: 'KerckhoffArticle',
        content: JSON.stringify(value),
        contentDigest: createHash('md5')
          .update(JSON.stringify(value))
          .digest('hex'),
      },
    });
  });
};
