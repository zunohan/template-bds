const Menu: React.FC = () => {
    return (
        <header>
            <nav className="mt-3">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="bg-green-200/25 rounded-full relative flex items-center justify-between px-4 py-2 h-20">
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden pr-2">
                            {/* Mobile menu button*/}
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {/*
                                    Icon when menu is closed.
                                    Heroicon name: outline/menu
                                    Menu open: "hidden", Menu closed: "block"
                                */}
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                {/*
                                    Icon when menu is open.
                                    Heroicon name: outline/x
                                    Menu open: "block", Menu closed: "hidden"
                                */}
                                <svg
                                    className="hidden h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="block lg:hidden h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                                <img
                                    className="hidden lg:block h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                                    alt="Workflow"
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4">
                                    {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                    <span
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                        aria-current="page"
                                    >
                                        Dashboard
                                    </span>
                                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Team
                                    </span>
                                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Projects
                                    </span>
                                    <span className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                        Calendar
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 flex items-center pr-4 hidden md:block">
                            {/* Profile dropdown */}
                            <div className="relative">
                                <button
                                    type="button"
                                    className="bg-orange-300 text-white font-bold px-4 py-2 flex rounded-full focus:outline-none"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                >
                                    <span className="sr-only">Open user menu</span>
                                    Tu van bao gia
                                </button>

                                {/*
                                Dropdown menu, show/hide based on menu state.

                                Entering: "transition ease-out duration-100"
                                    From: "transform opacity-0 scale-95"
                                    To: "transform opacity-100 scale-100"
                                Leaving: "transition ease-in duration-75"
                                    From: "transform opacity-100 scale-100"
                                    To: "transform opacity-0 scale-95"
                                */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Mobile menu, show/hide based on menu state. */}
                <div className="sm:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a
                            href="#"
                            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                            aria-current="page"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Team
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Projects
                        </a>
                        <a
                            href="#"
                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                        >
                            Calendar
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Menu
