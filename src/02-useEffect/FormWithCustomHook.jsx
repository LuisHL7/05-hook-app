import { useEffect, useState } from "react"

export const FormWithCustomHook = () => {

    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password:''
    });

    const { username, email, password } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    //Lo ideal es que se haga un use effect por cada comportamientos
    useEffect(() => {
        // console.log('useEffect called!');
    }, []) //[] que solo se llame una vez.

    useEffect(() => {
        // console.log('formState changed');
    }, [formState])

    useEffect(() => {
        //   console.log('email changed!');
    }, [email])


    return (
        <>
            <h1> Form with custom Hook </h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="luis@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

        </>
    )
}
