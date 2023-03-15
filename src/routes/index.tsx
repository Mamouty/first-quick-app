import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  return (
    <div>
      <h2>Hello World</h2>
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
