import Header from '../../components/eduHeader'
import Footer from '../../components/Footer'
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="h-full">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}