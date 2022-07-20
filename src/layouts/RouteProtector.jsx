// Hooks
import { useEffect, useState } from "react"
// Layouts
import AuthLayout from "./Auth"
import MainLayout from "./Main"

const Unauthorized = () => {
    return (
        <>
            <main className="w-full h-full min-h-screen flex justify-center items-center bg-black text-white">
                <h1 className='text-2xl'>401<span className='h-20 mx-4 border-r border-white/50'></span><span className='text-base'>Unauthorized</span></h1>
            </main>
        </>
    )
}

const RouteProtector = ({ children }) => {
    
    const [isAuth, setIsAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const updater = () => {
            setLoading(true)
            setIsAuth(localStorage.getItem('token') !== null);
            setLoading(false)
        }
        updater();
        return () => { };
    });
    

    // Error page 
    if (children.type.name.includes('Error')) {
        return children
    }

    // Loading auth status
    if (loading) {
        return null
    }


    // Auth verification
    if (children.type.protected) {

        if (isAuth) {
            return (
                <AuthLayout>
                    {children}
                </AuthLayout>
            )
        } else {
            return <Unauthorized />
        }

    } else {

        return (
            <MainLayout>
                {children}
            </MainLayout>
        )
        
    }

}

export default RouteProtector