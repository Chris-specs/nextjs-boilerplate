// Hooks
import { Button } from "@components/shared";
import useAuth from "hooks/useAuth"
// Icons
import { SiNextdotjs } from "react-icons/si";

const Header = () => {

    const { logoutReq } = useAuth()

    const logoutHandler = () => {
        logoutReq()
    }

    return (
        <>
            <nav className="flex justify-between p-4">
                <div className="flex items-center gap-2">
                    <SiNextdotjs className="text-4xl" />
                    <span>Boilerplate</span>
                </div>
                <div>
                    <Button onClick={logoutHandler} className='px-4'>Sign Out</Button>
                </div>
            </nav>
        </>
    )
}

const AuthLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default AuthLayout