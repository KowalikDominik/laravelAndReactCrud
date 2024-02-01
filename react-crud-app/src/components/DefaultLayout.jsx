import { Link, Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import Nav from "./Nav";
import UserHeaderToolbar from "./UserHeaderToolbar";
import { Toaster } from "react-hot-toast";

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
                    <Link to="/users/new">
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-plus mr-3"></i> New User
                        </button>
                    </Link>
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
                <UserHeaderToolbar />
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
            <Toaster />
        </div>
    );
}
