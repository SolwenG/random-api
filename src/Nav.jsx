import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
    return (
        <nav>
            <div>
            <Link to={'/'}>
                <img src="/src/assets/api.svg" alt="API" />
            </Link>
            </div>

            <ul>
                <li>
                    <Link to={'/random-app'}>
                        <img src="/src/assets/random_user.svg" alt="user" />
                    </Link>
                </li>
                <li>
                    <Link to={'/random-cat'}>
                        <img src="/src/assets/cat.svg" alt="cat" className="cat" />
                    </Link>
                </li>
                <li>
                    <Link to={'/adress'}>
                        <img src="/src/assets/address.svg" alt="adresse" />
                    </Link>
                </li>
                <li>
                    <Link to={'/quiz'}>
                        <img src="/src/assets/quiz.svg" alt="quiz" />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;