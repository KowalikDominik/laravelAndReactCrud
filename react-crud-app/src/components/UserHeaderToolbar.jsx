import { useEffect, useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import api from "../api";
import { User as UserIcon } from "react-feather";
import { useClickOutside } from "../hooks";

const UserMenu = ({ user, onLogout }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const clickRef = useRef();

    const closeMenu = () => {
        setMenuIsOpen(false);
    };

    const onLogoutHandler = (ev) => {
        closeMenu();
        onLogout(ev);
    };

    useClickOutside(clickRef, closeMenu);

    return (
        <div className="relative w-1/2 flex justify-end" ref={clickRef}>
            <button
                onClick={() => {
                    setMenuIsOpen(!menuIsOpen);
                }}
                className="realtive items-center justify-center flex z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none"
            >
                <UserIcon />
            </button>
            {menuIsOpen && (
                <div className="absolute w-32 bg-white rounded-lg shadow-lg pb-2 mt-16">
                    <div className="block bg-gray-200 px-4 py-2 rounded-t-lg">
                        {user.name}
                    </div>
                    {/*  TODO Implement Account Info View */}
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-violet-400 hover:text-white"
                        onClick={() => closeMenu()}
                    >
                        Account
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-violet-400 hover:text-white"
                        onClick={onLogoutHandler}
                    >
                        Logout
                    </a>
                </div>
            )}
        </div>
    );
};

export default function UserHeaderToolbar() {
    const { user, setUser, setToken } = useStateContext();

    const onLogout = (ev) => {
        ev.preventDefault();
        api.post("/logout").then(() => {
            setToken(null);
            setUser({});
        });
    };

    useEffect(() => {
        api.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, [setUser]);

    return (
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-1/2"></div>
            <UserMenu user={user} onLogout={onLogout} />
        </header>
    );
}
