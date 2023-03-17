import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./Contact.css?inline";

export default component$(() => {
// By specifying scoped in the hook below we make the styles apply only to the index.tsx file of this route
    useStylesScoped$(ContactStyles)

    return (
        <article>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut et assumenda. Obcaecati perspiciatis error dicta, ducimus enim, natus rerum officia vero consectetur dolores voluptate aliquid quia laborum laudantium ipsum!</p>

        </article>
    )
})