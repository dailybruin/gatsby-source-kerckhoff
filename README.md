# gatsby-source-kerckhoff

A Gatsby plugin that draws from
[Kerckhoff](https://github.com/dailybruin/kerckhoff), the Daily Bruin's static
site content manager.

## Usage

Install with your favorite JavaScript package manager, e.g.,

```
yarn add gatsby-source-kerckhoff
```

Then add it to your `gatsby-config.js`:

```js
{
  resolve: 'gatsby-source-kerckhoff',
  options: {
    slug: 'online.demoaml',
  },
},
```

The slug is the last part of your project's Kerckhoff link. For example, the
slug of
`https://kerckhoff.dailybruin.com/manage/packages/flatpages/online.demoaml` is
`online.demoaml`.

## Development

The plugin is written in [TypeScript](https://www.typescriptlang.org/). To build, run

```
yarn build
```

To develop, run

```
yarn start
```
