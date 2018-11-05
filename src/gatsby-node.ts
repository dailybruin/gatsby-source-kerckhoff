import { createHash } from 'crypto'
import fetch from 'node-fetch'

interface Options {
  slug: string
}

exports.sourceNodes = async (
  { actions: { createNode }, createNodeId }: any,
  options: Options
) => {
  const url = `https://kerckhoff.dailybruin.com/api/packages/flatpages/${
    options.slug
  }`
  const response = await fetch(url)
  const json = await response.json()
  const { data } = json

  // Each article name is given as a key on in the JSON data, e.g., `"article.aml": {...}`
  Object.keys(data).forEach(key => {
    const article = data[key]
    let content
    if (article.hasOwnProperty('content') && Array.isArray(article.content)) {
      content = article.content.map((element: any) => {
        if (typeof element.value !== 'string') {
          element.value = JSON.stringify(element.value)
        }
        return element
      })
    }

    createNode({
      title: key,
      ...article,
      children: [],
      content,
      id: createNodeId(`kerckhoff-${key}`),
      internal: {
        content: JSON.stringify(article),
        contentDigest: createHash('md5')
          .update(JSON.stringify(article))
          .digest('hex'),
        type: 'KerckhoffArticle',
      },
      parent: null,
    })
  })
}
