import { component$, useSignal, useStore, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";

export default component$(() => {
// By specifying scoped in the hook below we make the styles apply only to the index.tsx file of this route
    useStylesScoped$(ContactStyles)

    const formVisible = useSignal(false)
    const formState = useStore({ name: '', message: '' })

    return (
        <article>
            <h2>Contact</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos aut et assumenda. Obcaecati perspiciatis error dicta, ducimus enim, natus rerum officia vero consectetur dolores voluptate aliquid quia laborum laudantium ipsum!</p>
            
            <button onClick$={() => formVisible.value = true}>Contact Me</button>
            {formVisible.value && (

                <form preventdefault:submit onSubmit$={() => {
                    console.log(formState.name, formState.message)
                    //resetting the values of name and message:
                    formState.name = ''
                    formState.message = ''
                }}>
                    <label>
                        <span>Your name:</span>
                        <input
                         value={formState.name}
                         type="text"
                         //putting e.target so that TypeScript knows it will have a value property 
                         onInput$={(e) => formState.name = (e.target as HTMLInputElement).value }
                         />
                    </label>
                    <label>
                        <span>Your name:</span>
                        <textarea
                         value={formState.message}
                         onInput$={(e) => formState.message = (e.target as HTMLInputElement).value }
                        ></textarea>
                    </label>

                    <button>Send</button>
                    <p>{formState.name}</p>
                    <p>{formState.message}</p>
                </form>
            )}
            

        </article>
    )
})