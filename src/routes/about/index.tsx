import { component$, useSignal, useStyles$ } from "@builder.io/qwik";
import Modal from "~/components/modal/modal";
import AboutStyles from "./about.css?inline";

export default component$(() => {
// Using the hook below for styling makes all the imported styles apply to the page and not specific to the route.
    useStyles$(AboutStyles)

    const modalVisible = useSignal(false)

    return (
        <article>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut et assumenda. Obcaecati perspiciatis error dicta, ducimus enim, natus rerum officia vero consectetur dolores voluptate aliquid quia laborum laudantium ipsum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut et assumenda. Obcaecati perspiciatis error dicta, ducimus enim, natus rerum officia vero consectetur dolores voluptate aliquid quia laborum laudantium ipsum!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut et assumenda. Obcaecati perspiciatis error dicta, ducimus enim, natus rerum officia vero consectetur dolores voluptate aliquid quia laborum laudantium ipsum!</p>
            
            <button onClick$={() => modalVisible.value = true}>Open Modal</button>

            {modalVisible.value && (
                //Passing content as Slot to the main content
                <Modal>
                    {/*  this will look for a slot with name "content" and place the div inside of it */}
                    <div q:slot="content">
                        <h2>Great News!!!</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div q:slot="footer">
                        <button>Sign up now!</button>
                    </div>
                </Modal>
            )}

        </article>
    )
})