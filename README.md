# Webpack / Typescript / TailwindCSS / PostCSS & Jest Boilerplate

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

with ESLint, Prettier, Husky and lint-staged for a modern developer-workflow.

## Installation

Run:

```bash
npx @mirkonz/boilerplate init my-new-project-name
```

which creates a `my-new-project-name` project folder in the current directory including the boilerplate.

## To get started run

```bash
cd my-project
```

```bash
npm i
```

To setup a CICD pipeline run the following command:

```bash
npx semantic-release-cli setup
```

Add NPM_TOKEN Secret to your Github repo settings

Customize the `./src` folder and the all the configs to you liking. 🚀

**Start dev server:**

```bash
npm start
```

**Run production build:**

```bash
npm run build
```

## Tip

The [favicons](https://www.npmjs.com/package/favicons) can be configured in the `webpack.config.js`
