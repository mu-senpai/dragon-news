import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar/LeftNavbar";
import Navbar from "../components/Navbar/Navbar";
import RightNavbar from "../components/RightNavbar/RightNavbar";

const HomeLayout = () => {
    return (
        <div className="max-w-[80%] mx-auto pb-20">
            <header className="space-y-7 py-4">
                <Header></Header>
                <section className="w-full">
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav className="pb-16">
                <Navbar></Navbar>
            </nav>
            <main className="w-full grid grid-cols-12 gap-6">
                <aside className="col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;