import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"

export default function Basic() {

    return (
        <div className="h-full">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}