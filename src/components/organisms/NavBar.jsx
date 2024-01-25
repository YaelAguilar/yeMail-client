import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const NavBar = () => {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <ul className="flex space-x-4">
                <li><Link to="/">Inicio</Link></li>
                {!user && (
                    <>
                        <li><Link to="/login">Iniciar Sesión</Link></li>
                        <li><Link to="/register">Registrarse</Link></li>
                    </>
                )}
                {user && (
                    <>
                        <li>
                            <button onClick={logout}>Cerrar Sesión</button>
                        </li>
                        <li>
                            <Link to="/profile">Perfil</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;
