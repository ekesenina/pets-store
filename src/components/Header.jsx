import { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'
import menu from '../assets/header/burger.svg'
import cart from '../assets/header/cart.svg'
import liked from '../assets/header/liked.svg'
import login from '../assets/header/login.svg'


const Header = () => {

    const [navIsOpen, setNavIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setNavIsOpen(prevState => !prevState);
    };

    // const handkeClickOutside = (event) => {

    // }

    return(
        <header className='header'>
            <img 
                src={menu} 
                alt="menu"
                onClick={toggleMenu}
                className='header__menu'
            />
            {navIsOpen &&(
                <nav className='header__nav'>
                    <NavLink to='/' className='header__nav__link'>Главная</NavLink>
                    <NavLink to='/products' className='header__nav__link'>Каталог</NavLink>
                </nav>
            )}
            <img src={logo} alt="logo"  className='header__logo'/>
            <div className='header__actions'>
                <NavLink to='/favourites' className='header__actions__link'>
                    <img 
                        src={liked} 
                        alt="favourites"
                        className='header__actions__link__icon'
                    />
                </NavLink>
                <NavLink to='/cart' className='header__actions__link'>
                    <img 
                        src={cart} 
                        alt="cart"
                        className='header__actions__link__icon'
                    />
                </NavLink>
                <NavLink to='/login' className='header__actions__link'>
                    <img 
                        src={login} 
                        alt="login"
                        className='header__actions__link__icon'
                    />
                </NavLink>
            </div>
        </header>
    );
};

export default Header;