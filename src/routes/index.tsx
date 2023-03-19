import { component$, useSignal, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  // The useSignal hook is used for simple variables such as numbers and strings.
  const name = useSignal('Mamouty');
  // The useStore hook is used for objects and arrays.
  const person = useStore({ name: 'peach', age: 30});

  const blogs = useStore([
    {id: 1, title: 'my first blog'},
    {id: 2, title: 'my second blog'},
    {id: 3, title: 'marmite rules!'}
  ])

  return (
    <div>
      <h2>Hello World</h2>
      <p>Hello, {name.value}</p>
      <p>Hello, {person.name} - {person.age}</p>  

      <button onClick$={() => name.value = 'luigi'}>click me</button>
      <button onClick$={() => person.name = 'bowser'}>click me</button>

      {blogs.map(blog =>(
        <div key={blog.id}>{blog.title}</div>
      ))}

      <button onClick$={() => blogs.pop()}>remove a blog</button>
    </div>
  );
});

//The DocumentHead down below will be injected to the router-head.tsx file.
//DocumentHead contains all the elements to be included for the head of the html document.
//The elements have to be declared as below:
export const head: DocumentHead = {
  title: 'My first quick app',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
  links: [
    {
      rel: 'stylesheet',
      href: 'somestylesheet.com/styles.css'
    }
  ]
};
