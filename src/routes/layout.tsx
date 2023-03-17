// The layout.tsx file serves to put together the components of the page.
// To remove the layout for a certain route, add an exclamation mark at the en of its name like so: index!.jsx
import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';

import Header from '../components/header/header';

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section class="container">
          <Slot />
        </section>
      </main>
      <footer>
        <p>Copyright 2023 Quik App</p>
      </footer>
    </>
  );
});
