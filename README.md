# Next NextUI

This repository contains an easy to consume template for NextJs and NextUI as the UI framework.
It was initially done by [Barry M Wire](https://github.com/barrywre)

This repository contains a basic template of a create-next-app that comes with the following packages out of the box:

- [NextJs](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- [NextUI](https://nextui.org/docs/guide/getting-started)
- [Firebase](https://firebase.google.com/)
- [Bootstrap](https://www.npmjs.com/package/bootstrap)
- [Bootstrap-Icons](https://www.npmjs.com/package/bootstrap-icons)
- [Sass](https://www.npmjs.com/package/sass)
- [Commitlint](https://www.npmjs.com/package/commitlint)
- [Husky](https://www/npmjs.com/package/husky)
- [Husky+Commitlint](https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Setting up the commitlint

- Create a commitlint file:

```bash
touch commitlint.config.js
```

- Configure the commitlint file:

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

- Add a prepare step which enables husky to run the commitlint:

```bash
npm set-script prepare "husky install"
```

- Add a pre-commit step which runs the commitlint:

```bash
npx husky add .husky/pre-commit "npx --no-install commitlint --edit $1"
```

Have fun!
