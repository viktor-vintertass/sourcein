This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First, run the development server:

```bash
npm run dev
```

## To deploy
read: https://blog.logrocket.com/gh-pages-react-apps/
add an empty `.nojekyll` file in the root in the branch (gh pages)
```bash
npm run build
npm run deploy
```

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