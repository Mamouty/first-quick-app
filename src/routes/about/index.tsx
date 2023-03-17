import { component$, useStyles$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";

export default component$(() => {
// Using the hook below for styling makes all the imported styles apply to the page and not specific to the route.
    useStyles$(AboutStyles)

    return (
        <article>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut et assumenda. Obcaecati perspiciatis error dicta, ducimus enim, natus rerum officia vero consectetur dolores voluptate aliquid quia laborum laudantium ipsum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut et assumenda. Obcaecati perspiciatis error dicta, ducimus enim, natus rerum officia vero consectetur dolores voluptate aliquid quia laborum laudantium ipsum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut et assumenda. Obcaecati perspiciatis error dicta, ducimus enim, natus rerum officia vero consectetur dolores voluptate aliquid quia laborum laudantium ipsum!</p>

        </article>
    )
})