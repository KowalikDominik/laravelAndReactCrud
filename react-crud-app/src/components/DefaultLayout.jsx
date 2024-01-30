import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Nav from "./Nav";

export default function DefaultLayout() {
    const { token } = useStateContext();

    if (!token) {
        return <Navigate to={"/login"} />;
    }

    return (
        <div className="flex">
            <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                <div className="p-6">
                    <Link
                        to={"/"}
                        className="text-white text-3xl font-semibold uppercase hover:text-gray-300"
                    >
                        Admin
                    </Link>
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New Report
                    </button>
                </div>
                <Nav mobile={false}>
                    <Nav.NavItem
                        text={"Dashboard"}
                        to={"/dashboard"}
                        iconName={"fa-tachometer-alt"}
                    />
                    <Nav.NavItem
                        text={"Users"}
                        to={"/users"}
                        iconName={"fa-sticky-note"}
                    />
                </Nav>
            </aside>

            <div className="w-full flex flex-col h-screen overflow-y-hidden">
                <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                    <div className="w-1/2"></div>
                    <div className="relative w-1/2 flex justify-end">
                        <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                            <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
                        </button>
                        {/* <button className="h-full w-full fixed inset-0 cursor-default"></button> */}
                        <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16">
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-violet-400 hover:text-white"
                            >
                                Account
                            </a>
                            <a
                                href="#"
                                className="block px-4 py-2 hover:bg-violet-400 hover:text-white"
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>
                </header>
                <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
                    <div className="flex items-center justify-between">
                        <Link to={"/"}>
                            <a className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
                                Admin
                            </a>
                            <button className="text-white text-3xl focus:outline-none">
                                <i className="fas fa-bars"></i>
                                <i className="fas fa-times"></i>
                            </button>
                        </Link>
                    </div>
                    <Nav mobile={true}>
                        <Nav.MobileNavItem
                            text={"Dashboard"}
                            to={"/dashboard"}
                            iconName={"fa-tachometer-alt"}
                        />
                        <Nav.MobileNavItem
                            text={"Users"}
                            to={"/users"}
                            iconName={"fa-sticky-note"}
                        />{" "}
                        <Nav.MobileNavItem
                            text={"My Account"}
                            to={"/users"}
                            iconName={"fa-sticky-note"}
                        />{" "}
                        <Nav.MobileNavItem
                            text={"Sign Out"}
                            to={"/users"}
                            iconName={"fa-sticky-note"}
                        />
                    </Nav>
                    <button className="w-full bg-white font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i> New User
                    </button>
                </header>

                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">
                        <div className="w-full mt-12">
                            <Outlet />
                        </div>
                    </main>

                    <footer className="w-full bg-white text-right p-4">
                        Built by{" "}
                        <a
                            target="_blank"
                            href="https://davidgrzyb.com"
                            className="underline"
                            rel="noreferrer"
                        >
                            David Grzyb
                        </a>
                        .
                    </footer>
                </div>
            </div>

            <div></div>
        </div>
    );
}
