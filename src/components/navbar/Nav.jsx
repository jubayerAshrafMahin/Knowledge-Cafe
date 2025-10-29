import React from 'react';

const Nav = () => {
    return (
        <div className="navbar bg-white shadow-sm p-0 ">
        <div className='w-7xl mx-auto flex justify-center p-0'>
        <div className="flex items-center gap-2 btn btn-ghost">
            <i class="fa-solid fa-book-open-reader text-xl text-blue-800"></i>
            <a className="text-2xl p-0">Knowledge Cafe</a>
        </div>
        {/* <div className="flex gap-2">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img
                    alt="Tailwind CSS Navbar component"
                    src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764" />
                </div>
            </div>
            <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div> */}
        </div>
        </div>
    );
};

export default Nav;