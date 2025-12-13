import { Link, NavLink } from "react-router";
import logoText from "/model.png";

export default function Header() {
    return (
        <nav className="
            w-full 
            p-4 
            z-50 
            bg-transparent
            sticky 
            top-0
            bg-purple-900/50 
            ">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                
                {/* Logo & Brand */}
                <a href="#" className="flex items-center">
                    {/* FIX: Constrain the image's height with a small 'h-10' (or h-12) 
                      and use 'w-auto' to maintain the aspect ratio.
                      This forces the nav bar height to a reasonable size.
                    */}
                    <img 
                        className="h-7 w-auto" 
                        src={logoText} 
                        alt="The Alley SMP Logo" 
                    />
                </a>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-6 text-lg justify-center items-center">
                    <NavLink to="/" className="active:text-purple-700 text-white hover:text-purple-300 transition duration-300 font-semibold" end>Home</NavLink>
                    <NavLink to="/about" className="active:text-purple-700 text-white hover:text-purple-300 transition duration-300 font-semibold" end>About</NavLink>
                    <NavLink to="/gallery" className="active:text-purple-700 text-white hover:text-purple-300 transition duration-300 font-semibold">Gallery</NavLink>
                    
                    {/* Unique Discord CTA (using the accent color) */}
                    <a href="https://discord.gg/HFDYvY4xP2" className="bg-pink-400 text-purple-900 hover:bg-pink-500 transition px-4 py-2 rounded-lg transition duration-300 font-bold shadow-lg">
                        Discord
                    </a>
                </div>

                {/* Mobile Menu Button (Hamburger) - Needs actual implementation */}
                <button className="md:hidden text-white hover:text-yellow-300 focus:outline-none">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    )
}