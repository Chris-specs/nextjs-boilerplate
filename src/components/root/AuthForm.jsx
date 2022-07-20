// Components
import { Button, Input } from "@components/shared"
import useAuth from "hooks/useAuth"

const AuthForm = () => {

    const { authReq } = useAuth()

    const formHandler = (e) => {
        e.preventDefault()
        
        const form = new FormData(e.target)
        const formData = Object.fromEntries(form)

        authReq(formData)
    }

    return (
        <>
            <form onSubmit={formHandler} className="w-full max-w-md">
                <fieldset className="mb-8">
                    <label>User</label>
                    <Input type='text' name='user' required />
                </fieldset>
                <Button type='submit'>Sign in</Button>
            </form>
        </>
    )
}

export default AuthForm