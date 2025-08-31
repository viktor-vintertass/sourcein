This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Custom

### Notes
#### Note1
if you use the old state "newValue" when updating etc using "setNewValue", for example if it was a counter and you did counter++. 
remeber "newValue" is not updated until next render, meaning if you do 
do use newValue and then modify it will
setNewValue, and then want to use that
value by calling newValue, that value is not yet updated.

you can solve that by intead use a function and return the value.
so instead of doing:
setNewValue("123)
you do:
setNewValue((currentNewValue) => {
    return currentNewValue++
})

#### Note2
list.map((item, index))
dont use index since that will change when item is added/deleted

#### Note3
onclick has to be written as
() => function()
and not function() directly, because
then it's being invoked

#### Note4
can do something called short circuit
->
{list.length === 0 && "No items"}
will simple print the text "No items" when the list is empty

#### Note5
useEffect for storage ->
  useEffect(() => {

  },[list])
means runs this every time the second object, list in this case change

#### Note6
hooks has to be at top of the file, 
and cant run conditional

#### Note7
#tailwind css
@media (min-width: 300px) and  (max-width: 600px){
}

replaced with:
@media (300px <= width <= 600px) or (orientation : landscape){
}

container, can be more specific, style related to the container you
are inside. cqw -> vw , cqh -> vh.
can see container section in debugger in browser