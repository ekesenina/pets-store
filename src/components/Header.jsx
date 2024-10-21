import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg'

const Header = () => {
    return(
        <header>
            <img src={logo} alt="logo"></img>
            <nav>
                <NavLink to='/'>Главная</NavLink>
                <NavLink to='/products'>Каталог</NavLink>
            </nav>
        </header>
    );
};

export default Header;