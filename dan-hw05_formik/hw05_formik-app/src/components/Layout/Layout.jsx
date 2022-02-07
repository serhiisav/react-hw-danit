import { Outlet } from "react-router-dom"
import Header from "../Header/Header"


const Layout = () => {
    return (
        <>
            <Header />
            <main className="main-page">
                <Outlet />
            </main>
        </>
    )
}
export default Layout;