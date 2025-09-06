This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
Start development server:

```bash
npm run dev
```

## To deploy
- More information can be found here: https://blog.logrocket.com/gh-pages-react-apps/
- We copy some files during build: `copy CNAME out\\CNAME && copy .nojekyll out\\.nojekyll`
- We use the branch `gh-pages` for our output (index.html is located there)
- We use the `master` branch for our development

### Deploy script to Github pages

```bash
npm run deploy
```