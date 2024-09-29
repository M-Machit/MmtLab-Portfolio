import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaArrowUp } from 'react-icons/fa'; // Icon for the back-to-top button
import logo from '../assets/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [showTopBtn, setShowTopBtn] = useState(false); // State to show/hide the back-to-top button

    // Function to toggle sidebar
    const handleNav = () => {
        setNav(!nav);
    };

    // Function to close the sidebar when a link is clicked
    const handleLinkClick = () => {
        setNav(false);
    };

    // Function to scroll back to top smoothly
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Show the back-to-top button after scrolling down 100 pixels
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Prevent scrolling when the sidebar is open
    useEffect(() => {
        if (nav) {
            document.body.style.overflow = 'hidden';  // Disable scroll
        } else {
            document.body.style.overflow = 'auto';  // Enable scroll
        }
    }, [nav]);

    return (
        <div className='relative'>
            <div className='bg-black text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
                <h1 className='text-3xl font-bold primary-color ml-4'>
                    <img src={logo} width={100} height={100} alt="Mohammed Machit Logo" />
                </h1>
                <ul className='hidden md:flex'>
                    <li className='p-5'><a href="#home">Home</a></li>
                    <li className='p-5'><a href="#about">About</a></li>
                    <li className='p-5'><a href="#portfolio">Portfolio</a></li>
                    <li className='p-5'><a href="#contact">Contact</a></li>
                </ul>

                <div onClick={handleNav} className="block md:hidden mr-6">
                    {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>

                {/* Sidebar for mobile view */}
                <div className={nav ? 'z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500 transition-transform transform translate-x-0' : 'fixed left-0 h-full top-0 w-[60%] bg-[#202121] ease-in-out duration-500 transition-transform transform -translate-x-full'}>
                    <h1 className="text-3xl primary-color m-4">
                        <img src={logo} width={100} height={100} alt="Mohammed Machit Logo" />
                    </h1>
                    <ul className="p-8 text-2xl">
                        <li className='p-2'><a href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li className='p-2'><a href="#about" onClick={handleLinkClick}>About</a></li>
                        <li className='p-2'><a href="#portfolio" onClick={handleLinkClick}>Portfolio</a></li>
                        <li className='p-2'><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Back to Top Button */}

            {showTopBtn && (
    <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gray-700 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition-colors md:hidden"
        style={{ zIndex: 1000 }}  
    >
        <FaArrowUp size={20}/>
    </button>
)}


            
        </div>
    );
};

export default Navbar;
