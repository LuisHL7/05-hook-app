import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'luis@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState( {
            ...formState,
            [ name ]: value
        })
    }

    //Lo ideal es que se haga un use effect por cada comportamientos
    useEffect( () => {
        // console.log('useEffect called!');
    },[]) //[] que solo se llame una vez.

    useEffect( () => {
        // console.log('formState changed');
    },[ formState ])

    useEffect(() => {
    //   console.log('email changed!');
    }, [ email ])
    
    
    return (
        <>
            <h1> Simple Form </h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="luis@google.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'strider2') && <Message />
            }

        </>
    )
}
