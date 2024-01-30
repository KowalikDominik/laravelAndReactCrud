export default function UserHeaderToolbar() {
    const onLogout = (ev) => {
        ev.preventDefault();
    };

    return (
        <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
            <div className="w-1/2"></div>
            <div className="relative w-1/2 flex justify-end">
                <button className="realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                    <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" />
                </button>
                {/* <button className="h-full w-full fixed inset-0 cursor-default"></button> */}
                <div className="absolute w-32 bg-white rounded-lg shadow-lg pb-2 mt-16">
                    <div
                        href="#"
                        className="block bg-gray-200 px-4 py-2 rounded-t-lg"
                    >
                        Dominik
                    </div>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-violet-400 hover:text-white"
                    >
                        Account
                    </a>
                    <a
                        href="#"
                        className="block px-4 py-2 hover:bg-violet-400 hover:text-white"
                        onClick={onLogout}
                    >
                        Logout
                    </a>
                </div>
            </div>
        </header>
    );
}
