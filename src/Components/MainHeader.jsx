import { useRef, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './MainHeader.css';

const links = [
    { path: "/lesson1", label: "Lesson 1" },
    { path: "/lesson2", label: "Lesson 2" },
    { path: "/lesson3", label: "Lesson 3" },
    { path: "/lesson4", label: "Lesson 4" },
    { path: "/lesson5", label: "Lesson 5" },
    { path: "/lesson6", label: "Lesson 6" },
    { path: "/lesson7", label: "Lesson 7" },
    { path: "/lesson8", label: "Lesson 8" },
    { path: "/lesson9", label: "Lesson 9" },
    { path: "/lesson10", label: "Lesson 10" },
    { path: "/lesson11", label: "Lesson 11" },
    { path: "/lesson12", label: "Lesson 12" },
    { path: "/lesson13", label: "Lesson 13" },
    { path: "/lesson14", label: "Lesson 14" },
    { path: "/lesson15", label: "Lesson 15" },
    { path: "/lesson16", label: "Lesson 16" },
    { path: "/lesson17", label: "Lesson 17" },
    { path: "/lesson18", label: "Lesson 18" },
];

const Header = () => {
    const navRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);
    const location = useLocation();

    const scrollLeft = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (navRef.current) {
            navRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (navRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = navRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        if (navRef.current) {
            navRef.current.addEventListener('scroll', handleScroll);
            handleScroll(); // Check scroll position on initial render
        }
        return () => {
            if (navRef.current) {
                navRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (navRef.current) {
            // Scroll to the active link on location change
            const activeLink = navRef.current.querySelector(`a[href='${location.pathname}']`);
            if (activeLink) {
                activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }
        }
    }, [location.pathname]);

    return (
        <header className="main-header">
            {showLeftButton && (
                <button className="scroll-button left" onClick={scrollLeft}>
                    &#9664;
                </button>
            )}
            <nav ref={navRef}>
                <ul className="link-list">
                    {links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? 'active' : ''}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            {showRightButton && (
                <button className="scroll-button right" onClick={scrollRight}>
                    &#9654;
                </button>
            )}
        </header>
    );
};

export default Header;
