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

  const allValues: any = {}

  Object.keys(data).forEach(key => {
    if (allValues.hasOwnProperty(key)) {
      allValues[key] = null
    }
  })

  Object.keys(data).forEach(key => {
    const value = data[key]
    createNode({
      ...allValues,
      ...value,
      children: [],
      id: createNodeId(`kerckhoff-${key}`),
      internal: {
        content: JSON.stringify(value),
        contentDigest: createHash('md5')
          .update(JSON.stringify(value))
          .digest('hex'),
        type: 'KerckhoffArticle',
      },
      parent: null,
    })
  })
}
