import { NavLink } from 'react-router-dom';
import error from '../assets/error.png'

const ErrorPage = () => {
    return(
        <div className="error">
            <h1 className="error__title">Oooops!</h1>
            <img 
                src={error} 
                alt="error 404"
                className='error__img'
            />
            <h3 className="error__subtitle">На странице ведутся котические работы</h3>
            <p className="error__text">Приносим извинения за неудобства</p>
            <NavLink to='/' className='error__button'>Вернуться на главную</NavLink>
        </div>
    )
};

export default ErrorPage;