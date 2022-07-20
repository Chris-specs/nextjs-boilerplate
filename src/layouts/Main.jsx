import { SiNextdotjs } from "react-icons/si";

const Header = () => {
    return (
        <>
            <nav className="p-4">
                <div className="flex items-center gap-2">
                    <SiNextdotjs className="text-4xl" />
                    <span>Boilerplate</span>
                </div>
            </nav>
        </>
    )
}

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

export default MainLayout