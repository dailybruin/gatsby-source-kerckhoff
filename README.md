# gatsby-source-kerckhoff

[![npm](https://img.shields.io/npm/v/@dailybruin/gatsby-source-kerckhoff.svg)](https://www.npmjs.com/package/@dailybruin/gatsby-source-kerckhoff)
[![Build Status](https://travis-ci.com/dailybruin/gatsby-source-kerckhoff.svg?branch=master)](https://travis-ci.com/dailybruin/gatsby-source-kerckhoff)
[![dependencies Status](https://david-dm.org/dailybruin/gatsby-source-kerckhoff/status.svg)](https://david-dm.org/dailybruin/gatsby-source-kerckhoff)
[![devDependencies Status](https://david-dm.org/dailybruin/gatsby-source-kerckhoff/dev-status.svg)](https://david-dm.org/dailybruin/gatsby-source-kerckhoff?type=dev)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![license](https://img.shields.io/github/license/daily-bruin/gatsby-source-kerckhoff.svg)](/LICENSE)

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
