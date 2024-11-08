import { useState } from "react";
import Link from "../Link/Link";
import { LuMenu } from "react-icons/lu";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
    const [open, setOpen]= useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/faq', name: 'FAQ' }
      ];

    return (
        <nav>
            
            <div className="md:hidden bg-yellow-600" onClick={() => setOpen(!open)}>
            {
                open === true ? 
                <AiOutlineClose className="text-3xl cursor-pointer"></AiOutlineClose> 
                : <LuMenu className="text-3xl cursor-pointer d-n"></LuMenu>
            }
            </div>
               
            <ul className={`md:flex duration-1000 absolute md:static z-50
                ${open ? 'left-0' : '-left-80'}
                bg-orange-600 px-6 `}>
            {
                routes.map(route => <Link  key={route.id} route={route}></Link> )
            }
            </ul>
        </nav>
    );
};

export default NavBar;