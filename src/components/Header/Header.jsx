import React, { useState } from 'react';
import './header.css';
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';
import { div, img } from 'framer-motion/client';
import { Link } from 'react-scroll';

const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="header">
            <img src={Logo} alt="" className="logo" />

            {menuOpen === false && mobile === true ? (
                <div
                    style={{
                        backgroundColor: 'var(--appColor)',
                        padding: '0.5rem',
                        borderRadius: '5px',
                    }}
                    onClick={() => setMenuOpen(true)}
                >
                    <img src={Bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>
            ) : (
                <ul className="header-menu">
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="header"
                            span={true}
                            smooth={true}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="programs"
                            span={true}
                            smooth={true}
                        >
                            Programs
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="Reasons"
                            span={true}
                            smooth={true}
                        >
                            Why Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="plans"
                            span={true}
                            smooth={true}
                        >
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link
                            onClick={() => setMenuOpen(false)}
                            to="Testimonials"
                            span={true}
                            smooth={true}
                        >
                            Testimonials
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Header;
